let headingEl = document.getElementById("heading");
let restartsEl = document.getElementById("restart");
let boxes = document.getElementsByClassName("box");
let player1 = "X";
let player2 = "O"
let currrentPlayer = player1;
let gameOver = false;
let moves = 0;

console.log(boxes);

restartsEl.addEventListener('click', restart)


Array.from(boxes).forEach(box=>{
    box.addEventListener('click', boxClicked)
})

let winningMatches = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]


function playerWins(){
    winningMatches.forEach(match=>{
        if(match.every(index=> boxes[index].innerHTML == currrentPlayer)){
            headingEl.innerHTML = currrentPlayer + " has won";
            gameOver=true
            setTimeout(()=>{
                restart()
            }, 2000)
        }
    })
}

function boxClicked(e){
    if(gameOver)return
    console.log(e.target.innerHTML)
    if(e.target.innerHTML == ""){
        e.target.innerHTML = currrentPlayer;
        playerWins()
        moves++
        if(moves==8){
            headingEl.innerHTML = "It's a tie"
            gameOver=true
            setTimeout(()=>{
                restart()
            }, 2000)
        }
        currrentPlayer = currrentPlayer == player1 ?player2 : player1;
    }

    

   /* if (currrentPlayer ===player1){
        currrentPlayer = player2
    }
    else{
        currrentPlayer = player1
    }
    */

}

function restart(){
    Array.from(boxes).forEach(box=>{
        box.innerHTML = ""
    })
    currrentPlayer = player1;
    gameOver = false;
    moves = 0;
    headingEl.innerHTML = "TIC TAC TOE";
    

}


//console.log(boxes)

function startGame(){
    

}