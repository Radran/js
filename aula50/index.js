function retornaFuncao() {
    const nome = 'luiz';
    return function() {
        return nome;
    };

}
const funcao = retornaFuncao();
console.dir(funcao()) 