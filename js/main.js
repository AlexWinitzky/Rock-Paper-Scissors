var array = ["rock", "paper", "scissors"]

//var autoChoice = array[Math.floor(Math.random() * array.length)]

//var userChoice = function("rock", "paper", "scissors") {
 // var input1 = document.getElementById("rock")
 // var input2 = document.getElementById("paper")
 //var input3 = document.getElementById("scissors")
//}

var clickrock = document.getElementById("rock")
var clickPaper = document.getElementById("paper")
var clickScissors = document.getElementById("scissors")

var userChoice = rock.addEventListener("click", autoChoice)
var userChoice = paper.addEventListener("click", autoChoice2)
var userChoice = scissors.addEventListener("click", autoChoice3)


function autoChoice() {
  var compPick = array[Math.floor(Math.random() * array.length)]
  var userChoice = "rock"
  compare(userChoice, compPick)
}
function autoChoice2() {
  var compPick = array[Math.floor(Math.random() * array.length)]
  var userChoice = "paper"
  compare(userChoice, compPick)
}
function autoChoice3() {
  var compPick = array[Math.floor(Math.random() * array.length)]
  var userChoice = "scissors"
  compare(userChoice, compPick)
}

function compare(userChoice, compPick) {

  if (userChoice === compPick) {
    alert (`Computer chose ${compPick} Great minds think alike, it's a draw!`)
  }
  if (userChoice === "rock") {
    if (compPick === "scissors") {
      alert (`Computer chose ${compPick} You won!`)
    } else {
      alert (`Computer chose ${compPick} You lost!`)
    }
  }
  if (userChoice === "paper") {
    if (compPick === "rock") {
      alert ( `Computer chose ${compPick} You won!`)
    } else {
      alert ( `Computer chose ${comPick} You lost!`)
      }
    }
  if (userChoice === "scissors") {
    if (compPick === "rock") {
      alert (`Computer chose ${comPick} You lost!`)
    } else {
      alert (`Computer chose ${compPick} You won!`)
    }
  }
}