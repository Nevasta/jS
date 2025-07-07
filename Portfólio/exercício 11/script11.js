let clicks = 0
let Tela = document.querySelector('#resultado');



function BotãoMais() {
    clicks = 11
    Tela.innerHTML = ""
    while (clicks > 0) {
        clicks--
        Tela.innerHTML += `<p>${clicks}</p>`
    }
}

function Re() {
    Tela.innerHTML = ""
}