/*Rock, Paper, Scissor*/
totalScore = {playerScore: 0, computerScore: 0}

const rpsButtons = document.querySelectorAll(".rpsButton")


gameArray = ['rock', 'paper', 'scissor']

// Computer Choice
const getComputerInput = ()=>{
let computerChoice = Math.floor(Math.random()*gameArray.length)

return gameArray[computerChoice]


}
console.log(getComputerInput())

// Get Result
const getResult = (playerChoice, computerChoice)=>{
  let score;
  if(playerChoice == computerChoice){
    score = 0
  }else if(playerChoice == 'rock' & computerChoice == 'scissors'){
    score = 1
  }else if(playerChoice == 'scissor' & computerChoice == 'paper'){
    score = 1
  }else if(playerChoice == 'paper' & computerChoice == 'rock'){
    score = 1
  }else{
    score = -1
  }
  return score
}

const onClickRps = (playerChoice)=>{
console.log({playerChoice})

let compChoice = getComputerInput()
console.log({compChoice})

score = getResult(playerChoice, compChoice)
console.log({score})
// totalScore['playerScore'] += score
if(score == -1){
  totalScore['computerScore'] += 1
}else if(score == 1){
  totalScore['playerScore'] += 1
}
console.log(totalScore)
showResult(score, totalScore, playerChoice, compChoice)
}

// Player Choice

const playGame = ()=>{
  rpsButtons.forEach(rpsButton=> {
    rpsButton.onclick = ()=> onClickRps(rpsButton.value)
  });
  }
  playGame()
  
// let g = rpsButton[0].value
// let k = rpsButton[1].value
// let m = rpsButton[2].value
// console.log(g)
// console.log(m)
// console.log(k)


const playerScoreDisplay = document.getElementById("player-score")
const displayResult = document.getElementById("players")
const hand = document.getElementById("hands")
const endgameButtonDiv = document.getElementById('endGameButton')
const resultDiv = document.getElementById("result")

        //ShowResult
 const showResult = (score, totalScore, playerChoice, compChoice)=>{
  playerScoreDisplay.innerHTML = score
  displayResult.innerText = `User ${totalScore['playerScore']} - ${totalScore['computerScore']} Comp` 
  hand.innerText = `${playerChoice}  ${" "} vs   ${compChoice}`
  if(score == 1){
    resultDiv.innerText = `You win`
    resultDiv.style.color = 'green'
  }else if(score == -1){
    resultDiv.innerText = `You lose`
    resultDiv.style.color = 'red'
  }else{
    resultDiv.innerText = `Tie`
    resultDiv.style.color = 'yellow'
  }

 }

 const endGameBtn = (totalScore, score)=>{
  playerScoreDisplay.innerText = " "
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  hand.innerText = " "
  score = 0
  displayResult.innerText = ' '
 }

 endgameButtonDiv.onclick =()=> endGameBtn(totalScore, score)
