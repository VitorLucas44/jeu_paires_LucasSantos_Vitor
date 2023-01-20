// const cards = document.querySelectorAll(".card"),
// timeTag = document.querySelector(".time b"),
// flipsTag = document.querySelector(".flips b"),
// refreshBtn = document.querySelector(".details button");

// let maxTime = 20;
// let timeLeft = maxTime;
// let flips = 0;
// let matchedCard = 0;
// let disableDeck = false;
// let isPlaying = false;
// let cardOne, cardTwo, timer;

// function initTimer() {
//     if(timeLeft <= 0) {
//         return clearInterval(timer);
//     }
//     timeLeft--;
//     timeTag.innerText = timeLeft;
// }

// function flipCard({target: clickedCard}) {
//     if(!isPlaying) {
//         isPlaying = true;
//         timer = setInterval(initTimer, 1000);
//     }
//     if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
//         flips++;
//         flipsTag.innerText = flips;
//         clickedCard.classList.add("flip");
//         if(!cardOne) {
//             return cardOne = clickedCard;
//         }
//         cardTwo = clickedCard;
//         disableDeck = true;
//         let cardOneImg = cardOne.querySelector(".back-view img").src,
//         cardTwoImg = cardTwo.querySelector(".back-view img").src;
//         matchCards(cardOneImg, cardTwoImg);
//     }
// }

// function matchCards(img1, img2) {
//     if(img1 === img2) {
//         matchedCard++;
//         if(matchedCard == 6 && timeLeft > 0) {
//             return clearInterval(timer);
//         }
//         cardOne.removeEventListener("click", flipCard);
//         cardTwo.removeEventListener("click", flipCard);
//         cardOne = cardTwo = "";
//         return disableDeck = false;
//     }

//     setTimeout(() => {
//         cardOne.classList.add("shake");
//         cardTwo.classList.add("shake");
//     }, 400);

//     setTimeout(() => {
//         cardOne.classList.remove("shake", "flip");
//         cardTwo.classList.remove("shake", "flip");
//         cardOne = cardTwo = "";
//         disableDeck = false;
//     }, 1200);
// }

// function shuffleCard() {
//     timeLeft = maxTime;
//     flips = matchedCard = 0;
//     cardOne = cardTwo = "";
//     clearInterval(timer);
//     timeTag.innerText = timeLeft;
//     flipsTag.innerText = flips;
//     disableDeck = isPlaying = false;

//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
//     arr.sort(() => Math.random() > 0.5 ? 1 : -1);

//     cards.forEach((card, index) => {
//         card.classList.remove("flip");
//         let imgTag = card.querySelector(".back-view img");
//         setTimeout(() => {
//             imgTag.src = `images/img-${arr[index]}.png`;
//         }, 500);
//         card.addEventListener("click", flipCard);
//     });
// }

// shuffleCard();

// refreshBtn.addEventListener("click", shuffleCard);

// cards.forEach(card => {
//     card.addEventListener("click", flipCard);
// });




// Create an input element for the user to enter their name
const nameInput = document.querySelector("input");
nameInput.placeholder = "Entre ton pseudo";

// Create a button to start the game
const startBtn = document.querySelector("button");
startBtn.innerText = "Start";
startBtn.disabled = true;

// Add the input and button to the DOM
// document.body.appendChild(nameInput);
// document.body.appendChild(startBtn);

// Listen for input in the name input field
nameInput.addEventListener("input", (e) => {
    // If the input field is not empty, enable the start button
    if (e.target.value) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }
});

// Listen for click on the start button
startBtn.addEventListener("click", (e) => {
    // Get the value of the name input field
    const name = nameInput.value;
    // Output the name to the console
    console.log(`Name: ${name}`);
    // Start the game (code to start game goes here)
    initGame(alert(`Bonne chance ${name} !`));
});

function initGame() {

    const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 30;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

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
        if(matchedCard == 8 && timeLeft > 0) {
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
