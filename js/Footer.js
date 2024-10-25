class FooterPanel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
            `<footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <div class="footer-logo">
          <img src="https://media0.giphy.com/media/M3bYl3tej6HsTo26RO/200.gif" alt="Logo" class="footer-logo-image">
          <h3>Jurassic Pan</h3>
        </div>
        <p>Los más sabrosos panes calidad-precio de la Ciudad.</p>
        <p>¡Que esperas por venir por el tuyo!!!</p>
      </div>

      <div class="footer-section">
        <h3>Visita también:</h3>
        <ul>
          <li><a href="./about.html">Nosotros</a></li>
          <li><a href="./products.html">Productos</a></li>
          <li><a href="./location.html">Visitanos</a></li>
          
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contáctanos</h3>
        <ul>
          <li>Calle</li>
          <li>Continuacion calle</li>
          <li>Tel: +52 55-33-56-45-23</li>
          <li>Email: alevane12@gmail.com</li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Horarios</h3>
        <ul>
          <li>Mon - Fri: 7:00 AM - 7:00 PM</li>
          <li>Saturday: 8:00 AM - 6:00 PM</li>
          <li>Sunday: 8:00 AM - 3:00 PM</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© <span id="current-year"></span> JurassicPan. All rights reserved.</p>
    </div>
  </footer>`;
    }
}

window.customElements.define("footer-content", FooterPanel);