/*const data = new Date()
const texto = document.querySelector('.container h1')
function getDiaSemanaTexto(diaSemana){
   const diaSemanatxt = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
   return diaSemanatxt[diaSemana]
}
function getNomeMes(numeroMes) {
    const meses = [ 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes]
}
function zeroaesquerda (num) {
    return num >= 10 ? num : `0${num}`
}
function criaData (data) {
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()
    
    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)
    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
    ` de ${data.getFullYear()} ${zeroaesquerda(data.getHours())}:${zeroaesquerda(data.getMinutes())}`
    )
}
texto.innerHTML = criaData(data)*/
const texto = document.querySelector('.container h1')
const data = new Date()
texto.innerHTML = data.toLocaleString('pt-BR', {
    dateStyle:'full', timeStyle:'short'
})