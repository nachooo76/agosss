var audio = document.getElementById("audio");
        var botonPlay = document.getElementById("playAudio");

        botonPlay.addEventListener("click", function() {
            audio.play().catch(err => console.warn("No se pudo reproducir:", err));
        });
    