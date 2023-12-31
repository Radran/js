//parar o envio padrão do formulario
const form = document.querySelector('#form')
form.addEventListener('submit', function (evento) {
    evento.preventDefault()
    const inputPeso = evento.target.querySelector('#peso')
    const inputAltura = evento.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso) {
        setresultado('Peso inválido', false)
        return
    }

    if(!altura) {
        setresultado('altura invalida', false)
        return
    }
    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    const msg = `seu IMC é ${imc} (${nivelImc}).`
    setresultado(msg, true)
})
function getNivelImc (imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']

    if (imc >= 39.9) {
        return nivel[5]
    }
    if (imc >= 34.9) {
        return nivel[4]
    }
    if (imc >= 29.9) {
        return nivel[3]
    }
    if (imc >= 24.9) {
        return nivel[2]
    } 
    if (imc >= 18.5) {
        return nivel [1]
    }
    if (imc < 18.5) {
        return nivel[0]
    }
}
function getImc (peso, altura) {
    const imc =peso / altura ** 2;
    return imc.toFixed(2);
}
function criaP () {
    const p = document.createElement('p')
    return p
}
function setresultado (msg, isValid) {
    const res = document.querySelector('#res')
    res.innerHTML = ''
    const p = criaP()
    if (isValid) {
        p.classList.add('paragrafo-res')
    }else {
        p.classList.add('bad')
    }
    p.innerHTML=msg
    res.appendChild(p)

}