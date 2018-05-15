var array = ["rock", "paper", "scissors"]

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

function validateField1() {
  var docs = document.getElementById("img1")
  docs.setAttribute("src", "/Users/admin/Desktop/Coding/Devpoint/rps/rock_and_roll.gif")
  docs.style.display = 'block'
}
function validateField2() {
  var docs = document.getElementById("img2")
  docs.setAttribute("src", "/Users/admin/Desktop/Coding/Devpoint/rps/paper_stacks.gif")
  docs.style.display = 'block'
}
function validateField3() {
  var docs = document.getElementById("img3")
  docs.setAttribute("src", "/Users/admin/Desktop/Coding/Devpoint/rps/scissor_kick.gif")
  docs.style.display = ''
}
function compare(userChoice, compPick) {

  if (userChoice === compPick) {
   return document.getElementById("game").innerHTML = "The sentient AI chose " + `${compPick}` + "!" + " Great minds think alike, it's a draw!"
  }
  if (userChoice === "rock") {
    if (compPick === "scissors") {
      return validateField1()
      return document.getElementById("game").innerHTML = "Skynet chose " + `${compPick}` + "! You won!"
    } else {
      return document.getElementById("game").innerHTML = "The sentient AI chose " + `${compPick}` + "! You lost!"
    }
  }
  if (userChoice === "paper") {
    if (compPick === "rock") {
      return validateField2()
      return document.getElementById("game").innerHTML = "The Autobots chose " + `${compPick}` + "! You won!"
    } else {
      return document.getElementById("game").innerHTML = "The Decepticons chose " + `${compPick}` + "! You lost!"
      }
    }
  if (userChoice === "scissors") {
    if (compPick === "rock") {
      return document.getElementById("game").innerHTML = "The self-aware AI chose " + `${compPick}` + "! You lost!"
    } else {
      return validateField3()
      return document.getElementById("game").innerHTML = "Skynet chose " + `${compPick}` + "! You won!"
    }
  }
}