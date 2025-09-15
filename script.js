document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('audio');
    const boton = document.getElementById('pausa-boton');

    // Reproduce la música automáticamente al cargar la página
    audio.play();

    // Agrega un "escuchador de eventos" al botón
    boton.addEventListener('click', () => {
        if (audio.paused) {
            // Si está pausada, la reproduce y cambia el texto del botón
            audio.play();
            boton.textContent = 'Pausar Música';
        } else {
            // Si se está reproduciendo, la pausa y cambia el texto del botón
            audio.pause();
            boton.textContent = 'Reproducir Música';
        }
    });
});