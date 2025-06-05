const images = [
    'src/imgs/img1.jpeg',
    'src/imgs/img2.jpeg',
    'src/imgs/img3.jpeg',
    'src/imgs/img4.jpeg',
    'src/imgs/img5.jpeg',
    'src/imgs/img6.jpeg',
    'src/imgs/img7.jpeg',
    'src/imgs/img8.jpeg',
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
    card.classList.add('memory-card');
    card.dataset.img = imgSrc;

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const img = document.createElement('img');
    img.src = imgSrc;
    cardBack.appendChild(img);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

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
