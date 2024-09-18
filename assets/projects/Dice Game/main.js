const player1Button = document.getElementById('btn1');
const player2Button = document.getElementById('btn2');
const player1Score = document.getElementById('player1-score');
const player2Score = document.getElementById('player2-score');
const player1Turn = document.querySelector('.turn1');
const player2Turn = document.querySelector('.turn2');
const reset1Btn = document.getElementById('reset1')
const reset2Btn = document.getElementById('reset2')
//images
const images = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
]
let player1Dice; // Declare the variable outside the event listener
let player2Dice ;
let player1scores = 0; //players scores
let player2scores = 0;
let winningScore = 10;
//player 1
player2Button.disabled = true; //disable button2 in the start 
document.getElementById('player2-Dice').style.opacity = "60%"; // player2 start with opacity 60% to look unable

player1Button.addEventListener('click', () => {
    //for random images
    let randomImages = Math.floor(Math.random() * images.length)
    let randomDice = images[randomImages]
    player2Button.disabled = false;
    player1Button.disabled = true;
    player1Turn.textContent = "Player 1 Turn"
    player1Turn.classList.toggle("blink")
    player2Turn.classList.toggle("blink")
    document.querySelector('#player1-Dice').setAttribute('src', randomDice);
    //for opacity when click
    document.getElementById('player1-Dice').style.opacity = "60%";
    document.getElementById('player2-Dice').style.opacity = "100%";
    
    if (randomDice === images[0]) {
        player1Dice = 1; // Assign the value based on the randomDice
    } else if (randomDice === images[1]) {
        player1Dice = 2;
    } else if(randomDice === images[2]) {
        player1Dice = 3
    } else if(randomDice === images[3]){
        player1Dice = 4
    } else if(randomDice === images[4]){
        player1Dice = 5
    } else if(randomDice === images[5]){
        player1Dice = 6
    }
     else {
        player1Dice = null; // Set a default value or handle other cases
    }

    gettingValue(player1Dice); //getting the value of player dice inside
});

function gettingValue(player1Dice) {
   //adding plus 1 
    if(player1Dice > player2Dice){
        player1scores += 1
    }
    else if(player1Dice < player2Dice){
        player2scores += 1
    }else{
        null;
    }


    player1Score.textContent = player1scores+"/10"; //final score
    player2Score.textContent = player2scores+"/10"; //final score


  
}


//player 2

player2Button.addEventListener('click', () => {
    //for random images
    let randomImages = Math.floor(Math.random() * images.length)
    let randomDice = images[randomImages]
    player2Button.disabled = true;
    player1Button.disabled = false;
    player1Turn.classList.toggle("blink")
    player2Turn.classList.toggle("blink")
    document.querySelector('#player2-Dice').setAttribute('src', randomDice);
    //for opacity
    document.getElementById('player2-Dice').style.opacity = "60%";
    document.getElementById('player1-Dice').style.opacity = "100%";

    if (randomDice === images[0]) {
        player2Dice = 1; // Assign the value based on the randomDice
    } else if (randomDice === images[1]) {
        player2Dice = 2;
    } else if(randomDice === images[2]) {
        player2Dice = 3
    } else if(randomDice === images[3]){
        player2Dice = 4
    } else if(randomDice === images[4]){
        player2Dice = 5
    } else if(randomDice === images[5]){
        player2Dice = 6
    }
     else {
        player1Dice = null; // Set a default value or handle other cases
    }

    gettingValue(player2Dice); //getting the value inside
});


function gettingValue(player2Dice) {
    //adding plus 1
    if(player2Dice > player1Dice){
        player2scores += 1
    }
    else if(player2Dice < player1Dice){
        player1scores += 1
    }else{
        null;
    }

    player1Score.textContent = player1scores+"/10"; //final score
    player2Score.textContent = player2scores+"/10"; //final score

    //Win statement when reach 10 scores
    if(player1scores === winningScore){
        document.querySelector('h1').textContent = "PLAYER 1 WIN!"; //changing the heading text
        document.querySelector('h1').classList.add("blink"); //adding blnk
        player1Button.disabled = true //disable both button when player win
        player2Button.disabled = true
        player1Turn.classList.remove("blink") //removing the class blink from player turn
        player2Turn.classList.remove("blink")
        console.log("player 1 win")
    } else if(player2scores === winningScore){
        document.querySelector('h1').textContent = "PLAYER 2 WIN!" //changing the heading text
        document.querySelector('h1').classList.add("blink"); //adding blnk
        player1Button.disabled = true //disable both button when player win
        player2Button.disabled = true
        player1Turn.classList.remove("blink") //removing the class blink from player turn
        player2Turn.classList.remove("blink")
        console.log("player 2 win")

    }
    else{
        //No action needed
    }
  
}

//reset button
reset1Btn.addEventListener('click', ()=>{
    location.reload();
})
reset2Btn.addEventListener('click', ()=>{
    location.reload();
})












