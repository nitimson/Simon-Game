let computerChoices = []
let playerChoices = []
let level

const redBtn = document.querySelector('.red')
const blueBtn = document.querySelector('.blue')
const greenBtn = document.querySelector('.green')
const yellowBtn = document.querySelector('.yellow')
const startGame = document.querySelector('.start')
const quitBtn = document.querySelector('.quit')


function playersTurn(){   
    if (computerChoices)
    redBtn.addEventListener('click', e => {
        let redColor = 1
        redBtn.style.opacity = "90%"
        setTimeout(function(){
            redBtn.style.opacity = "40%"
        },300)
        playerChoices.push(redColor)
        console.log(playerChoices)
        if (playerChoices.length === computerChoices.length){
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
        if (playerChoices.length === computerChoices.length){
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
        if (playerChoices.length === computerChoices.length){
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
        if (playerChoices.length === computerChoices.length){
            computerTurn()
        }  
    })
}

// ------- This compares computer array with player array -----------
function compareChoices(){
    for (i=0; i <= computerChoices.length; i ++){
        if (computerChoices[i] !== playerChoices[i]){
        console.log(compareChoices)
         return false
        }
    } 
    console.log(compareChoices)
    return true
}


let randomColor = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    console.log(Math.floor(Math.random() * (max - min +1)+ min))
    return Math.floor(Math.random() * (max - min +1)+ min)
}

// -------- This generates a random # from 1-4 and changes the opacity of that button (color). ------------
function getRandomColor() {
    let randomValue = randomColor(1,4)

        if (randomValue === 1){
            redBtn.style.opacity = "90%"
            setTimeout(function(){
                redBtn.style.opacity = "40%"
            },300)
            return randomValue
        } 

        else if (randomValue === 2){
            blueBtn.style.opacity = "90%"
            setTimeout(function(){
                blueBtn.style.opacity = "40%"
            },300)
            return randomValue
        } 

        else if (randomValue === 3){
            greenBtn.style.opacity = "90%"
            setTimeout(function(){
                greenBtn.style.opacity = "40%"
            },300)
            return randomValue
        } 

        else if (randomValue === 4){
            yellowBtn.style.opacity = "90%"
            setTimeout(function(){
                yellowBtn.style.opacity = "40%"
            },300)
            return randomValue
        } 
        else {
            console.log('Something is not working')
        }
        return randomValue
}

let r

startGame.addEventListener('click', e => {
            r = getRandomColor()
            computerChoices.push(r)
            playersTurn()
            console.log(computerChoices) 
})


function displayComputerChoices(){
    for (i=0; i <= computerChoices.length; i++){
        if (computerChoices[i] === 1){
            redBtn.style.opacity = "90%"
            setTimeout(function(){
                redBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
            console.log(computerChoices)        
        } 

        else if (computerChoices[i] === 2){
            blueBtn.style.opacity = "90%"
            setTimeout(function(){
                blueBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
            console.log(computerChoices)
        } 

        else if (computerChoices[i] === 3){
            greenBtn.style.opacity = "90%"
            setTimeout(function(){
                greenBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
            console.log(computerChoices)
        }

        else if (computerChoices[i] === 4){
            yellowBtn.style.opacity = "90%"
            setTimeout(function(){
                yellowBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
              
        } 
    }
}

function computerTurn(){
    console.log('computerTurn')
    
    if (compareChoices() === true){
        let playerChoices = []
        console.log(playerChoices)
        setTimeout(function(){
            displayComputerChoices()
        },500)
        setTimeout(function(){
            r = getRandomColor()
            computerChoices.push(r)
        },1000)
        console.log(computerChoices) 
        playersTurn()
    }

    else if (compareChoices() === false){
        displayComputerChoices()
        playersTurn()
        compareChoices()
        if (compareChoices() === true){
            let playerChoices = []
            console.log(playerChoices)
            displayComputerChoices()
            r = getRandomColor()
            computerChoices.push(r)
            console.log(computerChoices) 
        }
        else 
            playerChoices = []
            let computerChoices = []
            alert ('Game Over')
    }
   
}

