const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode ===13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function criaBotaoApagar(li) {
    li.innerText +='  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    botaoApagar.setAttribute('class', 'apagar' )
    li.appendChild(botaoApagar);
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoinput) {
    const li = criaLi();
    li.innerText = textoinput
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});
document.addEventListener('click', function(e) {
    const el =e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();
        console.log(tarefaTexto)
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJson = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
    console.log(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();