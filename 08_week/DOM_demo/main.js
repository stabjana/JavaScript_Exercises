const backToTop = document.querySelector('#backTop');
const mobButton = document.querySelector('.mobile');
const navList = document.querySelector('nav ul');
const modalButton = document.querySelector('#mobBtn');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
/* one os for chrome based browsers and the other is for other browsers */

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").style.backgroundColor = "green";
        document.querySelector("header").style.backdropFilter = "blur(10px)";
        /* backdrop-filter: blur(10px); für CSS */
        document.querySelector("header.logo h1").style.fontSize = "12px";
        document.querySelector("header").style.height = "50px";
    } else {
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("header.logo h1").style.fontSize = "32px";
        document.querySelector("header").style.height = "100px";
    }
}
/* if the scrolling goes over 80px (header height 80) then change the color
same thing twice because of different browsers
mine doesn't show because its in the background of the header */

const toggleMenu = () => {
    navList.classList.toggle('responsive');
}

const toggleModal = () => {
    overlay.classList.toggle('visible');
}

/* const closeModal = () => {
    overlay.classList.toggle('overlay');
} 
    to click outside and the modal disappears
    */

mobButton.addEventListener('click', toggleMenu);
modalButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);