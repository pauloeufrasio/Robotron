

// Obtém todas as referências dos elementos com o atributo 'data-controle' do DOM.
const controle = document.querySelectorAll("[data-controle]");

// Obtém todas as referências dos elementos com o atributo 'data-estatistica' do DOM.
const estatisticas = document.querySelectorAll("[data-estatistica]");

// Objeto que contém as informações das peças e seus atributos de força, poder, energia e velocidade.
const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },
  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },
  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24
  },
  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },
  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
};

// Adiciona um listener para o evento "click" em cada controle.
// Quando um controle é clicado, chama a função 'manipulaDados' passando a operação (adição ou subtração) e o controle como argumentos.
controle.forEach(elemento => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);
  });
});

// Função para manipular os dados dos controles (peças).
function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  // Verifica a operação (adição ou subtração) e atualiza o valor do contador da peça correspondente.
  if (operacao === "-") { 
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

// Função para atualizar as estatísticas das peças com base nos atributos do objeto 'pecas'.
function atualizaEstatisticas(peca) {
  // Para cada elemento com o atributo 'data-estatistica', atualiza o seu valor de acordo com os atributos da peça selecionada.
  estatisticas.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
  });
}
