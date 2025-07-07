function Cal() {
    let res = window.prompt("Escolha o tipo de conta: adição, subtração, multiplicação ou divisão")
    let Tela = document.querySelector('#resultado');
    res = res.toLowerCase()

    if (res === "adição" || res === "adicao") {
        let n1 = window.prompt("Digite o primeiro número:")
        let n2 = window.prompt("Digite o segundo número:")
        n1 += n2
        Tela.innerHTML = `<p>O resultado é ${n1}</p>`
    }

    else if (res === "subtração" || res === "subtracao") {
        let n1 = window.prompt("Digite o primeiro número:")
        let n2 = window.prompt("Digite o segundo número:")
        n1 -= n2
        Tela.innerHTML = `<p>O resultado é ${n1}</p>`
    }

    else if (res === "divisão" || res === "divisao") {
        let n1 = window.prompt("Digite o primeiro número:")
        let n2 = window.prompt("Digite o segundo número:")
        n1 /= n2
        Tela.innerHTML = `<p>O resultado é ${n1}</p>`
    }

    else if (res === "multiplicação" || res === "multiplicacao") {
        let n1 = window.prompt("Digite o primeiro número:")
        let n2 = window.prompt("Digite o segundo número:")
        n1 *= n2
        Tela.innerHTML = `<p>O resultado é ${n1}</p>`
    }
    
}