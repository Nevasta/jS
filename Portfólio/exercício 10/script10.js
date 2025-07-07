let clicks = 0
let Tela = document.querySelector('#resultado');
let func = 0

function BotãoMais() {
    clicks = 0
    Tela.innerHTML = ""

    while (clicks < 11) {
        if (clicks % 2 === 0) {
           Tela.innerHTML += `<h2>${clicks}</h2>`
            clicks++
        }
        else {
            Tela.innerHTML += `<p>${clicks}</p>`
            clicks++
        }
    }
}

function Re() {
    Tela.innerHTML = ""
}