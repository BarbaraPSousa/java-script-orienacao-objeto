//importe das class
import { Cliente } from './Cliente.js'

import { ContaCorrente } from './Conta/ContaCorrente.js'
import { ContaPoupaca } from './Conta/ContaPoupaca.js'
import { ContaSalario } from './Conta/ContaSalario.js'

const cliente1 = new Cliente('Henrique', 555963879)

const contaCorrente = new ContaCorrente(0, cliente1, 1001)

const contaPoupaca = new ContaPoupaca(50, cliente1, 1001)

const contaSalario = new ContaSalario(cliente1)
contaSalario.deposita(150)
contaSalario.sacar(10)

console.log(contaSalario)
