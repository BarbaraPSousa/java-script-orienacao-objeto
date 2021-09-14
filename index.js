//importe das class
import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente() //intanciando novo obj cliente
cliente1.nome = 'Paulo'
cliente1.cpf = 1239865

const cliente2 = new Cliente() 
cliente2.nome = 'Paula'
cliente2.cpf = 555963879

const conta1 = new ContaCorrente() // instanciando com asociação de cliente
conta1.agencia = 1001
conta1.cliente =cliente1
conta1.deposita(900)
conta1.sacar(375)

console.log(conta1.cliente)
console.log(conta1.saldo) //525


