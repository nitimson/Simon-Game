let computerChoices = [2]
let playerChoices = [2]
let level
compareChoices()
console.log(compareChoices)
let game = false

const redBtn = document.querySelector('.red')
const blueBtn = document.querySelector('.blue')
const greenBtn = document.querySelector('.green')
const yellowBtn = document.querySelector('.yellow')
const startGame = document.querySelector('.start')
const quitBtn = document.querySelector('.quit')

// ------------ Click events for each color, changes opacity, and pushes # into player array, then compares computerChoices array to playerChoices array.  ---------------------------------------------------------
function playersTurn(){   

redBtn.addEventListener('click', e => {
        let redColor = 1
        redBtn.style.opacity = "90%"
        setTimeout(function(){
            redBtn.style.opacity = "40%"
        },300)
        playerChoices.push(redColor)
        console.log(playerChoices)
        compareChoices()
        console.log(compareChoices)
})

blueBtn.addEventListener('click', e => {
        let blueColor = 2
        blueBtn.style.opacity = "90%"
        setTimeout(function(){
            blueBtn.style.opacity = "40%"
        },300)      
        playerChoices.push(blueColor)
        compareChoices()
        console.log(playerChoices)    
})

greenBtn.addEventListener('click', e => {
        let greenColor = 3
        greenBtn.style.opacity = "90%"
        setTimeout(function(){
            greenBtn.style.opacity = "40%"
        },300) 
        playerChoices.push(greenColor)
        compareChoices()
        console.log(playerChoices)  
})

yellowBtn.addEventListener('click', e => {
        let yellowColor = 4
        yellowBtn.style.opacity = "90%"
        setTimeout(function(){
            yellowBtn.style.opacity = "40%"
        },300)   
        playerChoices.push(yellowColor)
        compareChoices()
        console.log(playerChoices)      
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

// ------- Click 'Start' button will cause computer to choose random color and change it's opacity, then push that value into the computerChoices array. ---------------------------------------

let r

startGame.addEventListener('click', e => {
    computerTurn()
            r = getRandomColor()
            computerChoices.push(r)
            playersTurn()
            // displayComputerChoices()
            console.log(computerChoices) 
})

// -------  
function displayComputerChoices(){
    for (i=0; i < computerChoices.length; i++){
        if (computerChoices[i] === 1){
            // red()
            redBtn.style.opacity = "90%"
            setTimeout(function(){
                redBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)        
        } 

        if (computerChoices[i] === 2){
            // blue()
            blueBtn.style.opacity = "90%"
            setTimeout(function(){
                blueBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
            
        } 

        if (computerChoices[i] === 3){
            // green()
            greenBtn.style.opacity = "90%"
            setTimeout(function(){
                greenBtn.style.opacity = "40%"
            },300)
            console.log(randomColor)
        }

        if (computerChoices[i] === 4){
            // yellow()
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
}

// function playerTurn(){
//     for (i=0; i <= computerChoices.length; i++){
//         if (compareChoices === true){



//         }
//     }
// }



function computerTurn(){
    compareChoices()

    if (compareChoices === true){
        let playerChoices = []
        console.log(playerChoices)
        displayComputerChoices()
        r = getRandomColor()
        computerChoices.push(r)
        console.log(computerChoices) 
        playersTurn()
    }
    if (compareChoices === false){
        displayComputerChoices()
        playersTurn()
        compareChoices()
        if (compareChoices === true){
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

