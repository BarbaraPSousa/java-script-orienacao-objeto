//importe das class
import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupaca } from './ContaPoupaca.js'

const cliente1 = new Cliente('Henrique', 555963879)

const contaCorrente = new ContaCorrente(0, cliente1, 1001)
contaCorrente.deposita(500)
contaCorrente.sacar(100)

const contaPoupaca = new ContaPoupaca(50, cliente1, 1001)

console.log(contaCorrente)
console.log(contaPoupaca);