export function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  card.innerHTML = `
    <div class="product-content">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)} MXN</p>
        <div class="product-ingredients">
          <h5 class="ingredients-title">Ingredientes:</h5>
          <ul class="ingredients-list">
            ${product.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

export function createCategoryButton(category, isActive, onClick) {
  const button = document.createElement('button');
  button.className = `category-btn ${isActive ? 'active' : ''}`;
  button.textContent = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Todos los Productos';
  button.addEventListener('click', onClick);
  return button;
}