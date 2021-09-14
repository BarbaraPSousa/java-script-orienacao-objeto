//class conta corrente

export class ContaCorrente {
  agencia
  //#saldo = 0; atributo privado
  _saldo // atributo privado

  sacar(valor) {
    // função
    if (this._saldo >= valor) {
      // se saldo não for maior que valor disponivel
      this._saldo -= valor
    }
  }

  deposita(valor) {
    // função
    if (this._saldo <= 0) {
      // se saldo for menor que 0
      return
    }
    this._saldo += valor
  }
}
