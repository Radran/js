const data = new Date()
const diaSemana = data.getDay()
/*if (diaSemana ===0 ) {
    diaSemanatxt = 'domingo'
}else if (diaSemana === 1){
    diaSemanatxt = 'segunda'
}else if (diaSemana === 2){
    diaSemanatxt = 'terça'
}else if (diaSemana === 3){
    diaSemanatxt = 'quarta'
}else if (diaSemana === 4){
    diaSemanatxt = 'quinta'
}else if (diaSemana === 5){
    diaSemanatxt = 'sexta'
}else if (diaSemana === 6){
    diaSemanatxt = 'sábado'
}*/
function getDiaSemanaTexto(diaSemana) {
    let diaSemanatxt
    switch (diaSemana) {
        case 0:
            diaSemanatxt='domingo'
            break
        case 1:
            diaSemanatxt='segunda'
            break
        case 2:
            diaSemanatxt='terça'
            break
        case 3:
            diaSemanatxt='quarta'
            break
        case 4:
            diaSemanatxt='quinta'
            break
        case 5:
            diaSemanatxt='sexta'
            break
        case 6:
            diaSemanatxt='sábado'
            break
        default:
            diaSemanatxt=''
            
    }
    return diaSemanatxt
}
const diaSemanatxt = getDiaSemanaTexto(diaSemana)
console.log(diaSemana, diaSemanatxt)
