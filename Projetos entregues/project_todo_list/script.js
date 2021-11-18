let tarefa;

const listaDeTarefas = document.getElementById('lista-tarefas');

const criarAtarefa = document.getElementById('criar-tarefa');

criarAtarefa.addEventListener('click', btnAdd);

function btnAdd() {
  tarefa = document.getElementById('texto-tarefa').value;

  const tarefaNova = document.createElement('li');

  tarefaNova.addEventListener(
    'click',
    mudarCorClick
  ); /* Aqui é o evento de click do requisito 7 e 8*/

  tarefaNova.addEventListener('dblclick', function (event) {
    riscaTarefas(event.target);
  });

  tarefaNova.innerText = tarefa;

  listaDeTarefas.appendChild(tarefaNova);

  document.getElementById('texto-tarefa').value = '';
}

/* Requisito 7 e 8 */
function mudarCorClick(event) {
  const selected = document.querySelector('.selected');

  if (selected !== null) {
    selected.classList.remove('selected');
  }

  event.target.classList.add('selected');
}

/*Requisito 9*/

function riscaTarefas(event) {
  const verificaCompleted =
    event.classList.contains('completed'); /* Verifa se tem a classe completed*/

  if (verificaCompleted === false) {
    event.classList.add('completed');
  } else if (verificaCompleted === true) {
    event.classList.remove('completed');
  }

  /*const completed = document.querySelector('.completed');

  if (completed === null) {
    event.classList.add('completed');
  }
  if (completed !== null) {
    event.classList.add('completed');
  } else if (event.classList.contains('completed')) {
    event.classList.remove('completed');
  }*/
}

/* Quando for clicado duas vezes ele verifica se tem a classe completed e risca.*/
