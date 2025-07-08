let Tela = document.querySelector('#resultado');



function BotãoMais() {
    Tela.innerHTML = ""
    for (let clicks; clicks === 0; clicks++) {
        clicks = window.prompt("Digite um número")
        Tela.innerHTML += `<p>${clicks}</p>`
    }
}

function Re() {
    Tela.innerHTML = ""
}