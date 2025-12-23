// Hamburger 
const hambergerOpen = document.querySelector('.hamburger-open');
const hambergerClose = document.querySelector('.hamburger-close');
const navbar = document.querySelector('.nav-inner');
hambergerOpen.addEventListener('click', () => {
    navbar.style.height = "100%";
    hambergerOpen.style.display = "none";
    hambergerClose.style.display = "block";
})
hambergerClose.addEventListener('click', () => {
    navbar.style.height = "60px";
    hambergerClose.style.display = "none";
    hambergerOpen.style.display = "block";
})