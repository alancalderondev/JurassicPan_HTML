import { createFeaturesSection, createFeatureCard } from './features.js';

const reviews = [
    {
        name: "Ariel Martinez",
        review: "Buena ubicacion y hay pan de temporada, son tan ricos que quiero comer diario!!",
        image: "https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/351160130_3338103456501930_5568334464244966501_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=MJ7rAguW5TMQ7kNvgEu0yG0&_nc_zt=23&_nc_ht=scontent.fmex23-1.fna&_nc_gid=AmfGVybQMIpLAPuDs8RKzqT&oh=00_AYAT_iZzF0z0BzuY-6JRgiTRjL8VPGzuZeoleIGZnDw93A&oe=671DF183"
    },
    {
        name: "Alan Calderon",
        review: "Me gusta el Pan!",
        image: "https://scontent.fmex31-1.fna.fbcdn.net/v/t1.6435-9/101657746_2686115151671681_3507313127622443008_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=AVjKi2QyD20Q7kNvgF_uaUy&_nc_zt=23&_nc_ht=scontent.fmex31-1.fna&_nc_gid=AVmRzhLBvRw1eTgvdhKSY6I&oh=00_AYD9BO63JhBMMdAk_S4ummSuiVlajIxVbwv1dhWRfP-oRA&oe=673F659B"
    },
    {
        name: "Angel de Jesus",
        review: "Comete un pan, Cometelo cometelo cometelo!!!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zF84MTNWkr5WsPrvX2aONui2Yp28q1im6g&s"
    },
    {
        name: "Alejandra Vanessa Maldonado",
        review: "Miau!",
        image: "https://scontent.fmex27-1.fna.fbcdn.net/v/t39.30808-6/438098495_10220942690951734_3445714403802281142_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Qtnbw2n9afAQ7kNvgFFp1Rx&_nc_zt=23&_nc_ht=scontent.fmex27-1.fna&_nc_gid=Ab6Y7AeKoT-r68NEH7cNxaG&oh=00_AYAdfnXtgmlqYcR74qD9CuUZInt9sJunTJdjj1UGX2963A&oe=671DF5B7"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const reviewsScroll = document.getElementById('reviewsScroll');
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');

    // Crear tarjetas de reseñas
    reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
          <div class="review-header">
            <img src="${review.image}" alt="${review.name}">
            <div class="review-info">
              <h3>${review.name}</h3>
            </div>
          </div>
          <p class="review-content">${review.review}</p>
        `;
        reviewsScroll.appendChild(card);
    });

    // Funcionalidad de desplazamiento
    const scrollAmount = 300;

    prevBtn.addEventListener('click', () => {
        reviewsScroll.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        reviewsScroll.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Crear y añadir la sección de características
    const featuresSection = createFeaturesSection();
    document.getElementById('features-container').appendChild(featuresSection);

    // Obtener el contenedor de características
    const featuresContainer = featuresSection.querySelector('.features-grid');

    // Definir las características
    const features = [
        { icon: '🌟', title: 'Calidad Premium', description: 'Solo usamos ingredientes de la más alta calidad.' },
        { icon: '🚚', title: 'Entrega Rápida', description: 'Te llevamos nuestros productos a la puerta de tu casa.' },
        { icon: '🤝', title: 'Atención Personalizada', description: 'Nuestro equipo está aquí para ayudarte.' },
        { icon: '🥇', title: 'Mejores Precios', description: 'Ofrecemos los mejores precios en el mercado.' },
    ];

    // Crear y añadir las tarjetas de características al contenedor
    features.forEach((feature, index) => {
        const featureCard = createFeatureCard(feature, index);
        featuresContainer.appendChild(featureCard);
    });
});
