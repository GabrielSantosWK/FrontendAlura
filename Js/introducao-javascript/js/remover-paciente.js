let tabelaRemove = document.querySelector("#tabela-pacientes");
const removerPaciente = (event) => {
  event.target.parentNode.classList.add('fadeOut');
  setTimeout(() => {
    event.target.parentNode.remove();
  }, 300);
};
tabelaRemove.addEventListener("dblclick", removerPaciente);
