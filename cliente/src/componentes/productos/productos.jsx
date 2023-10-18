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
	return (
		<>
			<body>
				<nav>
					<img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
					<li >
						<Link to={"/"} >Inicio</Link>
						<Link to={"/conocenos"}>Quienes somos</Link>
						<Link to={"/productos"} class="activa">Productos</Link>
					</li>

				</nav>
				<div class="carnes">
					<li>
						<a href="#cerdo">
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/000000/pig.png" alt="cuts-of-pork" />
							<p>Cerdo</p>
						</a>
						<a href='#res'>
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-beef.png" alt="cuts-of-beef" />
							<p>Res</p>
						</a>
						<a href="#pollo">
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/chicken.png" alt="chicken" />
							<p>Pollo</p>
						</a>
						<a href="#pescado">
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/clown-fish.png" alt="killed-fish" />
							<p>Pescado</p>
						</a>
					</li>
				</div>

				<header>
					<div className="padre">
						<h1>CARNES</h1>
						<div class="container-icon">
							<div class="container-cart-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="icon-cart"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
									/>
								</svg>
								<div class="count-products">
									<span id="contador-productos">0</span>
								</div>
							</div>

							<div class="container-cart-products hidden-cart">
								<div class="row-product hidden">
									<div class="cart-product">
										<div class="info-cart-product">
											<span class="cantidad-producto-carrito">1</span>
											<p class="titulo-producto-carrito">Zapatos Nike</p>
											<span class="precio-producto-carrito">$80</span>
										</div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="icon-close"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</div>
								</div>

								<div class="cart-total hidden">
									<h3>Total:</h3>
									<span class="total-pagar">$200</span>
								</div>
								<p class="cart-empty">El carrito está vacío</p>
							</div>
						</div></div>
				</header>
				<div>

					<div className='separador_productos' id='cerdo'>
						<img src="https://img.icons8.com/dotty/100/pig.png" alt="Cerdo" />
						<hr />
					</div>
					<div class="container-items">
						{producto
							.filter(val => val.Tipo === 'cerdo')
							.map((val) => (
								<div key={val.ID_Producto} className="item">
									<figure>
										<img src={val.Imagen} alt="producto" />
									</figure>
									<div class="info-product">
										<h2>{val.Nombre}</h2>
										<p class="price">$ {val.Precio}</p>
										<button class="btn-add-cart">Añadir al carrito</button>
									</div>
								</div>
							))}
					</div>
					<div className='separador_productos' id='res'>
						<img src="https://img.icons8.com/dotty/100/cuts-of-beef.png" alt="" />
						<hr />
					</div>
					<div class="container-items">
						{producto
							.filter(val => val.Tipo === 'res')
							.map((val) => (
								<div key={val.ID_Producto} className="item">
									<figure>
										<img src={val.Imagen} alt="producto" />
									</figure>
									<div class="info-product">
										<h2>{val.Nombre}</h2>
										<p class="price">$ {val.Precio}</p>
										<button class="btn-add-cart">Añadir al carrito</button>
									</div>
								</div>
							))}
					</div>

					<div className='separador_productos' id='pollo'>
						<img src="https://img.icons8.com/dotty/100/chicken.png" alt="" />
						<hr />
					</div>
					<div class="container-items">
						{producto
							.filter(val => val.Tipo === 'pollo')
							.map((val) => (
								<div key={val.ID_Producto} className="item">
									<figure>
										<img src={val.Imagen} alt="producto" />
									</figure>
									<div class="info-product">
										<h2>{val.Nombre}</h2>
										<p class="price">$ {val.Precio}</p>
										<button class="btn-add-cart">Añadir al carrito</button>
									</div>
								</div>
							))}
					</div>
					<div className='separador_productos' id='pescado'>
						<img src="https://img.icons8.com/dotty/100/clown-fish.png" alt="" />
						<hr />
					</div>
					<div class="container-items">
						{producto
							.filter(val => val.Tipo === 'pescado')
							.map((val) => (
								<div key={val.ID_Producto} className="item">
									<figure>
										<img src={val.Imagen} alt="producto" />
									</figure>
									<div class="info-product">
										<h2>{val.Nombre}</h2>
										<p class="price">$ {val.Precio}</p>
										<button class="btn-add-cart">Añadir al carrito</button>
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