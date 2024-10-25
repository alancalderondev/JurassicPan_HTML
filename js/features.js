export function createFeaturesSection() {
    const section = document.createElement('section');
    section.className = 'features-section';

    section.innerHTML = `
      <div class="features-container">
        <div class="features-header">
          <h2>🦕 ¿Por qué comprar con nosotros? 🦕</h2>
        </div>
        <div class="features-grid"></div>
      </div>
    `;

    return section;
}

export function createFeatureCard(feature, index) {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="feature-icon">${feature.icon}</div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    `;

    return card;
}
