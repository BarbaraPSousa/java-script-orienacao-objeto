import { Conta } from "./Conta.js";

export class ContaPoupaca extends Conta{  // extends indica que class Herda de outra

  constructor(saldoInicial, cliente, agencia) {
   super(saldoInicial,cliente,agencia)
  }

}
