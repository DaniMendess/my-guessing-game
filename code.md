let randomNumber = Math.floor(Math.random() * 10 )

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


let xAttempts = 1;

let clean = 0;


function justToClick (event){
    event.preventDefault()

    const thisNumber = document.querySelector("#thisNumber")
    

    if(Number(thisNumber.value) == randomNumber){
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        document.querySelector(".screen2 p").innerText = (`O número aleatório era : ${randomNumber}`)
        xAttempts = 0;
        document.querySelector(".screen1 h3").innerText = (`Tentativas: ${xAttempts}`)
        
    }else{
        document.querySelector(".screen1 h3").innerText = (`Tentativas: ${xAttempts}`)
    }
    xAttempts++
    thisNumber.value = ""
}
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', justToClick)
btnReset.addEventListener('click', reset)


function reset(event){
    event.preventDefault()
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
}