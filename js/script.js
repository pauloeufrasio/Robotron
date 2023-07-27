

const controle = document.querySelectorAll("[data-controle]")

controle.forEach(elemento => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
  })

});


 function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]") /* Toda vez que clicar no controle ele vai buscar  quem é o controle-contador de cada peça e vai adicionar ou subtrair o poder.*/

  if(operacao === "-") { 
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}