class HeaderContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
            `<nav class="header">
                <div class="nav-container">
                    <div class="logo">
                        <a href="./index.html" class="logo-text">Jurassic Pan</a>
                        <a href="./index.html">
                            <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f996.png" alt="T. rex" class="logo-image">
                        </a>
                    </div>
                    <div class="nav-links">
                        <a href="./about.html">Sobre Nosotros</a>
                            <a href="./products.html">Productos</a>
                            <a href="./location.html">Visítanos</a>
                    </div>
                    <button class="mobile-menu-button">
                        <span class="sr-only">Abrir Menu principal</span>
                        <svg class="menu-icon" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div class="mobile-menu">
                    <a href="./about.html">Sobre Nosotros</a>
                    <a href="./products.html">Productos</a>
                    <a href="./location.html">Visítanos</a>
                </div>
            </nav>`;
    }
}

window.customElements.define("header-content", HeaderContent);