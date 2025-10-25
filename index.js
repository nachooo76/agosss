// index.html
var boton = document.getElementById("audioo");

if (boton) {
  boton.addEventListener("click", function() {
    // Guardamos permiso para reproducir música en FLORES.html
    sessionStorage.setItem("permitirMusica", "true");

    // Redirigimos a la página de flores
    window.location.href = "FLORES.html";
  });
}
