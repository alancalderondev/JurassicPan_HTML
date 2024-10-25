class CarouselContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
            `<div class="carouselPanel">
                <div class="carousel">
                    <div class="carousel-container">
                        <div class="carousel-slide active">
                            <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80" alt="Bienvenido a Jurassic Home">
                            <div class="carousel-content">
                                <h2>Bienvenido a Jurassic Home</h2>
                                <p>Vendedores de pan donde el pan es lo más sabroso del día</p>
                                <a href="./" class="btn">Leer mas</a>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="https://www.elglobo.com.mx/cdn/shop/files/Pan_muerto_conejito_turin_1000x.jpg?v=1693506759" alt="Realiza un pedido con nosotros">
                            <div class="carousel-content">
                                <h2>Realiza un pedido con nosotros</h2>
                                <p>Panes para una ocasión especial, para ti que mereces lo mejor</p>
                                <a href="./products.html" class="btn">Leer mas</a>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80" alt="Nuestros Productos">
                                <div class="carousel-content">
                                    <h2>Nuestros Productos</h2>
                                    <p>Pan fresco del día, supersabroso y lo mejor de lo mejor solo para ti</p>
                                    <a href="./products.html" class="btn">Leer mas</a>
                                </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="https://i0.wp.com/holanews.com/wp-content/uploads/2022/07/rss-efed448be1d7207e9d60b48cbd3657acbfcf3c537bbw.jpg?fit=1920%2C1347&ssl=1" alt="Visita nuestra Panadería">
                            <div class="carousel-content">
                                <h2>Visita nuestra Panadería</h2>
                                <p>Los mejores precios de la Ciudad y el mejor pan que podrás probar... ¡Ven ahora!!!</p>
                                <a href="./location.html" class="btn">Leer mas</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-btn prev" id="prev">❮</button>
                    <button class="carousel-btn next" id="next">❯</button>
                </div>
            </div>`;
    }
}

window.customElements.define("carousel-panel", CarouselContent);