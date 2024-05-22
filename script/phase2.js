let player1_move="";
let player2_move="";
let player1_score=0;
let player2_score=0;
let winner_score=0;
// let winner="";
let gameStarted = false;

const con=document.getElementById("con"); 
const score=document.getElementById("score"); 
const Result=document.getElementById("Result"); 
const player = document.getElementById("player");
const win3 = document.getElementById("3");
const win5 = document.getElementById("5");
const win7= document.getElementById("7");


function hideInputs() {
  win3.style.display = 'none';
  win5.style.display = 'none';
  win7.style.display = 'none';
}

win3.addEventListener('click', function() {
  gameStarted = true;
  hideInputs();
  winner_score=3;

});
win5.addEventListener('click', function() {
  gameStarted = true;
  hideInputs();
  winner_score=5;
});
win7.addEventListener('click', function() {
  gameStarted = true;
  hideInputs();
  winner_score=7;
  console.log(winner_score);
});


//start again
player.addEventListener("click",(e)=>{
  e.preventDefault();
  player1_score=0;
  player2_score=0;
  player1_move="";
  player2_move="";
  score.innerText=`Player1 --- ${player1_score} :  ${player2_score} --- player2`;
  Result.innerText="START";
  Result.classList="text-center mt-5 pt-3 text-white ";
  player.style.display='none';
  win3.style.display = 'flex';
  win5.style.display = 'flex';
  win7.style.display = 'flex';
}  )


  window.addEventListener("keydown", function (e) {
    e.preventDefault();
      switch (e.key) {
        case "ArrowLeft":
          player2_move="paper";  
        break;
        case "ArrowUp":
          player2_move="scissor";
          break;
        case "ArrowRight":
          player2_move="rock"; 
          break;
        case "a":
          player1_move="paper";
          break;
        case "s":
          player1_move="scissor";
          break;
        case "d":
          player1_move="rock";
          break;
      }

    if (player1_move!= "" && player2_move!=""){
      if (gameStarted) {
        player.classList="btn btn-outline-light fw-bold btn-lg"
        if(player1_move==="paper"){
            if(player2_move==="paper"){
                Result.innerText="DRAW";
                Result.classList="text-center mt-5 pt-3 text-warning"  ;
                
            } else if(player2_move==="scissor"){
                Result.innerText="PLAYER 2 WIN";
                Result.classList="text-center mt-5 pt-3 text-danger"  ;
                player2_score++;
            } else if(player2_move==="rock"){
                Result.innerText="PLAYER 1 WIN";
                Result.classList="text-center mt-5 pt-3 text-info"  ;
                player1_score++;
            }
        } else if (player1_move==="scissor") {
            if(player2_move==="scissor"){
                Result.innerText="DRAW";
                Result.classList="text-center mt-5 pt-3 text-warning"  ;
            } else if(player2_move==="rock"){
                Result.innerText="PLAYER 2 WIN";
                Result.classList="text-center mt-5 pt-3 text-danger"  ;
                player2_score++;
            } else if(player2_move==="paper"){
                Result.innerText="PLAYER 1 WIN";
                Result.classList="text-center mt-5 pt-3 text-info"  ;
                player1_score++;
            }
        } else if (player1_move=="rock"){
            if(player2_move==="rock"){
                Result.innerText="DRAW";
                Result.classList="text-center mt-5 pt-3 text-warning"  ;
            } else if(player2_move==="paper"){
                Result.innerText="PLAYER 2 WIN";
                Result.classList="text-center mt-5 pt-3 text-danger"  ;
                player2_score++;
            } else if(player2_move==="scissor"){
                Result.innerText="PLAYER 1 WIN";
                Result.classList="text-center mt-5 pt-3 text-info"  ;
                player1_score++;
            }
        }
       
       
        score.innerText=`Player1 --- ${player1_score} :  ${player2_score} --- Player2`;
        player1_move= "";
        player2_move="";
        if (player1_score===winner_score) {
          Result.innerText="FINAL WINNER: Player1 \n press new game button to start again";
          Result.classList="text-center mt-5 pt-3 text-success"  ;
          gameStarted=false
        } else if( player2_score===winner_score){
          Result.innerText="FINAL WINNER: Player2 \n press new game button to start again";
          Result.classList="text-center mt-5 pt-3 text-success"  ;
          gameStarted=false;
              }
    } 
      }
})
