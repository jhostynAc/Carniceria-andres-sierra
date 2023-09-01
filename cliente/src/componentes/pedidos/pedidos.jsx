import '../pedidos/pedidos.css'
import { Link } from "react-router-dom"

export default function Pedidos() {
    return (
        <body>
            <div class="carnes">
                     <li>
                    <link to={"./res.jsx"} href="" />

        <Link to={"/res"}>
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-beef.png" alt="cuts-of-beef"/>
            <p>Res</p>
        </Link>
        <a href="">
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-pork.png" alt="cuts-of-pork"/>
            <p>Cerdo</p>
        </a>
        <a href="">
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/chicken.png" alt="chicken"/>
            <p>Pollo</p>
        </a>
        <a href="">
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/killed-fish.png" alt="killed-fish"/>
            <p>Pescado</p>
        </a>
    </li>
</div>



<section>
    <h1 class="titulo">Cadena de abastecimientos</h1>
    <p class="info">Mantener la higiene en la carnicería y cada etapa de producción, comercialización y conservación
         de la carne animal, es una necesidad para la salud de los consumidores y de los mismos operarios.
         . De no cumplirse con las normas de higiene, existe el riesgo inminente de generarse problemas de
          salud y enfermedades tipo ETA "enfermedades de transmisión por alimentos" como:
Intoxicaciones.
Envenenamiento de tipo agudo y crónico.
Infecciones gastrointestinales por microorganismos como la Salmonella y E.Coli.
Falla orgánica múltiple. </p>
<p class="info">En Colombia la carne de res cuenta con varios perfiles que constituyen su cadena cárnica
comercial, es decir, para que el producto llegue al consumidor final previamente ha pasado entre
4 a 6 agentes intermediarios que incrementan el precio final, y es una debilidad que podemos
identificar y principalmente está afectando directamente al productor en cuanto a sus ganancias
totales obtenidas por el producto y a la cadena en cuanto a su desarrollo y productividad.Posteriormente debe incluirse un proceso de Abastecimiento, el cual permite establecer
relaciones con un mercado proveedor de insumos y servicios, los cuales se requieren para el
proceso siguiente que es el de producción en el cual se incorporan los insumos </p>
 <div class="galeria"> 
    <img src="https://tiendadecarnesfp.com/wp-content/uploads/2021/03/1-Tilapia-5-1-300x300.jpg" alt="" />
            <img src="https://tiendadecarnesfp.com/wp-content/uploads/2021/03/7-Espinazo-8-1.jpg" alt="" />
            <img src="https://media.scoolinary.app/blog/images/2020/07/despiece-carne-de-cerdo.jpg" alt="" />
            <img src="https://thefoodtech.com/wp-content/uploads/2020/09/maduracion-de-carne-de-pollo.jpg" alt="" />
            <img src="https://vixark.b-cdn.net/lp-i-i-g/carne-de-res-del-%C3%A9xito-1kg-solomo-y-ca%C3%B1%C3%B3n.jpg" alt="" />
            </div>
            
            </section>
    </body>
    
    )
}