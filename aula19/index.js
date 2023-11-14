/*function criaPessoa (nome, sobrenome, idade){
    return {nome,sobrenome,idade}
}
const pessoa1= criaPessoa('luiz', 'otavio', 25)
const pessoa2= criaPessoa('joão', 'miranda', 30)
const pessoa3= criaPessoa('arthur', 'pendragon', 26)
const pessoa4= criaPessoa('maria', 'silva', 22)
const pessoa5= criaPessoa('alexandre', 'ottoni', 45)*/

const pessoa1= {
    nome: 'luiz',
    sobrenome:'miranda',
    idade:25,

    fala(){
        console.log(`minha idade atual é ${this.idade}`)
    },
    incrementeIdade(){
        this.idade++
    }
}
pessoa1.fala()
pessoa1.incrementeIdade()
pessoa1.fala()
