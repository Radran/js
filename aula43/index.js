/*try {
   //é executado se não tiver erros
}catch {
    //É executado quando tem erros
}finally {
    //sempre
}*/
function hora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instância de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}
try {
    const data = new Date ('01-01-1970 12:58:12');
    console.log(hora());
}catch {

}finally {
    console.log('Tenha um bom dia');
}
