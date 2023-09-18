import './productos.css'
import { Link } from "react-router-dom"

export default function Productos() {
	return (
		<>
			<body>
				<nav>
					<img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
					<li >
						<Link to={"/"} >Inicio</Link>
						<Link to={"/conocenos"}>Quienes somos</Link>
						<Link to={"/productos"} class="activa">Productos</Link>
						<Link to={"/contacto"} >Contacto</Link>
					</li>

				</nav>
				<div class="carnes">
					<li>
						<a href='#res'>
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-beef.png" alt="cuts-of-beef" />
							<p>Res</p>
						</a>
						<a href="#cerdo">
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/000000/pig.png" alt="cuts-of-pork" />
							<p>Cerdo</p>
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
				<div class="container-items">
					<div class="item_seleccion" id='cerdo'>
						<li>
							<a href="#">
								<img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-pork.png" alt="cuts-of-pork" />
								<p>Cerdo</p>
							</a></li></div>
					<div class="item">
						<figure>
							<img
								src="https://laestacioncarnica.com/cdn/shop/products/la-estacion-carnica-pezuna-de-cerdo_1024x1024.jpg?v=1621914486"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Pezuña</h2>
							<p class="price">$4600</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://tacisa.com/wp-content/uploads/2016/09/higado-de-cerdo-00007.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Hígado De Cerdo</h2>
							<p class="price">$8300</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://cdn1.totalcommerce.cloud/mercacentro/product-zoom/es/oreja-de-cerdo-kilo-1000-g-1.webp"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Oreja</h2>
							<p class="price">$3200</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://cdnx.jumpseller.com/conocimiento/image/19283040/resize/640/640?1651796102"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Cadeza De Cañon</h2>
							<p class="price">$9800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://www.gastronomiavasca.net/uploads/image/file/3932/lomo_de_cerdo.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Cañon</h2>
							<p class="price">$11700</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://olimpica.vtexassets.com/arquivos/ids/715372/24010610.jpg?v=637756087148700000"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Tocino</h2>
							<p class="price">$11500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://s.cornershopapp.com/product-images/1356705.jpg?versionId=KvdMlPlGcOHiOCi1kyUNpxKNSnx1BArI"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Osobuco</h2>
							<p class="price">$5800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://www.cervalle.com/wp-content/uploads/2020/11/espinazo-1.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Espinazo</h2>
							<p class="price">$5800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>

					<div class="item_seleccion" id='res'>
						<li><a href="#">
							<img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-beef.png" alt="cuts-of-beef" />
							<p>Res</p>
						</a></li>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://mercalan.com.co/wp-content/uploads/2022/08/tabla.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Tabla</h2>
							<p class="price">$16.800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://i0.wp.com/mercalo.co/wp-content/uploads/2022/05/ext.jpg?fit=554%2C603&ssl=1"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>El Extranjero</h2>
							<p class="price">$16800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://imarkt.co/wp-content/uploads/2020/07/Paletero-Biefe-de-Paleta-a-Domicilio.png"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Paletero</h2>
							<p class="price">$14500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://www.eurosupermercados.com.co/media/catalog/product/cache/5db2c2cd17d64c361c13f6f6460f1cf1/7/0/70579.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Cáscara</h2>
							<p class="price">$14000</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://imarkt.co/wp-content/uploads/2020/07/Morrillo-de-Res.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Morrillo</h2>
							<p class="price">$13500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://mercavil.com/38797-medium_default/solomito-de-res-libra.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Zavaleta</h2>
							<p class="price">$14800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://olimpica.vtexassets.com/arquivos/ids/739440/24038379.jpg?v=637784103587330000"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Asadura</h2>
							<p class="price">$2500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2Fb59db14234615dced3219b7df34a91b5%2F1d455190-d7b4-11ec-8364-47b24100120e?alt=media&token=29c2cb30-f175-4903-9a77-4bef05839203"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Tápa De Costilla</h2>
							<p class="price">$12600</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://jumbocolombiaio.vtexassets.com/arquivos/ids/203413/2400365000000-1.jpg?v=637814194449400000"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Punta De Anca</h2>
							<p class="price">$25500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://alianza-zapatoca.s3.amazonaws.com/prod/images/products/optimized/212110-01__1000.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Solomito</h2>
							<p class="price">$27500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://cdn2.cocinadelirante.com/sites/default/files/images/2021/08/conservar-higado-de-res-piotrmalczyk.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Hígado De Res</h2>
							<p class="price">$10800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://jumbocolombiaio.vtexassets.com/arquivos/ids/203442/2406850000005-1.jpg?v=637814194529330000"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Pecho</h2>
							<p class="price">$13800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://i0.wp.com/mercalo.co/wp-content/uploads/2022/05/000002C.jpg?fit=554%2C603&ssl=1"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Solomo Redondo</h2>
							<p class="price">$22500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://mercaldas.vtexassets.com/arquivos/ids/193039/Falda-x-0-5-kg_14847.jpg?v=637287105400530000"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Falda</h2>
							<p class="price">$21000</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item_seleccion" id='pollo'>
						<li><a href="#">
							<img src="https://img.icons8.com/dotty/80/chicken.png" alt="chicken" />
							<p>Pollo</p>
						</a></li>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://alimentoscorona.com/wp-content/uploads/2020/05/menudencia-fina-600x600.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Bandeja De menudencias</h2>
							<p class="price">$5500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://d1cft8rz0k7w99.cloudfront.net/n/3/7/a/b/37abc8c3c46159f6f9199ecac16d2b1d2f03403f_Poultry_174293_01.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Filete De Pechuga</h2>
							<p class="price">$14000</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://d1cft8rz0k7w99.cloudfront.net/n/3/7/a/b/37abc8c3c46159f6f9199ecac16d2b1d2f03403f_Poultry_174293_01.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Bolsa De Muslos</h2>
							<p class="price">$5800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://imarkt.co/wp-content/uploads/2020/07/Pechuga-de-Pollo-1-unidad.png"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Pechuga</h2>
							<p class="price">$7800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://imarkt.co/wp-content/uploads/2020/07/Pierna-Pernil-de-Pollo-X-2-unidades.png"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Pernil</h2>
							<p class="price">$5200</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://imarkt.co/wp-content/uploads/2021/02/Pollo-Entero-Unidad-iMarkt.co_.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Pollo Entero</h2>
							<p class="price">$24500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://mistiendas.com.co/18279-large_default/patas-y-cabezas-de-pollo-promocion-pollocoa-pr-mt.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Patas Y Cabezas De Pollo</h2>
							<p class="price">$5000</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://www.despensa.es/documents/10180/10736/974060_G.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Contramuslo De Pollo</h2>
							<p class="price">$14000</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item_seleccion" id='pescado'>
						<li><a href="#">
							<img src="https://img.icons8.com/dotty/80/killed-fish.png" alt="killed-fish" />
							<p>Pescado</p>
						</a></li>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://supermercadolaestacion.com/35529-thickbox_default/bagre-hueso-carnudo-almin-bandeja.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Bandeja De Hueso De Bagre</h2>
							<p class="price">$9800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://www.superlosmontes.com/site/14391-large_default/trucha-ancla-y-viento-filet-ahumada-250gr.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Trucha</h2>
							<p class="price">$13500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://angelicasmarket.com/wp-content/uploads/2023/04/Pescado-crudo-Tilapia-Rojo-1kg-aprox.png"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Tilapia</h2>
							<p class="price">$9500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://laconstanciacarniceria.com/wp-content/uploads/2021/02/SALMON-NAT123.png"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Salmón</h2>
							<p class="price">$35000</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://imarkt.co/wp-content/uploads/2020/08/filete-de-bassa.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Filete De Basa</h2>
							<p class="price">$21000</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlHIsYexH_SNyujouKc52rze9bDZweLp2VJc2R3KHMrNm3i3DysTQO1qGdimGns4Wsi0&usqp=CAU"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Filete De Trucha</h2>
							<p class="price">$28000</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://lacolonia.vtexassets.com/arquivos/ids/169975-800-800?v=637093562429000000&width=800&height=800&aspect=true"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Bandeja De Camarones</h2>
							<p class="price">$19800</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://distribuidorafp.com.co/wp-content/uploads/2020/11/Cazuela-de-Mariscos-Apromar-x-500-gr.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Cazuela De Mariscos</h2>
							<p class="price">$11500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
					<div class="item">
						<figure>
							<img
								src="https://www.delfinultracongelados.es/wp-content/uploads/2019/08/filetes-de-merluza-del-cabo-crudos-con-piel-imagen.jpg"
								alt="producto"
							/>
						</figure>
						<div class="info-product">
							<h2>Filete De Merluza</h2>
							<p class="price">$14500</p>
							<button class="btn-add-cart">Añadir al carrito</button>
						</div>
					</div>
				</div>
			</body>
			<footer>
				<h5>Copyrigth © 2023 Andres Sierra </h5>
			</footer>
		</>
	)
}