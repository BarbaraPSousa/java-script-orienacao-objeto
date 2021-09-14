//importe das class
import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'


const cliente1 = new Cliente("Henrique", 555963879) 
const cliente2 = new Cliente("Paulo", 305987621) 

const conta1 = new ContaCorrente(1001, cliente1) // instanciando com asociação de cliente e contrutor
conta1.deposita(900)

const conta2 = new ContaCorrente(1002,cliente2)
let valor = 200;
conta1.tranferir(valor, conta2)

console.log(conta2)
//console.log(conta2.saldo) //650


