import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;
  _saldo = 0;
  static _contador = 0;
  set cliente(value) {
    if (value instanceof Cliente) {
      this._cliente = value;
    }
  }
  get cliente(){
    return this._cliente;
  }
  get saldo(){
    return this._saldo;
  }
  constructor(agencia,cliente){
    this.agencia = agencia;
    this._cliente = cliente;
    ContaCorrente._contador +=1;
  }
  sacar(valor) {
    if (valor <= this._saldo) {
      this._saldo -= valor;
      return valor;
    }
  }
  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }
  tranferir(valor, conta) {
    let valorTransferencia = this.sacar(valor);
    if (valorTransferencia > 0) {
      conta.depositar(valorTransferencia);
    }
  }
}
