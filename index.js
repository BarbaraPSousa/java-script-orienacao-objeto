//importe das class
import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

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
contaCorrentePaulo._saldo = 1000
contaCorrentePaulo.deposita(100)
contaCorrentePaulo.deposita(100)
contaCorrentePaulo.deposita(100)

const valorSacado = contaCorrentePaulo.sacar(50)

console.log(contaCorrentePaulo)
console.log(valorSacado)
