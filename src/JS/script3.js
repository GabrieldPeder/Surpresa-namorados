const text = `Oi, meu amor...\n\nDesde o primeiro momento, você trouxe cor aos meus dias.  
Cada risada sua é música para mim.  
Cada olhar seu me faz acreditar que encontrei o meu lugar.\n\nEssa surpresa é só um pedacinho do quanto você é importante pra mim.  
Do quanto eu penso em você.  
Do quanto eu te amo.\n\nFeliz Dia dos Namorados, minha vida.  
Obrigado por existir. 💖`;

const typewriter = document.getElementById("typewriter");
const restartBtn = document.getElementById("restartBtn");
let i = 0;

function type() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50); // velocidade da digitação
  } else {
    restartBtn.style.display = "inline-block";
  }
}

window.onload = type;
