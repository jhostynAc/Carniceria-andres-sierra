import React from "react";
import "./body.css"

function Body() {
    return (
        <body>
            <div class="cuadro-exotic1">
                <img src="./imagenes/logo bn_Mesa de trabajo 1.png" alt="" />
            </div>
            <div class="cuadro-exotic2">
                <div class="texto">
                    <h1>Nuestros productos</h1>
                    <p>son productos de alta calida los cuales son del campo colombiano
                        contamos con los mejores cortes y servicios para nuestros productos
                    </p>
                </div>
                <div class="texto2">
                    <a href="">
                        <div class="botones">
                            <i class="fa-solid fa-cow"></i>
                            <div class="info">
                                <h4>res</h4>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="botones">
                            <i class="fa-solid fa-piggy-bank"></i>
                            <div class="info">
                                <h4>cerdo</h4>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="botones">
                            <i class="fa-solid fa-drumstick-bite"></i>
                            <div class="info">
                                <h4>pollo</h4>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="botones">
                            <i class="fa-solid fa-drumstick-bite"></i>
                            <div class="info">
                                <h4>Pescado</h4>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.5251584926393!2d-75.49555875382457!3d6.233914035712934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4427ba57cfd6ed%3A0x9cf641e74848383d!2sPUNTO%20DE%20VENTA%20LA%20GRANJA!5e0!3m2!1ses!2sco!4v1684432900628!5m2!1ses!2sco"
                    width="1350" height="600" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="cuadro-exotic3">
                <div class="slider">
                    <div class="slide">
                        <img src="image1.jpg" alt="Image 1" />
                        <div class="caption">Imagen 1</div>
                    </div>
                    <div class="slide">
                        <img src="image2.jpg" alt="Image 2" />
                        <div class="caption">Imagen 2</div>
                    </div>
                    <div class="slide">
                        <img src="image3.jpg" alt="Image 3" />
                        <div class="caption">Imagen 3</div>
                    </div>
                </div>
            </div>
        </body>
    )
}

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = 1;
        } else {
            slide.style.opacity = 0;
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); 

showSlide(currentSlide);


export default Body;