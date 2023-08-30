import { Link } from "react-router-dom";
import "../pedidos/res.css";

export default function Res() {
  return (
    <body>
      <nav>
        <li>
          <Link href="./index.html" class="activa">
            Inicio
          </Link>
          <Link to={"/conocenos"}>Quienes somos</Link>
        </li>
        <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />

        <div class="padre-desplegar" id="padre-desplegar">
          <li class="producto" id="producto">
            Producto
          </li>
        </div>
        <li>
          <Link to={"contacto"}>Contacto</Link>
        </li>
      </nav>
      
        {/* tarjeta */}

<div class="container">

        <div class="banner">
            <img src="img/banner.jpg" alt=""/>
        </div>

        <h1 class="title">Nuevos Productos</h1>

        <div class="product-grid">
            <div class="product-grid__item">
                <div class="product-grid__imagen">
                    <img src="https://brandpetram.imgix.net/redbuchef/vaca/arrachera-gallo-res-de-vaca-mayoristas-en-mexico-redbuchef-3.jpeg" alt=""/>
                </div>

                <div class="product-grid__info">
                    <p class="product-grid__name">Arrachera</p>
                    <p class="product-grid__price">$9.00 / kg</p>

                    <a href="." class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito"  >Agregar al carrito</a>

                </div>

            </div>

            <div class="product-grid__item">
                <div class="product-grid__imagen">
                    <img src="data:image/jpeg;base64,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" alt=""/>
                </div>

                <div class="product-grid__info">
                    <p class="product-grid__name">Aleta</p>
                    <p class="product-grid__price">$5.00 / kg</p>
                    <a href="." class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito" >Agregar al carrito</a>
                </div>

            </div>

            <div class="product-grid__item">
                <div class="product-grid__imagen">
                    <img src="img/limon.jpg" alt=""/>
                </div>

                <div class="product-grid__info">
                    <p class="product-grid__name">Limón</p>
                    <p class="product-grid__price">$3.00 / kg</p>
                    <a href="." class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito">Agregar al carrito</a>
                </div>

            </div>

            <div class="product-grid__item">
                <div class="product-grid__imagen">
                    <img src="img/platano.jpg" alt=""/>
                </div>

                <div class="product-grid__info">
                    <p class="product-grid__name">Platano</p>
                    <p class="product-grid__price">$5.50 / kg</p>
                    <a href="." class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito">Agregar al carrito</a>
                </div>

            </div>

        </div>

        <div class="modal" id="jsModalCarrito">
            <div class="modal__container">
                <button type="button" class="modal__close fa-solid fa-xmark jsModalClose "></button>

                <div class="modal__info">
                    <div class="modal__header">
                        <h2><i class="fa-brands fa-opencart"></i>Carrito</h2>
                    </div>

                    <div class="modal__body">
                        <div class="modal__list">
                            <div class="modal__item">
                                <div class="modal__thumb">
                                    <img src="img/naranja.jpg" alt="Naranja"/>
                                </div>
                                <div class="modal__text-product">
                                    <p>Naranja</p>
                                    <p><strong>$9.00 / kg</strong></p>
                                </div>
                            </div>


                            <div class="modal__item">
                                <div class="modal__thumb">
                                    <img src="img/manzana.jpg" alt="Naranja"/>
                                </div>
                                <div class="modal__text-product">
                                    <p>Manzana</p>
                                    <p><strong>$5.00 / kg</strong></p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="modal__footer">
                        <div class="modal__list-price">
                            <ul>
                                <li>Subtotal: <strong>$14.00</strong></li>
                                <li>Descuento: <strong>$0.00</strong></li>
                            </ul>
                            <h4 class="modal__total-cart"> Total: $14.00</h4>
                        </div>

                        <div class="modal__btns">
                            <a href="." class="btn-border">Ir al carrito</a>
                            <a href="." class="btn-primary">Comprar Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">
            <img src="img/banner.jpg" alt=""/>
        </div>

        <h1 class="title">Nuevos Productos</h1>

        <div class="product-grid">
            <div class="product-grid__item">
                <div class="product-grid__imagen">
                    <img src="https://brandpetram.imgix.net/redbuchef/vaca/arrachera-gallo-res-de-vaca-mayoristas-en-mexico-redbuchef-3.jpeg" alt=""/>
                </div>
                <div class="product-grid__info">
                    <p class="product-grid__name">Arrachera</p>
                    <p class="product-grid__price">$9.00 / kg</p>

                    <a href="." class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito"  >Agregar al carrito</a>

                </div>

            </div>

            <div class="product-grid__item">
                <div class="product-grid__imagen">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFBgWFhUZGRgZHBwcHBwaGiEeHx4ZGhohGhoeHCQfJC4lHB4rHxgcJjgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHxISHzYrJSw0ND02NTU0NDQ0NDQ0NDQ0NDY0NDY0NDQ0ND00NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKIBNwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGBwj/xAA9EAABAwIEAwYEBAUDBAMAAAABAAIRAyEEEjFBUWFxBQYigZGhMrHB8BNC0eEUUmJy8QcWgiMzstIVosL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKhEAAgIBBAIBAwQDAQAAAAAAAAECEQMEEiExQVETImGRMnGBoQVC0SP/2gAMAwEAAhEDEQA/APsyIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAwiKCriWN1c0dSoboJWToqJ7Tp7Onp+6rv7aYDEep/SVVzivJdY5PwdZFxf8A5qdGj1lbntN/8rfdQ8sUW+Gfo66SuBU7ccPytPmVrQ7xyfEyOjpPoYT5Y+yfgyVdHoVlc+j2pSdbMGng7w/OxVxlVp0IPQq6kn0ZNNdkiLCKSDKIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIsSkoAijfUAEkgDmYXMr95MGww7E0geH4jSfQFRaJUW+kddF52v3zwTda09GOPvELmYv/AFFwrQcjXvdt4co8ydPQqHOK7ZpHDkl1FntCV5btvvI5oAoGmQfzveMuu1/deE7b72YjEAt/EFNhtlZItvmdqell5xzQOcbrKeT0d2HQS7mfR3d5mWbVxLJ3yHwz1aond6sIyfGXdGk/RfOKda/wtI6KVzgRfyj7ssW3Lyda0kF7Pb/7vw7nACw3Lgf0srNXvFh2kDMHWnwt+ui+eikIvEDS+pWHvcBa/ICY8+ZUNUi608bPoP8AuvDgxlfPGBHsZWH966QEguPINj5lfPm5gYJvwG3U8VtVZxMdCq9k/BBM95/u6kRBzjnlafrdW6PamEfEVmg825fmF81e5w0HmtW1nEgff7KLXkt8EWvpdH1ljKb2nLUa4DXKbjy2VbF4AG7fWNl4J2Ja14/Ae8CLlxgzuBl1CtUO8GIpERUe4E6OGYHlf6KejB6Vvlf8PT1KdRgGVzhzkwqlXtrGU9HPEf1SPR1lG3vu2fHS65Tf0IXX7N7Sw+JJYJDokNeBfjHFWU2YT07SuSJOy+99YjxBrwNZ8Dh5i3svT9n94aNW2bK7g63odCvJ4jsRg0Dm9Db3VJvY5EhrietiPSyuszRg8EZfY+oArK+WjEY7DkGlUBYI8Lxmaf8A1PQhd/snv1Sc4U8Q38CobAkywnr+Xz9VvHJFnNPDKPXJ7RFgFZWhiEREAREQBERAEREBhFo+oACSQANSbBeT7Z770afhplr3cSSGj0En2HNQ2l2XhjlN1FWeulUsZ2pRpfHUa3lMn0F18p7R7y1qx8VdzWn8tOQPvquTVxjz8ALW2Ek39T8lT5EdkNBL/Zn0rG9+qLTFNj6h4wGj3v7LgYrv5in/APaZTYOJBefWQPZeMY8m5efUkrFWpSaQSc55aC23+Vm8jOuOjxR8Wduv3zx2+IvwDGNAHMxMqhW714p3xV6l7QHkf+JEKi+oY8FNjRpNT4jPC8jXYI/IWxedLGRz+IZlRyfs3jix+I/0Qvxbnu8XiJ3eXO+ZQ1YgNhoHAa81vTyNI8AnYGfLQhSODWvgFmty1kweUgnX7KpvN1i+xVz1H7OdBtbhzWrMK4mACJ0JsrdSs6Bw4m6tuxLGFrqDnS25zAAnplNunBUu+Wa7dvCOazDu0z67Qf0VinhZtJ52su1S7x1XABzWvtJkNIHIy2VvicW05XNDabhObKDrrIvborJoptm+ao5VPDEEZBMcW/KdVpVwDxBcxwHMFs+uqsHtVwd4nuO9z+ba4W9TttjjL2ioBsXOtpoQpt+idvmyh+Efyho5kyfbRdLsvs5tVpzVi0tEgACS3Ukzr+62biMO9pcx7aZGrXn5OAuFw6uKaXOAOaNxJHUFQ4tk/wDntpPksHNfKBHGBPUQFtRZUIkCOJVKlXNyJ9PkrH8e7KQT7KVB+yd2PyiSpTcCD4HdCVG8kWDDzJsP8c1Xk6q03EFrcgIdNzbTlcJLG/DEZwb6K765izQJ4fdlsyoRZ0xsDx4/JS06j2kFuu0aq5UeXNBfdwkA8vos5RlFWbwjGTpFGvU/EfmcNgDAF4HzUuGr/huzNc4OaZabADqrGIr03BoZTyuAuSbOPH5qkRaPv/CpUlyNkZKuj0H+8cRHwsd1aQfYrWh3wrzDmMM/0n9VxMPVIBbMtnTZYqZSTALRtvCvGfs5p6OPhHscT2w99IuaA17XNOUaOZPi9ly3YqlXqOoV2t1hlRttdAf1VPsupIc0uAygkOcYFuJUruzGYhzH03NY54uCQIeBeOuq1e1r6Tj+Da2n+T3Pd7Guw2Wi9xdRMBrnXLHbA/0n26ae2C+NOxZyCi5/jZmAOpB0F9+F19V7Dqudh6LnmXOpsLjxdlE+63xSfTPL1WD43fs6KIi2OQIiwgCKN9QNEkgDmVQr9rsGku6CB6lQ2kWjCUukdFcntjvBQww/6jxm2Y27j0A06mAvLd4+3q5lrX/hsAJdl+InYZjp5QvA1MSLwBmMlxcSSZ47zceiyll5pHoYf8dJrdPr0j0va3bVfG5gCGMGjWu57xdxFpNgNufkHNDbcDqfuVuzEtYHCQC60m3hn24x0UbWtfYAknYek/fFYSk2z1seKMI7YqiV7w3QEkxBN/bRV6lKfETM7Sf0VpuCLT43QdABcx5aey3qFlMHMDI0adSD/Ns1RcmWaiv3IWse5sGGsGv5W29yfUrEtAhguPznU/2j8vXVV8RinPu5waNmibDlH1WGNIPD2iEclErGLl3wjtdlBjKT3lzC+SGtfJAkXcBBzE6cOJ2XPbRJNtYk/Um9lhmWC4uvs0CPMn6e61D4Gp+izcm+zeEFG6Jg4Q0A5SJl0X/4xoo3vp+L4y4WaDEc5+wtmUiRncRHUTG1uEqCvWiALT6mdyTupQkqN6DC7wl4YDe5MfdhupcOxufKdYMEwbgWibXMDzVWu0TDbj681LQe2BNy02vF9fRXjDnkzc+OCQVi6JkDYSBpfSIAUJqgNa29yZPPlsrOMy2gHNAMRAHEcVzq0WMKVFJlZTcomM7HO8RdEEE/LVQVH28I24z1UgpGbi3pH7rWo4NJAHrb04K6MZNkjGtyxud7crdP3Vh7xkgHUXtzVXC0g5wzPygAuJAmIvb29VloLvh2tOgA0udB1SivJaZioZZsuLtBex/dRYisHZhreLG0bqGsdYO/HWFl0A9N/mprgncSODW6F0Gx8RtvIWGPeXHK6JtJAgeullDXfaBv93+91pSqQ0g6GLRrCkgmGMexwDg14nazo1nhorNXtbZrCebiB8pVNjSRJ0N7/d1hkNJi8lRti3yWWTJFVFlmjjS8lroYOR18zosvwhcPAbczr0ULnCxG3ARN9+d9Vs+qRm8UxF51uP8ACOEbLLLLbT/JO3s7wznIMeR8lHhsHVc4tc4AAST9AtRjHG89BqP2UjcYXF09LcPsqkoR6RtDLStst18OWgBpk8/vVUa2GrC5EcwZ+SssrTxsPqpH460QBy6LHbTaOhyTSZFgMwe0ukNBBO+hX1Ds/v5hGMYxwqNytickgRbYz7L5c+va2ige+RcqYTlHo59Tp8eat3j0fe+xu8GHxIJo1A6NRBDh1aQDHPRF8r/08pu/jaZBNmvmOBa7XlOXzhF2Qm5Kz5/UYI457Ys+1KnUx7b5TmIMW0nquB3l7Rql4o0pa3WpUBgho1DTsY36rgY7vGGDLTAJOh2HMqMmXbwi+n0M8qTR6nHEPIzO00E2XJ7Yxf4dNzmxmFh1P3K8VW7x14OZwjhHArbsTtVlV+Ws4uOrZNp4QueORN0etDQvGrbtLwjp9oYIuYLkOIBJ/mdF+q8O3DHNJcQZ2OoB09V77tXtUMYcoBOxItHlqvKUiLkCx4Dc7DgLqzinLg33NQ+r+COnh2NdmeJIvAHsSpa73AkgBjNfD/LzOqzRY34pJGvp/hQ9o4uGxpJ0HLU+/stNvFsweR3SO3jf4GnSimXVKrhYtLoDouTFrax/leVe6DJ8UyY5j5rRriXQOOvks5M7ixoLo3NtNTyHv5rNKlZWKri2asDj4gLHeIHMCVNRuYEzsN1M2k94DblrYA2iTz+7LoYPs4eKHiWkAkX8xubfXgoWJyfBssqguSk6kQYIPBWcSxgYHMYSRYmLTE34FMTiADkYBeZJF9Jk87n0G6pfxj4LQ4hpmW7Rz4mYTYkXWRyV9GlUADxE5ifL/Auo21ACYGYkEXne0jmo3VL8ra/eilaJuRAKlIiTMsp8bfWVZY3KPDZxkE79BwUQInSZWsOg5VojN/ckqOAdBuBafqtGYV7yQBHOYGk3KMolwLnOADYzHeNBHG9lPicVnhoBaxrcrW8Z1J5mUaIUr4Oa+tAtDonpPFQ4drycrZJPAesypsThcgEXa42PMbTvqpn4shjWCG/zEWJBNmk8I9ZRGDXPJNi8XTGZlNjWhzWh7wLkiCQDoBI2sqBMNn0A+ZWabJ1ENQsmTsTA5xuOQSvJZyb4I2U3HxZbDXh581hpn9/0C3DYtJhZFLQam9uQ48EHRvg8FncRIAFy46ADitsQGh3g00HHqt2Pc0FocQD8QBseHX9lC9t/CPNQ2iyXBE+51vprwWa0NMb2+Sk/CM81D+CSoshpkbbCFlz4UhZF1GxgMyf3Vkysr6GQgSdDfyWabjeDry46rZ4LjpyHIBbsyhTxRCttItMb4BG9vqt3UflH36qwRpMCAABvz81pUfHX5LNRVWdEpO6K7nBoI1KiYwuMbKUN3Xf7r9062JeHQWUgRmcbTGob/MfYeyKN9Gc8uxXJ8Hsf9MOyCym7EObBf4Wz/KDc+bv/ABRe6oUmsYGtADWgAAbAWARdKVKjwcuVzm5HzzvPUcXPa0k5XHM2dyZaTxELzuCwD6hDhIF80ETcRDb63mTwXov9RKDqVVldsgOABI4tsQeIIix4Lz1XHwG1aYANpA2IsRG43C554/qs+h0epXwKK4b8lDtXCtY8NcTI6D1g6+e6xgqBbDsoE3BNvMea52OY8uL3EnMZJIgeKbdIspMNWc5jZuGm3G9o6A381k4tNujrjkUko3+5d7VfIaBbKABe5g6+qo4atlgG02cD1nforOIbIzC4adDoRMRfeT7qDFNa0DOQXCbDUj7i5Ux3J2VypNEmJxIEkHK3T2OypOqB5cbnKDl5H4nE+3sq2LPgDj/xbNuvRZwFPNroSD/dDoDbXuZP+Fsvq7PPk9r4OhggCdCLQJvAG3yurWF7OeZfAgRMn3NvuVPiadOk1hdeoZLmAw6JtMfDIniSqGKxsgANl0zu6Y5cPbkp2rt/gspPx+S3XpwBfLIuCRMnUkDSI63Fr3gfiwychMEEFxF4cII5/SFTe95Nw0dAInfTh+ywWZdbkWA26+Wv3eJOui8Y++STEyHEh2Y6c7iIjoYVdgNzMfVHumx4kz81PWIgQJGUR+/OVRGz6NGNaNSZ2Vqjh8+jwDFg4x5N49NVXawkEk8Pr+ykm8D2t7rRGTAYCCSYA46k8gOq3YwETccRGnVaviZgTx4b2W1N9iNjtGu6Mhcs1c21tOe/Cy0yAG9t4GvmrLDlgiw4n5ALWq0F0MEk3033EBQ+eRdcET2hzfELbCeFgfKSosRgw0iNOJtPOOHDip24YjxPO+3yCq45+VwLnENLTDS6wLeA8x7qES6S5InAuIaNB7cT525rYzYE2FlLTYQ/Uz9VqWeai7J2NdkLnbDoFdw9EsbEnxfEJtrICzRwYjO642HHn0UpYd91Vt9FowV2zLq2gDW8Jy36qBrbqYshYLIHNRya7URlozG0gabdPJYY6LBrY3BGvnqt2jdauMKLZDivJh9Vsw6iwjlmaR0MrDWUzZlMA/1OcT5bI+nN1Lg8BUquy0mOc7g0TA4ngOZV4tmE9q5ZQqU3D8utuik7MwjqtVjQMxc4NHUmF6+h3ExjwC5rW/3PH/5lew7pdzG4VxqPcHv2gWbOpE6naVZwk6Rg9Vhxpu7fhfcrUv8ATqlMvrVHf2hrY9ZV6h3AwbTJD3/3O/8AUBerWV0bV6PIlqMr7kzlYXsDC04yUKYI0JaCR5mSumBC2RSZOTfbMoiIQcrvB2Y3EUHUzqRLTwcND9PNfEKoNJzmOsWmOhB/z6r9BFfNP9QuxAH/AIjRAeJ00eIn119VSUfJ2aTNte19M8ph2Z2iibNfdpjR8eE9LkHquQ1jmPc1wi+VwjRw39j5XXT7HYDUax58Ic1zCOE+IT00810+83Z/xVmgbh3SIzdRoeUcCsqXR66bTtHnX1ywwDAcNNpG/XfyWatAP8e7gI34E68JNlTpt0b5tPDkuj2Uc0sI1Jyxs/Ut6G8eaq4pl976ZzcUGZC3RwIIPqY99VFhq7g9pFiyCD/UBAP1Vl2Be97gQZ1vaAta9KIA87g38lPJRRttsz/FucS5xLidzMjmOBsPRbsEtgTN50iFrSoNNswaf6pjyMWN97Keph3MjM2J05x8+qm2WUV0jVk6nbjyWfxLAZY++aPIuPdARAERE33P3CB8ET2axMTbn1+ala1oDbzc/tP6I0QMzpMyArNBoyOzWIII6XkffNEiGzRzrQNenP79FhzIsNTr57ch+ilaDroPfqtXEaWA3PHrxUlLNGtvYZua3aQOBOwCOI14bkR6BbNoOcCWggDjb2P1vyUi/RE53HXhw++alwzSJIGiy2iBz5KalRcbCw9uvMqKHQyZjMydLbRqOSo49rRDo0NjAMSNuOi7lPCmAG3Hv+3NZHZzqjm02NLjId4ZMAdL7q0f1JlMrWx2zjdnEPAbJzDjqR9Y4qVlCHERpZdftju06m0OdTLOD2y0yAdT0lUsNWzszAXzQTxjcKuXFt+pdFtJqlkjsa5Xkw9vgDdgSfX/AAoiyIi/0Vl7JC3oYVzrNa5x4AE/JZcs7HtXZU/CG6xVy2j7K7uG7t4l+lJwndwyj/7QvS9l9w2g5qzp/pb8i79B5q6g34ObLqsUO3/C5PnjKbnuDWAl2ga0Ek+QXd7P7j4uqQXNFNvF5g+TRJ9YX1PBdn0qTctOm1o5CCep1J6q4tFiXk83J/kZviCo8b2Z3AoMg1XOqEbfC30Fz6r1eFwrKbQ1jGtaNmgAeysItEkujinlnN3J2EWUUmYREQBERAEREBhcnvH2f+NQc0fEPE3+4beYkea6yITF07R8HxOFvaxOo0hwOo4Hj6hRVe2MQzwPGcTcEQeBkjUeS+nd5O6gquNWkAHm7mzAceI2zdYniF887VwFRjiHhzSOP1H1WTR7GHMprh/wcRzgQDlLJMAkHLm4A7abwpnZmEPG0E5dDwcOV/mFuzFVWGAbCSQZIvoY5cVVw2djiXGWuNwNBzA0H1TajVzlfKO/j8cX087GtLjAzC5HEH0sV591IjxbEg2n6aK1TAYS5kZXfE2bOjccHcvsWqeEFRssJLdeMHcclRxZrCcXw1Rz6TA4sa1sjnOk3BjkrXaYzvsIvYcgNOWit4Hs15cHAfD4iNzGghZxeAqiXZNyTcQBvPAKUrLye3o51KjeT6bx9FmuywdoCYHMjbothSAvJJO8fLlzVlgAYIAETfrqRxNgPNSkZOT8lUNLRJjNsOEqxTpkmIv7DmVqSPiJ6DUn75LannfpYekJ0RyyCq0lxZqBrG5n5IxsENaC57hOXgBueQWwfEhnGHP2G/nssUcMQNZkk8eGp3sAoZdRvhBlNoAcXZnzMbA3gbSRblZTCo4yYk6yfvVZp0uU/fFXKVCdrbISkkqK1DDucb2C6dGnxOVg94+imw1Ek5Wtc938rRmPnGnUrvYDujWqODq8MZrlBzO/Tz9laKZz5csI9ukefFQucGsa5xOjWgmfS5K993U7FNBhe/8A7j4n+lo0b+v7Lq9ndl0qLctNgHE7nqd1eWiR5ufU71tiqR53vrUZ/CvpukmoC1oAk5okHkBF/wB14rsvurXe1oyQOLvC3yGp6wvqpCAKHHd2MOqeGG2K5fk8vgO5dFl6hLzw0b7XPmY5L0dDDsY0NY0NaNA0QPZTopSS6MZ5ZzdydhZRFJmEREAREQBERAEREAREQBERAEREBhc/tDsulWBD2gk7720XQRCU2naPnva/crVzXQ1o4A21NhdeXq9gFrSW12xsTEDkc2i+0wuVie7+HfOZliZIDnNE9GkBRR2Y9XSqX9HxbHdnVWOcJIPJo9xsZTAB7XSzwvN3houQ06tHD5T0X2DEd1sO5sNblPEEnpIJvqvLdr903iIY4kSQ6mSdOWoPlHNRKPo6ceqxtq/7PN4nFE/kI6wGkjiBc9Oit4LtFhAZVaerdPPQjhup63djHmhnBM6hrz444loEHaxJPLZeebUq6VKcOBiWiPVp0P3Cz/SdkMqy8R5X7nY7RwzI/wCi4nMR4XCRHK1rqpg8I14cTO4mJkix14ArsYTE02tjLlIGpuY4nmq57Vc0jIwBoF51N7RwOqWW2LlI4VPDEOzO0B0P7aLLnO+FgtBkix/48OquMe4vzOEybhxgFXmlzZcAAHWADQBHWJKhchpJ/Y5mF7MmBIA1895V7+ADTGYGOH7rodkdnVK1mNLr3fEMF7X5cBJXqcB3NY0h1Vxcf5RYeup9laMaObNrIx4R4ujhwTlYC88AC72GpXpuyO6r3w6tLG/yj4j1P5R79F7HC4JlMQxjWjkPmdSrKuoo8/Jq5yVLgrYXCMptDWNDQNh9eJ5lWUWVY5G7CIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDEKljezaVUeNgJ46EdCLq6iEptco8X2j3L+J1F9z+V3LgR+i4eI7GxRIDqJ8IiQARy+HVfUFhQ0dMNZkiqfJ80wXdXEOPwZOLnET6CT5QvS9nd0qbINVxqkbGzR5b+fovToiVFcmpyT81+xpTphoAAAA0AsAFIiKTnCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID/2Q==" alt=""/>
                </div>

                <div class="product-grid__info">
                    <p class="product-grid__name">Aleta</p>
                    <p class="product-grid__price">$5.00 / kg</p>
                    <a href="." class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito" >Agregar al carrito</a>
                </div>

            </div>

            <div class="product-grid__item">
                <div class="product-grid__imagen">
                    <img src="img/limon.jpg" alt=""/>
                </div>

                <div class="product-grid__info">
                    <p class="product-grid__name">Limón</p>
                    <p class="product-grid__price">$3.00 / kg</p>
                    <a href="." class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito">Agregar al carrito</a>
                </div>

            </div>

            <div class="product-grid__item">
                <div class="product-grid__imagen">
                    <img src="img/platano.jpg" alt=""/>
                </div>

                <div class="product-grid__info">
                    <p class="product-grid__name">Platano</p>
                    <p class="product-grid__price">$5.50 / kg</p>
                    <a href="." class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito">Agregar al carrito</a>
                </div>

            </div>

        </div>

        <div class="modal" id="jsModalCarrito">
            <div class="modal__container">
                <button type="button" class="modal__close fa-solid fa-xmark jsModalClose "></button>

                <div class="modal__info">
                    <div class="modal__header">
                        <h2><i class="fa-brands fa-opencart"></i>Carrito</h2>
                    </div>

                    <div class="modal__body">
                        <div class="modal__list">
                            <div class="modal__item">
                                <div class="modal__thumb">
                                    <img src="img/naranja.jpg" alt="Naranja"/>
                                </div>
                                <div class="modal__text-product">
                                    <p>Naranja</p>
                                    <p><strong>$9.00 / kg</strong></p>
                                </div>
                            </div>


                            <div class="modal__item">
                                <div class="modal__thumb">
                                    <img src="img/manzana.jpg" alt="Naranja"/>
                                </div>
                                <div class="modal__text-product">
                                    <p>Manzana</p>
                                    <p><strong>$5.00 / kg</strong></p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="modal__footer">
                        <div class="modal__list-price">
                            <ul>
                                <li>Subtotal: <strong>$14.00</strong></li>
                                <li>Descuento: <strong>$0.00</strong></li>
                            </ul>
                            <h4 class="modal__total-cart"> Total: $14.00</h4>
                        </div>

                        <div class="modal__btns">
                            <a href="." class="btn-border">Ir al carrito</a>
                            <a href="." class="btn-primary">Comprar Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script src="js/app.js"></script>
    </body>
  );

  

}
