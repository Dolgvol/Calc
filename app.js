
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
// обрабатывает задаваемые цифры, добавляет их на экран


let action = null

for(const element of operators) {
    element.addEventListener('click', event =>{
        event.preventDefault()
        action = element.dataset.action
        num1 = parseFloat(screen.textContent)   // можно использовать +screen.textContent
        // console.log(num1)
        screen.textContent = ''
    })
}
// запоминает нажатый знак действия в переменную действия, запоминает значение с экрана в первую переменную, очищает экран


buttonSign.addEventListener('click', event =>{
    event.preventDefault()
    let sign = parseFloat(screen.textContent)
    screen.textContent = sign * (-1)
})
// запоминает значение с экрана в переменную, производит действие и заполняет экран результатом


buttonEq.addEventListener('click', event =>{
    event.preventDefault()
      
    num2 = parseFloat(screen.textContent) 

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
        case 'power':
            screen.textContent = num1 ** num2
            break
        case 'log':
            screen.textContent = getBaseLog(num1, num2)
            break
        case 'remainder':
            screen.textContent = num1 % num2
            break
        case 'tenPow':
            screen.textContent = num1 * (10 ** num2)
            break
    }
     num1 = null
     num2 = null
     action = null

     function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
      }
      
})
// запоминает новое значение с экрана во вторую переменную, выбирает действие, производит действие над переменными и заносит результат на экран 


buttonRad.addEventListener('click', event =>{
    event.preventDefault()
    let sq = parseFloat(screen.textContent)
    screen.textContent = sq ** (1/2) // можно использовать Math.sqrt()          
})
// берет корень из содержимого экрана


buttonLt.addEventListener('click', event =>{
    event.preventDefault()
    const old = screen.textContent
    screen.textContent = old.slice(0, -1)
})
// удаляет 1 символ с конца на экране


buttonC.addEventListener('click', event =>{
    event.preventDefault()
    screen.textContent = ''
    num1 = null
    num2 = null
    action = null
})
// удаляет содержимое экрана и обнуляет переменные



 function addStylesTo(node, text) {
        node.textContent = text
    }


