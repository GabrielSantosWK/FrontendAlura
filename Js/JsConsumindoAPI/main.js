async function buscarCEP(cep) {
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error("Cep invalido");
    }
    var cidade = document.querySelector("#cidade");
    var logradouro = document.querySelector("#endereco");
    var estado = document.querySelector("#estado");

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (error) {
    console.log(error);
  }
}

var cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => {
  buscarCEP(cep.value);
});
/*
let ceps = ["87205040", "87200161"];
let consjuntoCeps = ceps.map((valores) => buscarCEP(valores));
Promise.all(consjuntoCeps).then((respostas) => console.log(respostas));

//buscarCEP();
/*var consultaCEP = fetch("https://viacep.com.br/ws/00000000/json/")
  .then((response) =>
    response.json().then((r) => {
      if (r.error) {
        throw Error("Esse cep não existe!");
      } else {
        console.log(r);
      }
    })
  )
  .catch((error) => {
    console.log(error, "ois");
  })
  .finally((msg) => console.log("Processamento concluido"));
console.log(consultaCEP);
*/
