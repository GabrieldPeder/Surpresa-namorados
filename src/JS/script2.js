const images = [
    'src/img/img1.png',
    'src/img/img2.png',
    'src/img/img3.png',
    'src/img/img4.png',
    'src/img/img5.png',
    'src/img/img6.png',
    'src/img/img7.png',
    'src/img/img8.png'
];

const gameContainer = document.querySelector('.memory-game');
const finalMessage = document.getElementById('finalMessage');

let flippedCards = [];
let lockBoard = false;
let matchedPairs = 0;

function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

function createCard(imgSrc) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.img = imgSrc;

    const img = document.createElement('img');
    img.src = imgSrc;

    card.appendChild(img);

    card.addEventListener('click', () => {
        if (lockBoard || card.classList.contains('flipped')) return;

        card.classList.add('flipped');

        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    });

    return card;
}

function checkForMatch() {
    const [first, second] = flippedCards;

    if (first.dataset.img === second.dataset.img) {
        matchedPairs++;
        flippedCards = [];

        if (matchedPairs === images.length) {
            setTimeout(() => {
                finalMessage.classList.remove('hidden');
            }, 500);
        }
    } else {
        lockBoard = true;
        setTimeout(() => {
            first.classList.remove('flipped');
            second.classList.remove('flipped');
            flippedCards = [];
            lockBoard = false;
        }, 1000);
    }
}

function initGame() {
    const duplicatedImages = [...images, ...images]; 
    const shuffled = shuffle(duplicatedImages);

    shuffled.forEach(imgSrc => {
        const card = createCard(imgSrc);
        gameContainer.appendChild(card);
    });
}

initGame();