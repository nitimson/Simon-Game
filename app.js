const computer = []
const player = []

const red = 'red'
const blue = 'blue'
const green = 'green'
const yellow = 'yellow'

const redBtn = document.querySelector('.red')
const blueBtn = document.querySelector('.blue')
const greenBtn = document.querySelector('.green')
const yellowBtn = document.querySelector('.yellow')

redBtn.addEventListener('click', e => {
    if (e.target.classList.contains('red'))
        redBtn.style.opacity = "90%"
        setTimeout(function(){
            redBtn.style.opacity = "40%"
        },300)
          
})

blueBtn.addEventListener('click', e => {
    if (e.target.classList.contains('blue'))
        blueBtn.style.opacity = "90%"
        setTimeout(function(){
            blueBtn.style.opacity = "40%"
        },300)
          
})
greenBtn.addEventListener('click', e => {
    if (e.target.classList.contains('green'))
        greenBtn.style.opacity = "90%"
        setTimeout(function(){
            greenBtn.style.opacity = "40%"
        },300)
       
})

yellowBtn.addEventListener('click', e => {
    if (e.target.classList.contains('yellow'))
        yellowBtn.style.opacity = "90%"
        setTimeout(function(){
            yellowBtn.style.opacity = "40%"
        },300)
       
    
})