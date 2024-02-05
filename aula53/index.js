//factory function
// constructor function
function criapessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },
        fala: function(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        //getter
        get imc() {
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2)
        }
    };
}
const p1 = criapessoa('Felipe','Nery', 1.78, 90)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)
p1.nomeCompleto='Lebron Raymone James'
console.log(p1.nomeCompleto) 
console.log(p1.fala())
const p2 = criapessoa('joana', 'martins', 1.83, 72)
console.log(p2)