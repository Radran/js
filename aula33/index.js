const pessoa = {
    nome: 'Felipe',
    sobrenome:'Nery',
    idade: 19,
    endereco: {
        rua: 'Av brasil',
        numero: 320
    }
};
// Atribuição via desestruturação
const {nome, endereco} = pessoa;
console.log(endereco);