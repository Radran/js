// declaração de função (function hoisting)
function falaoi() {
    console.log('oi');
}
falaoi()
//first-class objects 
//function expression
const souUmDado = function() {
    console.log('sou um dado');
};
function executaFuncao(funcao) {
    console.log('vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado)
//arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};
funcaoArrow();

//dentro de um objeto
const obj = {
    falar() {
        console.log('estou falando...');
    }
};
obj.falar();