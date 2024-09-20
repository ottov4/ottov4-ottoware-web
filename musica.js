function cambiarCancion() {
    var menu = document.getElementById("menuMusica");
    var cancionSeleccionada = menu.value; // Obtiene el valor de la canción seleccionada

    var reproductor = document.getElementById("reproductor");
    var audioSource = document.getElementById("audioSource");

    // Cambia la fuente de audio a la nueva canción seleccionada
    audioSource.src = cancionSeleccionada;
    reproductor.load(); // Recarga el reproductor para que reproduzca la nueva canción
    reproductor.play(); // Opcional: iniciar la reproducción automáticamente
}
