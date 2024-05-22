let player_score=0;
let computer_score=0; 
const player = document.getElementById("player");
const Result = document.getElementById("Result");
// player
const paper= document.getElementById("paper"); 
const scissor= document.getElementById("scissor"); 
const rock= document.getElementById("rock");
// pc
const pc=document.getElementById("pc-choosed")

function getRandomNumber() {
    const randNumber= Math.random();
    const scaledRandomNumber = Math.floor(randNumber * 3) + 1;
    return scaledRandomNumber;
}

    player.addEventListener("click",(e)=>{
        e.preventDefault();
        const randomNumber=getRandomNumber();
        if (paper.checked || rock.checked || scissor.checked){
            player.innerText="PLAY AGAIN"
            switch(randomNumber) {
                case 1:
                    pc.innerText="Computer chose : Paper";
                break;
                case 2:
                    pc.innerText="Computer chose : Scissor";
                break;
                case 3:
                    pc.innerText="Computer chose : Rock";
                break;
            }
        }
        
        //result
        if(paper.checked){
            if(randomNumber==1){
                Result.innerText="DRAW";
                Result.classList="text-center mt-5 pt-5 text-warning";
            } else if(randomNumber==2){
                Result.innerText="YOU LOST!";
                Result.classList=" text-center mt-5 pt-5 text-danger";
                computer_score++;
            } else if(randomNumber==3){
                Result.innerText="YOU WIN!";
                Result.classList="text-center mt-5 pt-5 text-success";
                player_score++;
            }
        } else if (scissor.checked) {
            if(randomNumber==1){
                Result.innerText="YOU WIN!";
                Result.classList="text-center mt-5 pt-5 text-success";
                player_score++;
            }else if(randomNumber==2){
                Result.innerText="DRAW";
                Result.classList="text-center mt-5 pt-5 text-warning";
            } else if(randomNumber==3){
                Result.innerText="YOU LOST!";
                Result.classList="text-center mt-5 pt-5 text-danger";
                computer_score++;
            }
            }else if (rock.checked){
                if(randomNumber==1){
                    Result.innerText="YOU LOST!";
                    Result.classList="text-center mt-5 pt-5 text-danger";
                    computer_score++;
                } else if(randomNumber==2){
                    Result.innerText="YOU WIN!";
                    Result.classList="text-center mt-5 pt-5 text-success";
                    player_score++;
                }else  if(randomNumber==3){
                    Result.innerText="DRAW";
                    Result.classList="text-center mt-5 pt-5 text-warning";
                }
            } 
            score.innerText=`You : ${player_score} | ${computer_score} : Ai`;
            rock.checked=false;
            scissor.checked=false;
            paper.checked=false;

    } )
