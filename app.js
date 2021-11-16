let computerChoices = []
let playerChoices = []
let level

const redBtn = document.querySelector('#red')
const blueBtn = document.querySelector('#blue')
const greenBtn = document.querySelector('#green')
const yellowBtn = document.querySelector('#yellow')
const startGame = document.querySelector('.start')
const quitBtn = document.querySelector('.quit')

async function playersTurn(){
    if (compareChoices() == false){
    redBtn.addEventListener('click', e => {
        let redColor = 1
        redBtn.style.opacity = "90%"
        setTimeout(function(){
            redBtn.style.opacity = "40%"
        },300)
        playerChoices.push(redColor)
        console.log(playerChoices)
            if(compareChoices() == true){
                playerChoices = []
                computerTurn()
            }
    })

    blueBtn.addEventListener('click', e => {
        let blueColor = 2
        blueBtn.style.opacity = "90%"
        setTimeout(function(){
            blueBtn.style.opacity = "40%"
        },300)      
        playerChoices.push(blueColor)
        console.log(playerChoices) 
            if (compareChoices() ==true){
                playerChoices = []
                computerTurn()
            }
    })

    greenBtn.addEventListener('click', e => {
        let greenColor = 3
        greenBtn.style.opacity = "90%"
        setTimeout(function(){
            greenBtn.style.opacity = "40%"
        },300) 
        playerChoices.push(greenColor)
        console.log(playerChoices)
            if(compareChoices() == true){
                playerChoices = []
                computerTurn()
            }
    })

    yellowBtn.addEventListener('click', e => {
        let yellowColor = 4
        yellowBtn.style.opacity = "90%"
        setTimeout(function(){
            yellowBtn.style.opacity = "40%"
        },300)  
        playerChoices.push(yellowColor)   
        console.log(playerChoices) 
            if(compareChoices() == true){
                playerChoices = []
                computerTurn()
            }
    })
    }
    await waiting(1000)
}

// ------- This compares computer array with player array -----------
function compareChoices(){
    if (computerChoices.length === playerChoices.length){
        for (let i=0; i <= computerChoices.length; i ++){
            if (computerChoices[i] !== playerChoices[i]){
                console.log(compareChoices)
                alert('Sorry that is not correct.')
                gameOver()
                return false
            }
            else {
                console.log(compareChoices)
                return true
            } 
        } 
        
    }
        console.log(compareChoices)
        return false
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
            displayComputerChoices()
            return randomValue
        } 

        else if (randomValue === 2){
            computerChoices.push(2)
            displayComputerChoices()
            return randomValue
        } 

        else if (randomValue === 3){
            computerChoices.push(3)
            displayComputerChoices()
            return randomValue
        } 

        else if (randomValue === 4){
            computerChoices.push(4)
            displayComputerChoices()
            return randomValue
        } 
        else {
            console.log('Something is not working')
        }
        return randomValue
}

// let r

startGame.addEventListener('click', e => {
            
            getRandomColor()
            // computerChoices.push(r)
            console.log(computerChoices) 
            playersTurn()
           
})

function gameOver(){
    computerChoices = []
    playerChoices = []
    alert('Game over!')
}

function waiting(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function displayComputerChoices(){
    for (let i=0; i <= computerChoices.length; i++){
    
        if (computerChoices[i] === 1){
            redBtn.style.opacity = "90%"
            setTimeout(function(){
                redBtn.style.opacity = "40%"
            },1000)
            console.log(computerChoices) 
            await waiting(1000)    
        }
       
        else if (computerChoices[i] === 2){
            blueBtn.style.opacity = "90%"
            setTimeout(function(){
                blueBtn.style.opacity = "40%"
            },1000)
            console.log(computerChoices)
            await waiting(1000)
        } 

        else if (computerChoices[i] === 3){
            greenBtn.style.opacity = "90%"
            setTimeout(function(){
                greenBtn.style.opacity = "40%"
            },1000)
            console.log(computerChoices)
            await waiting(1000)
        }

        else if (computerChoices[i] === 4){
            yellowBtn.style.opacity = "90%"
            setTimeout(function(){
                yellowBtn.style.opacity = "40%"
            },1000)
            console.log(computerChoices)
            await waiting(1000)
        } 
    }
}

async function computerTurn(){
    console.log('computerTurn')
    getRandomColor()
}