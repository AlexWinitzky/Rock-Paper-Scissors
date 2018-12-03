var arr = ['rock', 'paper', 'scissors']
var wins = []
var losses = []
var ties = []

var btn = document.getElementById("rock")
var btn2 = document.getElementById("paper")
var btn3 = document.getElementById("scissors")

btn.addEventListener("click", function () {
  var userChoice = 'rock'
  compare(userChoice)
})
btn2.addEventListener("click", function () {
  var userChoice = 'paper'
  compare(userChoice)
})
btn3.addEventListener("click", function () {
  var userChoice = 'scissors'
  compare(userChoice)
})


function compare(userChoice) {
  var compChoice = arr[Math.floor(Math.random() * arr.length)]
  document.getElementById("user").innerHTML = `${userChoice}`
  document.getElementById("comp").innerHTML = `${compChoice}`

  if
  ((userChoice === 'rock' && compChoice === 'scissors') ||
  (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')) {
    document.getElementById("message").innerHTML = "You win!"
    return win()
  } else if
  (userChoice === compChoice) {
    document.getElementById("message").innerHTML = "It's a tie!"
    return tie()
  } else {
    document.getElementById("message").innerHTML = "You lose!"
    return lose()
  }
}

function win() {
  wins.push(1)
  document.getElementById("wins").innerHTML = `Wins: ${wins.length}`
}
function tie() {
  ties.push(1)
  document.getElementById("ties").innerHTML = `Ties: ${ties.length}`
}
function lose() {
  losses.push(1)
  document.getElementById("losses").innerHTML = `Losses: ${losses.length}`
}
