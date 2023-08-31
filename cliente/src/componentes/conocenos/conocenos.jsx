import "../conocenos/conocenos.css"

export default function Conocenos() {
    return (
        <>
            <body>
            
                <div className="caja1">
                    <h2>QUIENES SOMOS</h2>
                    <p className="parrafo">La carnicería Andrés Sierra opera con un personal con experiencia, esto
                        nos convierte en un establecimiento que cuenta con un servicio optimo y satisfactorio
                        para aquellas personas que consumen de nuestros productos.</p>
                </div>
                <div className="contenedorMVI">
                    <div className="izquierda">
                        <h2 className="mision">Misión</h2>
                        <p className="parrafo">Somos una carnicería dedicada a la prestación de servicio
                            al público, brindando productos de calidad y bajo costo a nuestros clientes.</p>

                        <h2 className="mision">Visión</h2>
                        <p className="parrafo">Para el año 2026 la carnicería Andrés Sierra prestará de sus
                            servicios por todo Santa Elena, siendo asi un referente de carnes de calidad por
                            todo el corregimiento.</p>
                    </div>

                    <aside className="imgbody">
                        <img src="https://news.agrofystatic.com/carne-carniceria-203759.jpg?d=500x375" alt="" />
                    </aside>

                </div>
            </body>
            
        </>
    )
}