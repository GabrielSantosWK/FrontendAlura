const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
  "bracos":{
    "forca":29,
    "poder":35,
    "energia":35,
    "velocidade":-5
  },
  "blindagem":{
    "forca":41,
    "poder":20,
    "energia":0,
    "velocidade":-20
  },
  "nucleos":{
    "forca":0,
    "poder":7,
    "energia":48,
    "velocidade":-4
  },  
    "pernas":{
      "forca":27,
      "poder":21,
      "energia":-32,
      "velocidade":43
    },
    "pernas":{
      "forca":27,
      "poder":21,
      "energia":-32,
      "velocidade":43
    }
  };
function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao == "-") {
    if (peca.value > 0) {
      peca.value = parseInt(peca.value) - 1;
    }
  } else if (operacao == "+") {
    peca.value = parseInt(peca.value) + 1;
  }
}
const controle = document.querySelectorAll("[data-controle]");
controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    atualizarPecas(evento.target.dataset.peca);
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
  });
});
function atualizarPecas(peca){
  estatisticas.forEach((elemento)=>{
    elemento.textContent = parseInt(elemento.textContent) + parseInt(pecas[peca][elemento.dataset.estatistica]);
  })
  
}