let diameter = 0
let answer = 0
let diameter1 = 0
let answer1 = 0

document.getElementById('button').addEventListener('click', area)
document.getElementById('button-2').addEventListener('click', circumference)

function area () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  answer = ((Math.PI * diameter * diameter) /4) 
  // pow(diameter,2) could be replaced by diameter * diameter
  document.getElementById('text1').innerHTML = Math.round(answer)
}

function circumference () {
  diameter1 = document.getElementById('input-2').value
  diameter1 = parseInt(diameter1)
  answer1 = (Math.Pi * diameter1)
  document.getElementById('text2').innerHTML = Math.round(answer1)
}
