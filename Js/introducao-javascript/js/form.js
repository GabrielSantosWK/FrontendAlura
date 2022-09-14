var tabela = document.querySelector("#tabela-pacientes");
let mensagemErro = document.querySelector("#mensagem-erro");
let botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", (event) => {
  event.preventDefault();
  let form = document.querySelector("#form-adiciona");

  let paciente = obtemPacienteDoForm(form);
  adicionarPacienteTabela(paciente);
});
function adicionarPacienteTabela(paciente){
  let form = document.querySelector("#form-adiciona");
  let erro = validarPaciente(paciente);
  if (erro.length > 0) {
    let mensagem = document.querySelector("#mensagem-erro");
    exibeMensagensDeErro(erro);
    return;
  }

  let pacienteTr = montarTr(paciente);
  tabela.appendChild(pacienteTr);
  form.reset();
  limparMensagemErro();
}
function obtemPacienteDoForm(form) {
  let paciente = new Object();
  paciente.altura = form.altura.value;
  paciente.peso = form.peso.value;
  paciente.nome = form.nome.value;
  paciente.gordura = form.gordura.value;
  paciente.imc = calcularImc(form.peso.value, form.altura.value);
  return paciente;
}
function montarTr(paciente) {
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente"); 
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}
function montaTd(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
function validarPaciente(paciente) {
  let mensagem = [];
  if (!paciente.nome) mensagem.push("Nome não pode ser vazio !");

  if (!validaPeso(paciente.peso)) mensagem.push("Peso inválido !");

  if (!validaAltura(paciente.altura)) mensagem.push("Altura inválida !");

  if (!paciente.gordura) mensagem.push("Gordura não pode ser vazia !");

  return mensagem;
}
const exibeMensagensDeErro = (erro) => {
  limparMensagemErro();
  erro.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    mensagemErro.appendChild(li);
  });
};
function limparMensagemErro() {
  mensagemErro.innerHTML = "";
}
