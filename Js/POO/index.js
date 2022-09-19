import {Cliente} from './Cliente.js' ;
import {ContaCorrente} from './ContaCorrente.js';

let listCliente = [];
let listConta = [];
let pedro = new Cliente("Pedro","106.028.659-99");
let jose = new Cliente("Jose","106.028.659-20");

let contaPedro = new ContaCorrente("Secred",pedro);
contaPedro.depositar(200);

let contaJose = new ContaCorrente("Caixa",jose);
contaJose.depositar(1000);
contaJose.tranferir(500,contaPedro);


listCliente.push(pedro);
listCliente.push(jose);
listConta.push(contaPedro);
listConta.push(contaJose);

listCliente.forEach(cliente=>{
  console.log(cliente.cpf);
  console.log("-------------------------------");
})
listConta.forEach(conta=>{
  console.log(conta);
  console.log("-------------------------------");
})

console.log(ContaCorrente._contador);
//console.log(contaJose);
