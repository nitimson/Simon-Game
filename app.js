let computerChoices = []
let playerChoices = []
let level

let game = false

const redBtn = document.querySelector('.red')
const blueBtn = document.querySelector('.blue')
const greenBtn = document.querySelector('.green')
const yellowBtn = document.querySelector('.yellow')
const startGame = document.querySelector('.start')
const quitBtn = document.querySelector('.quit')

// ------- This compares computer array with player array -----------
function compareChoices(){
   for (i=0; i < computerChoices.length; i ++){
       if (computerChoices[i] != playerChoices[i]){
       return false
       }
   }
   return true
}

// --------- Functions to make color opacity change ----------
function red(){
    redBtn.style.opacity = "90%"
        setTimeout(function(){
            redBtn.style.opacity = "40%"
        },300)
}

function blue(){
    blueBtn.style.opacity = "90%"
        setTimeout(function(){
            blueBtn.style.opacity = "40%"
        },300)
}
function green(){
    greenBtn.style.opacity = "90%"
        setTimeout(function(){
            greenBtn.style.opacity = "40%"
        },300)
}
function yellow(){
    yellowBtn.style.opacity = "90%"
        setTimeout(function(){
            yellowBtn.style.opacity = "40%"
        },300)
}

// ------------ Click events for each color, changes opacity, and pushes # into player array, then compares computerChoices array to playerChoices array.  ---------------------------------------------------------

redBtn.addEventListener('click', e => {
        let redColor = 1
        redBtn.style.opacity = "90%"
        setTimeout(function(){
            redBtn.style.opacity = "40%"
        },300)
        playerChoices.push(redColor)
        console.log(playerChoices)
        // function red(){
        //     redBtn.style.opacity = "90%"
        //         setTimeout(function(){
        //             redBtn.style.opacity = "40%"
        //         },300)
        // }
        compareChoices()
        console.log(compareChoices)
        return playerChoices

})

blueBtn.addEventListener('click', e => {
        let blueColor = 2
        blueBtn.style.opacity = "90%"
        setTimeout(function(){
            blueBtn.style.opacity = "40%"
        },300)      
        playerChoices.push(blueColor)
        console.log(playerChoices)
        compareChoices()
        return playerChoices  
})

greenBtn.addEventListener('click', e => {
        let greenColor = 3
        greenBtn.style.opacity = "90%"
        setTimeout(function(){
            greenBtn.style.opacity = "40%"
        },300) 
        playerChoices.push(greenColor)
        console.log(playerChoices)
        compareChoices()
        return playerChoices    
})

yellowBtn.addEventListener('click', e => {
        let yellowColor = 4
        yellowBtn.style.opacity = "90%"
        setTimeout(function(){
            yellowBtn.style.opacity = "40%"
        },300)   
        playerChoices.push(yellowColor)
        console.log(playerChoices)
        compareChoices()
        return playerChoices    
})


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

// ------- Click 'Start' button will cause computer to choose random color and change it's opacity, then push that value into the computerChoices array. ---------------------------------------

let r

startGame.addEventListener('click', e => {
            r = getRandomColor()
            computerChoices.push(r)
            // displayComputerChoices()
            console.log(computerChoices) 
})

// -------  
function displayComputerChoices(){
    for (i=0; i < computerChoices.length; i++){
        if (computerChoices[i] === 1){
            red()
            // redBtn.style.opacity = "90%"
            // setTimeout(function(){
            //     redBtn.style.opacity = "40%"
            // },300)
            // console.log(randomColor)
           
        } 

        else if (computerChoices[i] === 2){
            blue()
            // blueBtn.style.opacity = "90%"
            // setTimeout(function(){
            //     blueBtn.style.opacity = "40%"
            // },300)
            // console.log(randomColor)
            
        } 

        else if (computerChoices[i] === 3){
            green()
            // greenBtn.style.opacity = "90%"
            // setTimeout(function(){
            //     greenBtn.style.opacity = "40%"
            // },300)
            // console.log(randomColor)
        }

        else if (computerChoices[i] === 4){
            yellow()
            // yellowBtn.style.opacity = "90%"
            // setTimeout(function(){
            //     yellowBtn.style.opacity = "40%"
            // },300)
            // console.log(randomColor)
            
        } 
        else {
            console.log('Something is not working')
        }
        
    }
}


function nextTurn(){
    r = getRandomColor()
    computerChoices.push(r)
    console.log(computerChoices) 
}
