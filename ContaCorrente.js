//class conta corrente

import { Cliente } from './Cliente.js'

export class ContaCorrente {
  static numeroDeConta = 0 //variavel static

  //Contrutor
  constructor(saldo, cliente, agencia) {
    this._saldo = 0
    this._cliente = cliente
    this._agencia = agencia
    ContaCorrente.numeroDeConta += 1 // contador(todas as vez que for instanciado uma conta)
  }

  //Set cliente
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      // se valor passado for igual a cliente
      this._cliente = novoValor
    }
  }

  //Get cliente
  get cliente() {
    return this._cliente
  }

  //Get saldo (sem set, pois o msm só poderá ser maninupulado pela função saca e deposita)
  get saldo() {
    return this._saldo
  }

  sacar(valor) {
    // função
    if (this._saldo >= valor) {
      // se saldo não for maior que valor disponivel
      this._saldo -= valor
    }
  }

  deposita(valor) {
    // função
    if (valor <= 0) {
      // se saldo for menor que 0
      return
    }
    this._saldo += valor
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor) // valor sacado a conta
    conta.deposita(valor) //depositar valor sacado na conta informada
  }
}
