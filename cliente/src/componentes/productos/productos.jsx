import { useState } from 'react'
import './productos.css'
import { Link } from "react-router-dom"
import Axios from "axios";

export default function Productos() {
	const [producto, setProducto] = useState([])

	const getproducto = () => {
		Axios.get('http://localhost:3005/Producto',).then((response) => {
			setProducto(response.data);
		})
	}
	getproducto()

	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	const [active, setActive] = useState(false);

	const onDeleteProduct = producto => {
		const results = allProducts.filter(
			item => item.ID_Producto !== producto.ID_Producto
		);

		setTotal(total - producto.Precio * producto.quantity);
		setCountProducts(countProducts - producto.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	const onAddProduct = producto => {
		const existingProduct = allProducts.find(item => item.ID_Producto === producto.ID_Producto);
   
		if (existingProduct) {
		  const updatedProducts = allProducts.map(item =>
			item.ID_Producto === producto.ID_Producto
			  ? { ...item, quantity: item.quantity + 1 }
			  : item
		  );
   
		  setTotal(total + producto.Precio);
		  setCountProducts(countProducts + 1);
		  setAllProducts(updatedProducts);
		} else {
		  setTotal(total + producto.Precio);
		  setCountProducts(countProducts + 1);
		  setAllProducts([...allProducts, { ...producto, quantity: 1 }]);
		}
	  };

	  const handleGuardarTotal = () => {
		localStorage.setItem('Total', JSON.stringify(total));
		console.log(localStorage)
	  }

	return (
		<>
			<body>
				<nav className="menu">
					<img className='logo' src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
					<li >
						<Link to={"/"} class="li" >Inicio</Link>
						<Link to={"/conocenos"} class="li">Quienes somos</Link>
						<Link to={"/productos"} class="activa li">Productos</Link>
					</li>

				</nav>
				<div class="carnes">
						<li>
						<a href="#cerdo">
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/000000/pig.png" alt="cuts-of-pork" />
							<p>Cerdo</p>
						</a></li>
						<li>
						<a href='#res'>
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-beef.png" alt="cuts-of-beef" />
							<p>Res</p>
						</a></li>
						<li>
						<a href="#pollo">
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/chicken.png" alt="chicken" />
							<p>Pollo</p>
						</a></li>
						<li>
						<a href="#pescado">
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/clown-fish.png" alt="killed-fish" />
							<p>Pescado</p>
						</a>
					</li>
				</div>

				<header>
					<div className="padre">
						<h1>CARNES</h1>
						<div className='container-icon'>
							<div
								className='container-cart-icon'
								onClick={() => setActive(!active)}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='icon-cart'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
									/>
								</svg>
								<div className='count-products'>
									<span id='contador-productos'>{countProducts}</span>
								</div>
							</div>

							<div
								className={`container-cart-products ${active ? '' : 'hidden-cart'
									}`}
							>
								{allProducts.length ? (
									<>
										<div className='row-product'>
											{allProducts.map(producto => (
												<div className='cart-product' key={producto.ID_Producto}>
													<div className='info-cart-product'>
														<span className='cantidad-producto-carrito'>
															{producto.quantity}
														</span>
														<p className='titulo-producto-carrito'>
															{producto.Nombre}
														</p>
														<span className='precio-producto-carrito'>
															${producto.Precio}
														</span>
													</div>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth='1.5'
														stroke='currentColor'
														className='icon-close'
														onClick={() => onDeleteProduct(producto)}
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M6 18L18 6M6 6l12 12'
														/>
													</svg>
												</div>
											))}
										</div>

										<div className='cart-total'>
											<h3>Total:</h3>
											<span className='total-pagar'>${total}</span>
										</div>

										<button className='btn-clear-all' onClick={onCleanCart}>
											Vaciar Carrito
										</button>
										<Link to={'/compra'} onClick={handleGuardarTotal} style={{textDecoration:'none' }}>
										<button className='btn-clear-all' >
											Realizar compra
										</button>
										</Link>
									</>
								) : (
									<p className='cart-empty'>El carrito está vacío</p>
								)}
							</div>
						</div>
					</div>
				</header>
				<div>

					<div className='separador_productos' id='cerdo'>
						<img src="https://img.icons8.com/dotty/100/pig.png" alt="Cerdo" />
						<hr />
					</div>
					<div className='container-items'>
						{producto
						.filter(val => val.Tipo === 'cerdo')
						.map(val => (
							<div className='item' key={val.ID_Producto}>
								<figure>
									<img src={val.Imagen} />
								</figure>
								<div className='info-product'>
									<h2>{val.Nombre}</h2>
									<p className='price'>${val.Precio}</p>
									<button onClick={() => onAddProduct(val)}>
										Añadir al carrito
									</button>
								</div>
							</div>
						))}
					</div>
					<div className='separador_productos' id='res'>
						<img src="https://img.icons8.com/dotty/100/cuts-of-beef.png" alt="" />
						<hr />
					</div>
					<div className='container-items'>
						{producto
						.filter(val => val.Tipo === 'res')
						.map(val => (
							<div className='item' key={val.ID_Producto}>
								<figure>
									<img src={val.Imagen} />
								</figure>
								<div className='info-product'>
									<h2>{val.Nombre}</h2>
									<p className='price'>${val.Precio}</p>
									<button onClick={() => onAddProduct(val)}>
										Añadir al carrito
									</button>
								</div>
							</div>
						))}
					</div>
					<div className='separador_productos' id='pollo'>
						<img src="https://img.icons8.com/dotty/100/chicken.png" alt="" />
						<hr />
					</div>
					<div className='container-items'>
						{producto
						.filter(val => val.Tipo === 'pollo')
						.map(val => (
							<div className='item' key={val.ID_Producto}>
								<figure>
									<img src={val.Imagen} />
								</figure>
								<div className='info-product'>
									<h2>{val.Nombre}</h2>
									<p className='price'>${val.Precio}</p>
									<button onClick={() => onAddProduct(val)}>
										Añadir al carrito
									</button>
								</div>
							</div>
						))}
					</div>
					<div className='separador_productos' id='pescado'>
						<img src="https://img.icons8.com/dotty/100/clown-fish.png" alt="" />
						<hr />
					</div>
					<div className='container-items'>
						{producto
						.filter(val => val.Tipo === 'pescado')
						.map(val => (
							<div className='item' key={val.ID_Producto}>
								<figure>
									<img src={val.Imagen} />
								</figure>
								<div className='info-product'>
									<h2>{val.Nombre}</h2>
									<p className='price'>${val.Precio}</p>
									<button onClick={() => onAddProduct(val)}>
										Añadir al carrito
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</body>
			<footer>
				<h5>Copyrigth © 2023 Andres Sierra </h5>
			</footer>
		</>
	)
}