function menuShow() {
    const menuMobile = document.querySelector(".mobile-menu");
    menuMobile.classList.toggle("open");
}

document.querySelectorAll(".nav-mobile").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".mobile-menu").classList.remove("open");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        document.querySelector(".mobile-menu").classList.remove("open");
    }
});