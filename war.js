// card game WAR
// this refers to the class that it is in
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
       // this.playerPoints = ""
    }
}

class Card {

    constructor(suit, rank, value) { // rank and value 1 through 13, suits 0 to 3
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }

}

class Deck {

    constructor() {
        this.cards = [];    
    }
                       
    createDeck() {
        
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        
        // will run through a suit before moving on to the next
        for (let i = 0; i < suits.length; i++) {
            // will run through each rank and value before 
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
        // tpm is temporary
        let location1, location2, tmp;
        // will shuffle the cards 1000 times
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
         }
     }
}

class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
        this.points = 0
    }

    start(playerOneName, playerTwoName) {
        // will push into the players array
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        // d is an reference to an object that we just created to access what is in the object
        let d = new Deck();
        
        d.createDeck();
        d.shuffleDeck();    
        // will take players and set them equal to deck cards and split them
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
        // to give them points
        this.players[0].points = this.points;
        this.players[1].points = this.points;

        console.log("Player one has this deck of cards", this.players[0].playerCards)
        console.log("Player two has this deck of cards", this.players[1].playerCards)
        // trying to get the value
        //playerCards is an array
        //console.log('This is the player card value', this.players[0].playerCards[0].value)
        // create logic to find who is the winner of the war game
        console.log("This is the number of cards in player 1 hands", this.players[0].playerCards.length);
        console.log("This is the number of cards in player 2 hands", this.players[1].playerCards.length);

        this.startLoop();
        // Asks the players who will win and alerts the winner or tie
        prompt(`Who will win, Mario or Luigi?`)
        if (this.players[0].points > this.players[1].points) {
        alert(`Mario Wins! 
        Mario points: ${this.players[0].points}  
        Luigi points: ${this.players[1].points}`);
        this.start();
        } else if (this.players[0].points < this.players[1].points) {
        alert(`Luigi Wins! 
        Mario points: ${this.players[0].points}  
        Luigi points: ${this.players[1].points}`);
        this.start();
        } else {
            alert(`War!`)
            this.start();
        }
    }

    startLoop(){
        // Both playerCards lengths are the exact same
        for(let i = 0;i<this.players[0].playerCards.length;i++){
            this.run();
        }
    }

    run(){
        let i1 = this.getRandomIndex(this.players[0].playerCards);
        let i2 = this.getRandomIndex(this.players[1].playerCards);   
        let v1 = this.players[0].playerCards[i1].value;
        let v2 = this.players[1].playerCards[i2].value;
        if(v1 > v2){
            console.log("player 1 wins");
            this.players[0].points++;
            this.removeArr(i1,i2);
        } else if (v1 < v2){
            console.log("player 2 wins");
            this.players[1].points++;
            this.removeArr(i1,i2);
        } else {
            this.run();
        }
    }

    removeArr(i1,i2){
        this.players[1].playerCards.splice(i2,1);
        this.players[0].playerCards.splice(i1,1);
    }
    
    // must pass in an array
    getRandomIndex(arr){
        return Math.floor(Math.random()*arr.length); // 0 to array
    }
}

let gameBoard = new Board();
gameBoard.start('Mario', 'Luigi');
// console.log(gameBoard.players);
