


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.dropdow');

    hamburger.addEventListener('click', function() {
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "flex"; // Exibe o dropdown
        } else {
            dropdown.style.display = "none"; // Esconde o dropdown
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('choppVideo');

    // Remove os controles do vídeo
    video.removeAttribute('controls');

    // Toca o vídeo ao passar o mouse por cima
    video.addEventListener('mouseover', function() {
        video.play();
    });

    // Pausa o vídeo quando o mouse sai de cima
    video.addEventListener('mouseout', function() {
        video.pause();
    });
});