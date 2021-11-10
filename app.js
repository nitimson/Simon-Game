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

redBtn.addEventListener('click', e => {
        const redColor = 1
        redBtn.style.opacity = "90%"
        setTimeout(function(){
            redBtn.style.opacity = "40%"
        },300)
        playerChoices.push(redColor)
        console.log(playerChoices)
        return playerChoices
})

blueBtn.addEventListener('click', e => {
        const blueColor = 2
        blueBtn.style.opacity = "90%"
        setTimeout(function(){
            blueBtn.style.opacity = "40%"
        },300)      
        playerChoices.push(blueColor)
        console.log(playerChoices)
        return playerChoices  
})

greenBtn.addEventListener('click', e => {
        const greenColor = 3
        greenBtn.style.opacity = "90%"
        setTimeout(function(){
            greenBtn.style.opacity = "40%"
        },300) 
        playerChoices.push(greenColor)
        console.log(playerChoices)
        return playerChoices    
})

yellowBtn.addEventListener('click', e => {
        const yellowColor = 4
        yellowBtn.style.opacity = "90%"
        setTimeout(function(){
            yellowBtn.style.opacity = "40%"
        },300)   
        playerChoices.push(yellowColor)
        console.log(playerChoices)
        return playerChoices    
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