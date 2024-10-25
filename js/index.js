import { createSpecialtiesSection, createSpecialtyCard } from './specialities.js';
import { specialties } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Crear y añadir la sección de especialidades
    const featuresSection = createSpecialtiesSection();
    document.getElementById('specialties-section').appendChild(featuresSection);

    // Obtener el contenedor de especialidades
    const specialtiesContainer = featuresSection.querySelector('.specialties-grid');

    // Agregar especialidades
    specialties.forEach(specialty => {
        const card = createSpecialtyCard(specialty);
        specialtiesContainer.appendChild(card);
    });

    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Autoplay
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});
