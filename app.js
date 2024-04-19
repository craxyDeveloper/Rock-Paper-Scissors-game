let userScore=0;
let compScore=0;
let choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#StatusText');
let uscore=document.querySelector('#user-score');
let cscore=document.querySelector('#comp-score');
let reset=document.querySelector('#resetbtn');
msg.innerText="Select any choice to start the game";

choices.forEach((choice)=>{
        choice.addEventListener('click',()=>{
            const userChoices=choice.getAttribute('id');
            console.log('user=',userChoices);
            const compChoice=genCompChoice();
            console.log('comp =' ,compChoice);
          checkResult(userChoices,compChoice)
                
                
                // console.log('userWin=',userWin);
                // msg.innerText=`user ${userWin} the game!`;
            })
           
            
           

            
            
        })
    function checkResult(userChoices,compChoice){
                // let compChoice=genCompChoice();
                let userWin='win';
                if(userChoices===compChoice){
                    msg.innerText=`Game Draw! Select again Your:- ${userChoices} & Com:-${compChoice}`;
                    msg.style.backgroundColor='#191919';
                    
                }else{
                    
                    if(userChoices==='rock'){
                        // scissors,paper
                        if(compChoice==='scissors'){
                            userWin='win';
                        userScore++;

                        msg.innerText=`You ${userWin} the game! Your ${userChoices} beats ${compChoice} `;
                        msg.style.backgroundColor='green';
                            
                        }
                        else{
                            userWin='lose';
                            compScore++;
                        
                            msg.innerText=`You ${userWin} the game! Your ${userChoices} beated by ${compChoice}`;
                            msg.style.backgroundColor='red';
                        }
                        
                    }
                    else if(userChoices==='scissors'){
                        //paper,rock
                        if(compChoice==='paper'){
                            userWin='win';
                        userScore++;
                        
                        msg.innerText=`You ${userWin} the game! Your ${userChoices} beats ${compChoice} `;
                        msg.style.backgroundColor='green';
                        }
                        else{
                            userWin='lose';
                            compScore++;
                        
                            msg.innerText=`You ${userWin} the game! Your ${userChoices} beated by ${compChoice}`
                            msg.style.backgroundColor='red';
                            
                        }
                    }
                    else{
                        //rock,scissors
                        if(compChoice==='scissors'){
                            userWin='lose';
                        compScore++;
                            
                        msg.innerText=`You ${userWin} the game! Your ${userChoices} beated by ${compChoice}`
                            msg.style.backgroundColor='red';
                         
                            
                        }
                        else{
                            userWin='win';
                            userScore++;
                            msg.innerText=`You ${userWin} the game! Your ${userChoices} beats ${compChoice} `;
                            msg.style.backgroundColor='green';
                        }
                    }
                
                    
                    // console.log('userWin=',userWin);
                }
                gameUpdation();
            }
            
            
        

// function checkResult(){
   
    
//     if(userChoices===compChoice){
//         msg.innerText='Game Draw! Select again';
//     }
// }
function genCompChoice(){
    let allChoices=['rock','paper','scissors'];
let x= Math.floor(Math.random()*3);
return allChoices[x];
}
function gameUpdation(){
    uscore.innerHTML=userScore;
    cscore.innerHTML=compScore;
}

// function resetGame(userScore,compScore){
//      userScore=0;
//      compScore=0;
//     uscore.innerHTML=userScore;
//     cscore.innerHTML=compScore;
//     gameUpdation();
//     msg.innerText='press any choice to start game!';
//     // msg.style.display='none';
    
    
   
    

reset.addEventListener('click',()=>{
    userScore=0;
    compScore=0;
    gameUpdation();
    msg.innerText="Select any choice to start the game";
    msg.style.backgroundColor='#191919';
})


