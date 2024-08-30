function navChange() {
    let nav = document.querySelector(".fondoNav");
    if (window.scrollY > 50) { // Cambia el valor según necesites
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}


// Obtén el video y los botones por su ID
const video = document.getElementById('miVideo');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

// Añade un evento al botón de play
playButton.addEventListener('click', function() {
    video.play(); // Reproduce el video
});

// Añade un evento al botón de pause
pauseButton.addEventListener('click', function() {
    video.pause(); // Pausa el video
});
