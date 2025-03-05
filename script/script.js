// Hamburger-menu

const menuButton=document.querySelector(".hamburger");
const navbar=document.querySelector(".nav-list");

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('hamburger-active');
    menuButton.classList.toggle('hamburger-active');
});

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
        navbar.classList.remove('hamburger-active'); 
        menuButton.classList.remove('hamburger-active'); 
    }
});

// ---------------------------
// navlink
function scrollToSection(id){
    const target = document.getElementById(id);
    const offset = 120;

    window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth"
    });
}

