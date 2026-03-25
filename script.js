function navegar(url, event) {
    // Cambiar el src del iframe
    document.getElementById('main-frame').src = url;

    // Gestionar estado activo de botones
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}