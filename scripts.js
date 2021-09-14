function init(){
window.confirm(" Lets play Tik Tak Toe.");
}

let board = [
    '','','','','','','','',''
];
let Win = [
    
]
let player1;
let player2;


function setPlayers(){
    let playerText = document.getElementById("players");
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    turn = player1;
    console.log("setPlayers was called");
    playerText.innerHTML = `Player 1: ${player1} is X <br> Player 2: ${player2} is O`;
}

function markXO(id){
    let spot = document.getElementById(id);
    let turns = document.getElementById("turn");
    let mark = whosTurn();
    turns.innerHTML = `It is ${turn}'s turn '`
    spot.innerText = mark;
    board[id] = mark;
}
function whosTurn(){   
    if(turn == player1){
       turn = player2;
       return "X";   
    }
    if(turn == player2){
       turn = player1;
       return "O";
    }
}
function newGame(){

}
window.addEventListener("load", init);