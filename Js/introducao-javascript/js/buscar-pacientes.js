let butaoAddPaciente = document.querySelector("#buscar-paciente");
butaoAddPaciente.addEventListener("click", async function (event) {
  event.preventDefault();
  let url = "https://api-pacientes.herokuapp.com/pacientes";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
    console.log(xhr.responseText);
  });
  xhr.send();

  let response = await fetch(url);
  if (response.status == 200) {
    response = await response.json();
    response.forEach((item) => {
      adicionarPacienteTabela(item);
    });
    console.log(response);
  }
});
