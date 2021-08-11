
const screen= document.getElementById('screen')

const buttonC = document.getElementById('C')
const buttonLt = document.getElementById('lt')

const buttonRad = document.getElementById('rad')

const buttonEq = document.getElementById('eq')

const buttonSign = document.getElementById('sign')

const buttonDot = document.getElementById('dot')

const numbers = document.getElementsByClassName('number')
const operators = document.getElementsByClassName('operator')



let num1 = null
let num2 = null

for(const element of numbers) {
    element.addEventListener('click', event =>{
        event.preventDefault()
        const old = screen.textContent
        screen.textContent = old + element.dataset.value
    })
}



let action = null

for(const element of operators) {
    element.addEventListener('click', event =>{
        event.preventDefault()
        action = element.dataset.action
        num1 = Number(screen.textContent)
        // console.log(num1)
        screen.textContent = ''
    })
}



buttonSign.addEventListener('click', event =>{
    event.preventDefault()
    const old = Number(screen.textContent)
    screen.textContent = old * (-1)
})




buttonEq.addEventListener('click', event =>{
    event.preventDefault()
      
    num2 = Number(screen.textContent) 

switch (action) {
    case 'add':
        screen.textContent = num1 + num2
         break
    case 'sub':
        screen.textContent = num1 - num2
        break
    case 'mul':
        screen.textContent = num1 * num2
        break
    case 'div':
        screen.textContent = num1 / num2
        break
    }
})


buttonRad.addEventListener('click', event =>{
    event.preventDefault()
    num1 = Number(screen.textContent)
    screen.textContent = Math.sqrt(num1)
})






buttonLt.addEventListener('click', event =>{
    event.preventDefault()
})

buttonC.addEventListener('click', event =>{
    event.preventDefault()
    screen.textContent = ''
})











// numbers.forEach(element => {
//     element.addEventListener('click', event =>{
//         event.preventDefault()
//         const old = screen.textContent
//         screen.textContent = old + element.dataset.value
//     })
// });





 function addStylesTo(node, text) {
        node.textContent = text
    }


