import Sound from "./sounds.js"



let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonPlus = document.querySelector('.plus')
let buttonMines = document.querySelector('.mines')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonForest = document.querySelector('.forest')
const sound = Sound


function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      updateTimerDisplay(minutes, 0)
  
      if (minutes <= 0) {
        
        return
      }
  
      if( seconds <= 0 ) {
        seconds = 2
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }


 function minutesPlus () {
      let minutes = Number(minutesDisplay.textContent)

      updateTimerDisplay(String(minutes + 5), 0)

  
 }
 function minutesMines () {
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(String(minutes - 5), 0)


}



 

  buttonPlay.addEventListener('click' , function (){
    countdown()
  })

 buttonPause.addEventListener('click', function(){
    clearTimeout(timerTimeOut)
 })

 buttonPlus.addEventListener('click' , function(){
minutesPlus()
 })

 buttonMines.addEventListener('click' , function(){
  minutesMines()
 })

 buttonForest.addEventListener('click', function(){
  sound().pressButton()
  
 })