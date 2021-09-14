//declarando class
class Cliente {
  nome
  cpf
  
}

class ContaCorrente{
  agencia
  saldo

  sacar(valor){
    if(this.saldo >= valor){
      this.saldo -= valor;
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
cliente2.cpf = 15696398634


const contaCorrentePaulo = new ContaCorrente()
contaCorrentePaulo.agencia = 1001
contaCorrentePaulo.saldo = 0;
console.log(contaCorrentePaulo.saldo); // esperado saldo 0
contaCorrentePaulo.saldo = 100;
console.log(contaCorrentePaulo.saldo); // // esperado saldo 100
contaCorrentePaulo.sacar(50);
console.log(contaCorrentePaulo.saldo); // esperado saldo 50-100 = 50
contaCorrentePaulo.sacar(200);
console.log(contaCorrentePaulo.saldo); // esperado saldo 200-100 = -100, não permitido



//imprimindo no console obj
console.log(cliente1);
console.log(cliente2);
