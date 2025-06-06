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

let i = 0;

function type() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 25);
  }
}

window.onload = type;
