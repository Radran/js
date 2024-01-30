(function(idade, peso, altura) {
    const sobrenome = 'Nery'
    function crianome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falanome() {
        console.log(crianome('Felipe'))
    }
    falanome();
    console.log(idade, peso, altura)
})(30, 80, 1.80);

const nome = 'qualquer coisa'
