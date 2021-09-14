//class conta corrente

export class ContaCorrente {
  agencia
  cliente // associação de atributos

  //#saldo = 0; atributo privado
  _saldo = 0; // atributo privado

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
