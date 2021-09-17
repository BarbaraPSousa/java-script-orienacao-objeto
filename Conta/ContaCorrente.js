//class conta corrente

import { Conta } from './Conta.js'

export class ContaCorrente extends Conta {
  // extends indica que class Herda de outra

  static numeroDeConta = 0 //variavel static

  //Contrutor
  constructor(cliente, agencia) {
    super(0, cliente, agencia)
    ContaCorrente.numeroDeConta += 1 // contador(todas as vez que for instanciado uma conta)
  }

  //funções
  //Sobrecrita
  sacar(valor) {
    let taxa = 1.1
    return this._saca(valor, taxa)
  }
}
