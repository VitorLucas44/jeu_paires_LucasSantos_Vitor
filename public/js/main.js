
const nameInput = document.querySelector("input");
nameInput.placeholder = "Entre ton pseudo";


const startBtn = document.querySelector("button");
startBtn.innerText = "Start";
startBtn.disabled = true;

nameInput.addEventListener("input", (e) => {
    if (e.target.value) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }
});


// clique sa lance
startBtn.addEventListener("click", (e) => {
    const name = nameInput.value;
    const gameContainer = document.querySelector(".game-container");
    gameContainer.classList.remove("hidden");

    // test nom
    console.log(`Name: ${name}`);
    // Start
    initGame(alert(`Bonne chance ${name} !`));
});

function initGame(name) {

const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 40;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;




const scoreboard = document.querySelector(".scoreboard tbody");
let scores = [];

function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 8) {
            scores.push({ name: name, time: maxTime - timeLeft, flips: flips});
            scores.sort((a, b) => a.time - b.time);
            scoreboard.innerHTML = "";
            scores.forEach(score => {
                scoreboard.innerHTML += `
                <tr>
                    <td>${score.name}</td>
                    <td>${score.time}</td>
                    <td>${score.flips}</td>
                </tr>`;
            });
        }
        if(matchedCard == 8 && timeLeft > 0) {
            alert(`Bravo, vous avez réussi`);
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `images/img-${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

}
