let player = ''
let player1 = 'George'
let player2 = 'Tony'
let playerScore = ''
let dig = ''
let scoretoBeat = ''
dorH.style.display = 'none';
addScore.style.display = 'none';
toZ.style.display = 'none';
thenextPlayer.style.display = 'none';

function diceScore() { // min and max included 
  return Math.floor(Math.random() * (6 - 1 + 1) + 1)
}
function biNary(){
    return Math.floor(Math.random() * (2 - 1 + 1) + 1)
}

function choosePlayer1(){
    //console.log("one")
    player = player1
    playTurn()
    document.getElementById("p1").disabled = true;
    playerBtns.style.display = 'none'
}
function choosePlayer2(){
    //console.log("two")
    player = player2
    playTurn()
    document.getElementById("p2").disabled = true;
    playerBtns.style.display = 'none'
}

function doubleorHalf(){
    dig = biNary()
    console.log(dig)
    if (dig == 1){
        playerScore = playerScore/2
    } else if (dig == 2) {
        playerScore = playerScore*2
    }
    document.getElementById('score').innerHTML = player + 'Now The Score is : ' + playerScore
    dorH.style.display = 'none'
    toZ.style.display = 'block'
}

function noDoh(){
    dorH.style.display = 'none'
    toZ.style.display = 'block'
}

function tripleorZero(){
    dig = biNary()
    console.log(dig)
    if (dig == 1){
        playerScore = playerScore*3
    } else if (dig == 2) {
        playerScore = 0
    }
    document.getElementById('score').innerHTML = player + 'And Now The Score is : ' + playerScore
    toZ.style.display = 'none'
    addScore.style.display = 'block'
}
function notZ(){
    toZ.style.display = 'none'
    addScore.style.display = 'block'
}
function doubleAddorZero(){
    dig = biNary()
    if (dig == 1){
    playerScore = playerScore + diceScore()*2
    } else if (dig == 2) {
    playerScore = playerScore + 0
    }
        document.getElementById('score').innerHTML = player + 'And after more drama Now The Score is : ' + playerScore
    addScore.style.display = 'none'
    document.getElementById('scoreToBeat').innerHTML = player + ' scored ' + playerScore + ' this is what you have to beat'
    scoretoBeat = playerScore
    thenextPlayer.style.display = 'block'
    console.log(scoretoBeat + ' is the score')
}
function justAdd(){
    playerScore = playerScore + diceScore()
    document.getElementById('score').innerHTML = player + 'And after more drama Now The Score is : ' + playerScore
    addScore.style.display = 'none'
    document.getElementById('scoreToBeat').innerHTML = player + ' scored ' + playerScore + ' this is what you have to beat'
    scoretoBeat = playerScore
    thenextPlayer.style.display = 'block'
    console.log(scoretoBeat + ' is the score')
}


function playTurn(){
    //console.log(player + " is playing")
    playerScore = diceScore()
    document.getElementById('score').innerHTML = player + 'The Score is : ' + playerScore
    dorH.style.display = 'block';
}

function nextPlayer(){
    playerScore == 0
    console.log(playerScore)
    playerBtns.style.display = 'block'
    document.getElementById('score').innerHTML = ''
    document.getElementById('scoreToBeat').innerHTML = scoretoBeat + " is " + player + "'s score to beat!"
    console.log(scoretoBeat)
    thenextPlayer.style.display = 'none'
}

