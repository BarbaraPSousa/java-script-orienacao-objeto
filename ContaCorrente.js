//class conta corrente

import { Cliente } from './Cliente.js'
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
  sacar(valor) {
    //Sobrecrita
    let taxa = 1.1
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
    }
  }
}
