const computerChoices = []
const playerChoices = []
let currentPlayer
let game = false


const redBtn = document.querySelector('.red')
const blueBtn = document.querySelector('.blue')
const greenBtn = document.querySelector('.green')
const yellowBtn = document.querySelector('.yellow')
const startBtn = document.querySelector('.start')
const quitBtn = document.querySelector('.quit')

let red = redBtn.addEventListener('click', e => {
        redBtn.style.opacity = "90%"
        setTimeout(function(){
            redBtn.style.opacity = "40%"
        },300)        
})

let blue = blueBtn.addEventListener('click', e => {
        blueBtn.style.opacity = "90%"
        setTimeout(function(){
            blueBtn.style.opacity = "40%"
        },300)         
})
let green = greenBtn.addEventListener('click', e => {
        greenBtn.style.opacity = "90%"
        setTimeout(function(){
            greenBtn.style.opacity = "40%"
        },300)     
})

let yellow = yellowBtn.addEventListener('click', e => {
        yellowBtn.style.opacity = "90%"
        setTimeout(function(){
            yellowBtn.style.opacity = "40%"
        },300)       
})

let randomColor = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    console.log(Math.floor(Math.random() * (max - min +1)+ min))
    return Math.floor(Math.random() * (max - min +1)+ min)
}
// let randomValue = randomColor()
function getRandomColor() {
    let randomValue = randomColor(1,4)

        if (randomValue === 1){
            redBtn.style.opacity = "90%"
            setTimeout(function(){
                redBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
            return randomValue
        } 

        else if (randomValue === 2){
            blueBtn.style.opacity = "90%"
            setTimeout(function(){
                blueBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
            return randomValue
        } 

        else if (randomValue === 3){
            greenBtn.style.opacity = "90%"
            setTimeout(function(){
                greenBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
            return randomValue
        } 

        else if (randomValue === 4){
            yellowBtn.style.opacity = "90%"
            setTimeout(function(){
                yellowBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
            return randomValue
        } 
        else {
            console.log('Something is not working')
        }
        return randomValue
}
let r
startBtn.addEventListener('click', e => {
    // if (game === false){
            r = getRandomColor()
            computerChoices.push(r)
            console.log(computerChoices) 
})


// })

// for (let i=0; i < computer.length; i++){

// }


// getRandomColor()

// let test = Math.floor(Math.random() * 4)+1
// console.log(test)
// randomColor(1,4)