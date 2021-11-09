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

 const clickRed = redBtn.addEventListener('click', e => {
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
let randomColor = function getRandomIntInclusive(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    console.log(Math.floor(Math.random() * (max - min +1)+ min))
    return Math.floor(Math.random() * (max - min +1)+ min)
}
function getRandomColor() {
    let randomValue = randomColor(1,4)

        if (randomValue === 1){
            redBtn.style.opacity = "90%"
            setTimeout(function(){
                redBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
        } 

        else if (randomValue === 2){
            blueBtn.style.opacity = "90%"
            setTimeout(function(){
                blueBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
        } 

        else if (randomValue === 3){
            greenBtn.style.opacity = "90%"
            setTimeout(function(){
                greenBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
        } 

        else if (randomValue === 4){
            yellowBtn.style.opacity = "90%"
            setTimeout(function(){
                yellowBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
        } 
        else {
            console.log('Something is not working')
        }

}
getRandomColor()

// let test = Math.floor(Math.random() * 4)+1
// console.log(test)
// randomColor(1,4)