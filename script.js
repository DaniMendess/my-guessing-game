let randomNumber = Math.floor(Math.random() * 10)

let screen1 = document.querySelector(".screen1")//pegando elementos HTML atraves do seletos CSS
let screen2 = document.querySelector(".screen2")

let xAttempts = 1;

function thisNumber(event){
    event.preventDefault()// retirar recarregamento de um botão

    const thisNumber = document.querySelector("#thisNumber")

    if(Number(thisNumber.value) == randomNumber ){
        screen1.classList.add("hide")//Adicionando lista de classes
        screen2.classList.remove("hide")// Removendo lista de classes
        xAttempts = 0;
        document.querySelector(".screen1 h3").innerText = (`Tentativas: ${xAttempts}`)// colocando texto dentro de um elemento
    }else{
        document.querySelector(".screen1 h3").innerText = (`Tentativas: ${xAttempts}`)
        document.querySelector(".screen2 p").innerText = (`O número aleatório era: ${randomNumber}`)
    }
    xAttempts++
    thisNumber.value = "";
}

const btnTry =  document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', thisNumber)// adicionando evento ao botão
btnReset.addEventListener('click', reset)// adicionando evento ao botão


//CALLBACK(chame de volta) é uma função que é repassada dentro de outra função quando acontecer tal evento EX: ("CLICK", function) quando CLICAR , executar a (function)
function reset(event){
    event.preventDefault()
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
}