let campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function () {
  //console.log(this.value);
  let paciente = document.querySelectorAll(".paciente");
  paciente.forEach((item) => {
    let td = item.querySelector(".info-nome");
    item.classList.add('hide');      
    let expressao = new RegExp(this.value,'i');
    if (expressao.test(td.textContent)) {
      item.classList.remove("hide");
    }   
//    if (td.textContent.toLowerCase().includes(this.value.toLowerCase())) {
//      item.classList.remove("hide");
//    }
  });
});
