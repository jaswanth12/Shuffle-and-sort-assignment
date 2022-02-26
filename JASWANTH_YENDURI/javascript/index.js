/*
1)USED FUNCTION HOISTING TO DISPLAY ABSTRACT FUNCTIONS AT TOP FOR EASY CODE REDABILITY, UNDERSTANDING
2)USED FUNCTIONS INSIDE FUNCTIONS TO MINIMIZE GLOBAL VARIABLES.
3.1 shuffleOrSort => SHUFFLE OR SORT CARDS
    3.1.1 shuffle => SHUFFLE CARDS RANDOMLY
    3.1.2 sort => SORT CARDS
4)arrangeShuffledcards => OUTPUTS SHUFFLED OR SORTED CARDS TO WEBPAGE
5)caliculateRandom =>CALICULATE RANDOM NUMBER
*/

//INITIALIZE SHUFFLE ON PAGELOAD
(new shuffleOrSort()).shuffle();

function shuffleOrSort() {
    let cards = Array(9).fill().map((e, i) => i + 1);
    let cardsCopy = cards.slice();
    let cardColors = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454E'];
    this.shuffle = function() {
        shuffle(cards, cardColors);
    }
    this.sort = function() {
        cards = cardsCopy.slice();
        arrangeShuffledcards(cards, cardColors);
    }
}

function shuffle(cards, cardColors) {
    let numberOfCards;
    let currentCardIndex, randomCardIndex, temp;
    currentCardIndex = cards.length - 1;
    while (currentCardIndex >= 0) {
        randomCardIndex = caliculateRandom();
        temp = cards[currentCardIndex];
        cards[currentCardIndex] = cards[randomCardIndex];
        cards[randomCardIndex] = temp;
        currentCardIndex--;
    }
    arrangeShuffledcards(cards, cardColors);
}

function arrangeShuffledcards(cards, cardColors) {
    let parent = document.getElementById("cards");
    let children = parent.querySelectorAll("p");
    for (var i = 0; i < children.length; i++) {
        children[i].innerHTML = cards[i];
        children[i].style.backgroundColor = cardColors[cards[i] - 1];
    }
}

function caliculateRandom(n=9) {
    return Math.floor(Date.now() * (Math.random() * 100) % n);
}