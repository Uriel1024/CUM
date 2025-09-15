document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('audio');
    const boton = document.getElementById('pausa-boton');

    
    audio.play();


    boton.addEventListener('click', () => {
        if (audio.paused) {
   
            audio.play();
            boton.textContent = 'Pausar Música';
        } else {

            audio.pause();
            boton.textContent = 'Reproducir Música';
        }
    });
});