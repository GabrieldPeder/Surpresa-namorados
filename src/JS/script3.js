const text = `Minha querida, 
\nEu preparei tudo isso com muito carinho.
\nEspero que você tenha gostado!
\nFeliz Dia dos Namorados! ❤️`;

const typewriter = document.getElementById('typewriter');
const restartBtn = document.getElementById('restartBtn');

// Carregar o som de tec-tec
const tecTecSound = new Audio('src/audio/mixkit-keyboard-slow-typing-1391.wav');
tecTecSound.volume = 0.3;  // Ajuste o volume como quiser

let index = 0;

function type() {
    if (index < text.length) {
        typewriter.textContent += text.charAt(index);
        tecTecSound.currentTime = 0;  // Reinicia o som
        tecTecSound.play();
        index++;
        setTimeout(type, 100);  // Velocidade da digitação
    } else {
        // Quando terminar o texto:
        if (!tecTecSound.paused) {
            tecTecSound.pause();      // Para o som
            tecTecSound.currentTime = 0;  // Reseta o áudio
        }
        restartBtn.classList.remove('hidden');
    }
}

type();

restartBtn.addEventListener('click', () => {
    window.location.href = 'index.html';  // ou 'pagina1.html'
});
