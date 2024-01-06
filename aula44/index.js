function mostraHora() {
    let data = new Date(0);
    return data;
}

const timer = setInterval(function() {
    console.log(mostraHora())
}, 1000);
setTimeout(function() {
    clearInterval(timer);
}, 3000);
setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);