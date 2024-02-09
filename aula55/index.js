//função construtora -> objetos
//função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    //atributos ou metodos privados
    const id = 123456;
    const metodoInterno = function() {

    } ;
    //atributos ou métodos publicos
    this.nome = nome;
    this.sobronome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ':sou um Método');
    };
}
const p1 = new Pessoa('felipe', 'nery');
const p2 = new Pessoa('gabriel', 'silva');
p2.metodo();