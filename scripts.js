function init(){
window.confirm(" Lets play Tik Tak Toe.");
createPlayers();
}

let board = [
    '','','','','','','','',''
];
let Win = {
    win0: [0,1,2],
    win1: [3,4,5],
    win2: [6,7,8],
    win3: [0,3,6],
    win4: [1,4,7],
    win5: [2,5,8],
    win6: [0,4,8],
    win7: [2,4,6]
};
let player1;
let player2;
function createPlayers(){
    let playerText = document.getElementById("players");

    playerText.innerHTML = `
        <label>Player 1: <input type = "text" id="player1"> X </label> <br>
        <label>Player 2: <input type = "text" id="player2"> O </label> <br>
        <button onclick= setPlayers()>Enter</button>
    `
}
function generateBoard(){
    let window = document.getElementById("gamewindow");

    window.innerHTML = 
    `
    <table id="board" >
        <tr id="row1">
            <td onclick = markXO(0) id="0" ></td>
            <td onclick = markXO(1) id="1" ></td>
            <td onclick = markXO(2) id="2" ></td>
        </tr>
        <tr id="row2">
            <td onclick = markXO(3) id="3" ></td>
            <td onclick = markXO(4) id="4" ></td>
            <td onclick = markXO(5) id="5" ></td>
        </tr>
        <tr id="row3">
            <td onclick = markXO(6) id="6" ></td>
            <td onclick = markXO(7) id="7" ></td>
            <td onclick = markXO(8) id="8" ></td>
        </tr>
    </table>

    <button onclick= newGame()>New Game</button>
    `
    
}
function setPlayers(){
    let playerText = document.getElementById("players");
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    if(player1 == "" || player2 == ""){
        window.alert("Please Enter A Name for Both Player 1 And Player 2!");
        createPlayers();
    }
    turn = player1;
    console.log("setPlayers was called");
    playerText.innerHTML = `Player 1: ${player1} is X <br> Player 2: ${player2} is O`;
    generateBoard();
}

function markXO(id){
    if(board[id] == ''){
        let spot = document.getElementById(id);
        let turns = document.getElementById("turn");
        let mark = whosTurn();
        turns.innerHTML = `It is ${turn}'s turn '`;
        spot.innerText = mark;
        board[id] = mark;
        checkWin();
    }
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
function checkWin(){

    for(let element in Win){

        let window = document.getElementById("gamewindow");
        let turns = document.getElementById("turn");

        array = Win[element];
        slot1 = board[array[0]];
        slot2 = board[array[1]];
        slot3 = board[array[2]];
       
        if( slot1 == slot2 && slot1 == slot3 && slot1 != ''){
            whosTurn();
            window.innerHTML = `${turn} has won the game!<br>
            <button onclick= newGame()> New Game </button>`;
            turns.innerHTML = "";
        }

    }

}
function newGame(){
    createPlayers();
    let window = document.getElementById("gamewindow");
    window.innerHTML = "";
}
window.addEventListener("load", init);