import React from "react";
import "./footer.css"

function Footer (){
    return(
        
<footer>
    <div class="imagen">
        <img src="./imagenes/logo bn_Mesa de trabajo 1.png" alt=""/>
    </div>
    <div class="contenido">
        <div class="textos">
            <h4>Contacto</h4>
            <p>3147175537</p>
        </div>
        <div class="textos">
            <h4>Horarios</h4>
            <p>Nuestros servicios van desde las 8am hasta las 8pm de lunes a sabado <br/>
                Los domingos Nuestros servicios van desde las 8am hasta las 2pm
            </p>
        </div>
        <div class="icon">
            <svg heigth="80" width="80">
                <circle cx="40" cy="40"  stroke="white" stroke-width="4" fill="none" ></circle>
            </svg>
            <i class='bx bxl-facebook-circle'></i>
            
        </div>

        <div class="icon">
            <svg heigth="80" width="80">
                <circle cx="40" cy="40"  stroke="white" stroke-width="4" fill="none" ></circle>
            </svg>
            <i class="fa-brands fa-tiktok"></i>
            
        </div>
        <div class="icon">
            <svg heigth="80" width="80">
                <circle cx="40" cy="40"  stroke="white" stroke-width="4" fill="none" ></circle>
            </svg>
            <i class='bx bxl-instagram'></i>
        </div>
        <div class="textos">
            <h4>Direccion</h4>
            <p>Vía Vda. Mazo, Santa Elena, Medellín, Antioquia</p>
        </div> 
        
    </div>
       
</footer>
    )
}

export default Footer;