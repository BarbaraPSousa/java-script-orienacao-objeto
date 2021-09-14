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
conta1.cliente = cliente1
conta1.deposita(500)


const conta2 = new ContaCorrente()
conta2.agencia = 1002
conta2.cliente = cliente2


conta1.tranferir(200, conta2)
console.log(conta2)
console.log(conta1)


