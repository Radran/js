/**
 * primitivos(imutáveis)- string, number, boolan, undefined, null (bigint, symbol) - valores copiados
 
 *referência (mutável)- array, object, function - passados por referência
 */
const a={
    nome: 'luiz',
    sobrenome: 'otavio'
}
const b={...a}
a.nome='joão'
console.log(a)
console.log(b)
