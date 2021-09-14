//declarando class
class Cliente {
  nome
  cpf
}

class ContaCorrente {
  agencia
  //#saldo = 0; atributo privado
  _saldo // atributo privado

  sacar(valor) { // função
    if (this._saldo >= valor) {
      // se saldo não for maior que valor disponivel
      this._saldo -= valor
    }
  }

  deposita(valor) { // função
    if (this._saldo > 0) {
      // se saldo for maior que 0
      this._saldo += valor
    }
  }
}

const cliente1 = new Cliente() //criando um novo obj
//atributos obj
cliente1.nome = 'Paulo'
cliente1.cpf = 15976398634

const cliente2 = new Cliente() ////criando um novo obj
//atributos obj
cliente2.nome = 'Paula'
cliente2.cpf = 1569639863

//imprimindo no console obj
console.log(cliente1)

const contaCorrentePaulo = new ContaCorrente()
contaCorrentePaulo.agencia = 1001
contaCorrentePaulo._saldo =1000;
contaCorrentePaulo.deposita(100)
contaCorrentePaulo.deposita(100)
contaCorrentePaulo.deposita(100)
contaCorrentePaulo.sacar(50)

console.log(contaCorrentePaulo)
