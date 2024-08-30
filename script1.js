function navChange() {
    let nav = document.querySelector(".fondoNav");
    if (window.scrollY > 50) { // Cambia el valor según necesites
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}