export const products = [
    {
      id: 1,
      name: "Concha",
      price: 10,
      ingredients: ["Chocolate", "Fresa", "Vainilla"],
      image: "https://mmmole.com/wp-content/uploads/2021/08/concha-20.jpg",
      category: "pan"
    },
    {
      id: 2,
      name: "Donas",
      price: 10,
      ingredients: ["Chocolate", "Azucar", "Moka", "Chispas de colores","Fresa"],
      image: "https://i0.wp.com/www.culinariamexicana.com.mx/wp-content/uploads/2020/06/Variedad-de-donas-Rod-Long-Unsplash-scaled.jpg",
      category: "pan"
    },
    {
      id: 3,
      name: "Pan de Muerto",
      price: 15,
      ingredients: ["Azucar","Chocolate"],
      image: "https://www.elglobo.com.mx/cdn/shop/products/pandemuerto_naranja_1200x.jpg",
      category: "pan"
    },
    {
      id: 4,
      name: "Orejas",
      price: 9,
      ingredients: ["Azucar","Chocolate"],
      image: "https://inmamamaggieskitchen.com/wp-content/uploads/2021/01/Orejas-Elephant-Ears-Recipe.jpg",
      category: "pan"
    },
    {
      id: 5,
      name: "Leche Evaporada (Carnation)",
      price: 15,
      ingredients: ["339ml"],
      image: "https://http2.mlstatic.com/D_NQ_NP_941010-MLM77273374839_062024-O.webp",
      category: "leche"
    },
    {
      id: 6,
      name: "Sabro Leche",
      price: 13,
      ingredients: ["bolsa"],
      image: "https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2Fe093dc2be6438c8d6255e7eb026aab10%2Fac29c400-8493-11ec-a102-ddaef7a0d5f6",
      category: "leche"
    }
  ];
  

  export const specialties = [
    {
      title: "Pan fresco y muy sabroso",
      description: "Expedicion diaria para mejor frescura",
      image: "https://losglobos.mx/img/header.png"
    },
    {
      title: "Calidad, sabor y al mejor precio",
      description: "solo con nosotros encontraras precios bajos y calidad excelente",
      image: "https://elencuentrosv.com/aguilares/wp-content/uploads/2021/05/pan-lilian.jpg"
    },
    {
      title: "Porque tu Familia es lo mas importante para nosotros",
      description: "",
      image: "https://img.interempresas.net/fotos/3303956.jpeg"
    }
  ];
  export const categories = [...new Set(products.map(product => product.category))];