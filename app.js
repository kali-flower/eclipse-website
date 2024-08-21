// NavBar 
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// function to show mobile menu 
const mobileMenu = () => { 
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Highlights 
const leftNav = document.querySelector('.gallery__nav--left');
const rightNav = document.querySelector('.gallery__nav--right');
const galleryContainer = document.querySelector('.gallery__container');
const images = document.querySelectorAll('.gallery__image');

let currentIndex = 0;

function updateGallery() {
    const imageWidth = images[currentIndex].clientWidth;
    galleryContainer.style.transition = 'transform 0.5s ease'; // smooth transition
    galleryContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

leftNav.addEventListener('click', () => {
    const imageWidth = images[currentIndex].clientWidth;
    galleryContainer.style.transition = 'none'; // disable transition for wrapping

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // wrap around to the last image
        galleryContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        // force reflow to reset the transform position before transition
        galleryContainer.offsetHeight; 
    }
    galleryContainer.style.transition = 'transform 0.5s ease'; // re-enable transition
    updateGallery();
});

rightNav.addEventListener('click', () => {
    const imageWidth = images[currentIndex].clientWidth;
    galleryContainer.style.transition = 'none'; // disable transition for wrapping

    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // wrap around to the first image
        galleryContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        // force reflow to reset the transform position before transition
        galleryContainer.offsetHeight; 
    }
    galleryContainer.style.transition = 'transform 0.5s ease'; // re-enable transition
    updateGallery();
});

