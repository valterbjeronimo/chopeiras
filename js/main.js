

window.revelar = ScrollReveal({ reset: true });
revelar.reveal('.efeito', {
    duration: 2000,
    distance: '90px'
});
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




// Verifica a resposta do usuário e redireciona ou fecha o modal
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('ageModal').style.display = '';
});

document.getElementById('noButton').addEventListener('click', function() {
    window.location.href = "https://www.google.com";  // Redireciona para outro site
});
