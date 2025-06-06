const text = `Oi, meu amor...

Desde o primeiro momento, você trouxe cor aos meus dias.  
Cada risada sua é música para mim.  
Cada olhar seu me faz acreditar que encontrei o meu lugar.

Essa surpresa é só um pedacinho do quanto você é importante pra mim.  
Do quanto eu penso em você.  
Do quanto eu te amo.

Feliz Dia dos Namorados, minha vida.  
Obrigado por existir. 💖`;

const typewriter = document.getElementById("typewriter");
const playButtonContainer = document.getElementById("playButtonContainer");
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("romanticVideo");
const playVideoBtn = document.getElementById("playVideoBtn");

let i = 0;

function type() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  } else {
    playButtonContainer.style.display = "block";
  }
}

playVideoBtn.addEventListener("click", () => {
  typewriter.style.display = "none";
  playButtonContainer.style.display = "none";
  videoContainer.style.display = "block";
  video.play();
});

window.onload = type;