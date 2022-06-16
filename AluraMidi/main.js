function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");
for (var contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const audio = `#som_${instrumento}`;
  tecla.onclick = function () {
    tocaSom(audio);
  };
  tecla.onkeydown = function (e) {
    if (e.keyCode == 32 || e.keyCode == 13) {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
