// filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos.
// retorne os numeros maiores que 10
/*const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)*/
const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'wallace', idade: 47},
];
const pessoasComNomeGrande = pessoas.filter(obj => {
    return obj.nome.length >= 5
});
const pessoasVelhas = pessoas.filter(obj => {
    return obj.idade >= 50
})
const pessoasComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a')
})
console.log(pessoasComA)