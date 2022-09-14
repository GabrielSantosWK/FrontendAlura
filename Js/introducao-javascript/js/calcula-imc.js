let listH1 = document.querySelectorAll(".paciente");
listH1.forEach((item) => {
  let peso = parseFloat(item.querySelector(".info-peso").textContent);
  let altura = parseFloat(item.querySelector(".info-altura").textContent);
  let imc = calcularImc(peso, altura);

  if (!validaPeso(peso)) {
    imc = "Peso Inválido";
    item.classList.add("paciente-invalido");
  }
  if (!validaAltura(altura)) {
    imc = "Altura Inválido";
    item.classList.add("paciente-invalido");
  }
  item.querySelector(".info-imc").textContent = `${imc}`;
});
function calcularImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  let validador = true;
  if ((peso <= 0 || peso >= 1000) || (!peso)) {
    validador = false;
  }
  return validador;
}
function validaAltura(altura) {
  let validador = true;
  if ((altura <= 0 || altura >= 3) || (!altura)) {
    validador = false;
  }
  return validador;
}
