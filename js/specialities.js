export function createSpecialtiesSection() {
    const section = document.createElement('section');
    section.className = 'specialties-section';
    
    section.innerHTML = `
      <div class="specialties-container">
        <div class="specialties-header">
          <h2>Nuestras Especialidades</h2>
          <p>Estos pequeños detalles son lo que nos hacen tu mejor opcion</p>
        </div>
        <div class="specialties-grid"></div>
      </div>
    `;
  
    return section;
  }
  
  export function createSpecialtyCard(specialty) {
    const card = document.createElement('div');
    card.className = 'specialty-card';
    
    card.innerHTML = `
      <img src="${specialty.image}" alt="${specialty.title}">
      <div class="specialty-overlay">
        <div class="specialty-content">
          <h3>${specialty.title}</h3>
          <p>${specialty.description}</p>
        </div>
      </div>
    `;
    
    return card;
  }