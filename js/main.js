import { products, categories } from './data.js';
import { createProductCard, createCategoryButton } from './products.js';

function initializeApp() {
  const categoriesContainer = document.getElementById('categories');
  const productsContainer = document.getElementById('products');
  let selectedCategory = null;

  function updateProducts() {
    productsContainer.innerHTML = '';
    const filteredProducts = selectedCategory
      ? products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())
      : products;
    
    filteredProducts.forEach(product => {
      productsContainer.appendChild(createProductCard(product));
    });
  }

  function updateCategories() {
    categoriesContainer.innerHTML = '';
    
    categoriesContainer.appendChild(
      createCategoryButton(null, !selectedCategory, () => {
        selectedCategory = null;
        updateCategories();
        updateProducts();
      })
    );

    categories.forEach(category => {
      categoriesContainer.appendChild(
        createCategoryButton(category, selectedCategory === category, () => {
          selectedCategory = category;
          updateCategories();
          updateProducts();
        })
      );
    });
  }

  updateCategories();
  updateProducts();
}

document.addEventListener('DOMContentLoaded', initializeApp);