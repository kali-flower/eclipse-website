const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// function to show mobile menu 
const mobileMenu = () => { 
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Highlights 
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery__container');
    const images = gallery.querySelectorAll('.gallery__image');
    const leftBtn = document.querySelector('.gallery__nav--left');
    const rightBtn = document.querySelector('.gallery__nav--right');
    let currentIndex = 0;

    function showImage(index) {
        gallery.style.transform = `translateX(-${index * 100}%)`;
    }

    leftBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    rightBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
});