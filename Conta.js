export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial
    this._cliente = cliente
    this._agencia = agencia
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

  //funções

  _saca(valor, taxa) {
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
    }
    return 0 //retorna 0 se não tiver valor para sacar
  }

  sacar(valor) {
    let taxa = 1
    return this._saca(valor, taxa)
  }

  deposita(valor) {
    this._saldo += valor
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor) // valor sacado a conta
    conta.deposita(valor) //depositar valor sacado na conta informada
  }
}
