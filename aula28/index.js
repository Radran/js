/*const treshoras = 60 * 60 * 3 * 1000
const umdia =  60 * 60 * 24 * 1000
const data = new Date(0 + treshoras + umdia)
console.log(data.toString())*/
/*const data = new Date()
console.log('dia', data.getDate())
console.log('mês', data.getMonth() + 1)// Mês começa do zero
console.log('ano', data.getFullYear())
console.log('hora', data.getHours())
console.log('minuto', data.getMinutes())
console.log('segundo', data.getSeconds())
console.log('milisegundo', data.getMilliseconds())
console.log('dia da semana', data.getDay())//0 - domingo 6 - sabado
console.log(data.toString())
console.log(Date.now)*/
function zeroaesquerda (num) {
    return num >= 10 ? num : `0${num}`
}
function formataData(data) {
    const dia = zeroaesquerda(data.getDate())
    const mes = zeroaesquerda(data.getMonth() + 1)
    const ano = zeroaesquerda(data.getFullYear())
    const hora = zeroaesquerda(data.getHours())
    const min = zeroaesquerda(data.getMinutes())
    const seg = zeroaesquerda(data.getSeconds())
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const data = new Date()
const databrasil = formataData(data)
console.log(databrasil)