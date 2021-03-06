let computerChoices = []
let playerChoices = []
let level = 1

const redBtn = document.querySelector('#red')
const blueBtn = document.querySelector('#blue')
const greenBtn = document.querySelector('#green')
const yellowBtn = document.querySelector('#yellow')
const startGame = document.querySelector('.start')
const resetBtn = document.querySelector('.reset')
const levelCounter = document.querySelector('#level')

function changeLevel(){
    level++
    levelCounter.innerText = (`Level ${level}`)
}

async function playersTurn(){
    if (compareChoices() == false){
    redBtn.addEventListener('click', e => {
        let redColor = 1
        redBtn.style.opacity = "90%"
        setTimeout(function(){
            redBtn.style.opacity = "40%"
        },300)
        playerChoices.push(redColor)
            if(compareChoices() === true){
                playerChoices = []
                setTimeout(function(){
                    computerTurn()
                }, 500)
            }
    })

    blueBtn.addEventListener('click', e => {
        let blueColor = 2
        blueBtn.style.opacity = "90%"
        setTimeout(function(){
            blueBtn.style.opacity = "40%"
        },300)      
        playerChoices.push(blueColor) 
            if (compareChoices() === true){
                playerChoices = []
                setTimeout(function(){
                    computerTurn()
                }, 500)
            }
    })

    greenBtn.addEventListener('click', e => {
        let greenColor = 3
        greenBtn.style.opacity = "90%"
        setTimeout(function(){
            greenBtn.style.opacity = "40%"
        },300) 
        playerChoices.push(greenColor)
            if(compareChoices() === true){
                playerChoices = []
                setTimeout(function(){
                    computerTurn()
                }, 500)
            }
    })

    yellowBtn.addEventListener('click', e => {
        let yellowColor = 4
        yellowBtn.style.opacity = "90%"
        setTimeout(function(){
            yellowBtn.style.opacity = "40%"
        },300)  
        playerChoices.push(yellowColor)   
            if(compareChoices() === true){
                playerChoices = []
                setTimeout(function(){
                    computerTurn()
                }, 500)   
            }
    })
    }
    await waiting(1000)
}

// ------- This compares computer array with player array -----------

function compareChoices(){
    if (computerChoices.length === playerChoices.length){
        for (let i=0; i <= computerChoices.length; i++){
            if (computerChoices[i] != playerChoices[i]){
                if (window.confirm('Sorry that is not correct. Start game again')){
                    window.location.reload()
                }
                return false
            }
        }   
    } else {
        return false
    }
    return true
}

let randomColor = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    Math.floor(Math.random() * (max - min +1)+ min)
    return Math.floor(Math.random() * (max - min +1)+ min)
}

// -------- This generates a random # from 1-4 and changes the opacity of that button (color). ------------

function getRandomColor() {
    let randomValue = randomColor(1,4)

        if (randomValue === 1){
            computerChoices.push(1)
            console.log(computerChoices)
            displayComputerChoices()
            return randomValue
        } 

        else if (randomValue === 2){
            computerChoices.push(2)
            console.log(computerChoices)
            displayComputerChoices()
            return randomValue
        } 

        else if (randomValue === 3){
            computerChoices.push(3)
            console.log(computerChoices)
            displayComputerChoices()
            return randomValue
        } 

        else if (randomValue === 4){
            computerChoices.push(4)
            console.log(computerChoices)
            displayComputerChoices()
            return randomValue
        } 
        // else {
        //     console.log('Something is not working')
        // }
        return randomValue
}

startGame.addEventListener('click', e => {
    computerChoices = []
    playerChoices = []
    // console.log(computerChoices, playerChoices)

    getRandomColor()
    playersTurn()         
})

function waiting(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function displayComputerChoices(){
    for (let i=0; i <= computerChoices.length; i++){
    
        if (computerChoices[i] === 1){
            redBtn.style.opacity = "90%"
            setTimeout(function(){
                redBtn.style.opacity = "40%"
            },800)
            await waiting(1000)    
        }
       
        else if (computerChoices[i] === 2){
            blueBtn.style.opacity = "90%"
            setTimeout(function(){
                blueBtn.style.opacity = "40%"
            },800)
            await waiting(1000)
        } 

        else if (computerChoices[i] === 3){
            greenBtn.style.opacity = "90%"
            setTimeout(function(){
                greenBtn.style.opacity = "40%"
            },800)
            await waiting(1000)
        }

        else if (computerChoices[i] === 4){
            yellowBtn.style.opacity = "90%"
            setTimeout(function(){
                yellowBtn.style.opacity = "40%"
            },800)
            await waiting(1000)
        } 
    }
}

function computerTurn(){
    changeLevel()
    getRandomColor()
}