//importe das class
import { Cliente } from './Cliente.js'
import {Diretor} from "./Funcionario/Diretor.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"



const diretor = new Diretor("Barbara", 1000, 39519322855)
diretor.cadastraSenha("14593")

const gerente = new Gerente("Estefania", 5000, 98584361754)
gerente.cadastraSenha("123")

const cliente = new Cliente("Pamela", 18383392602,"5812")


const diretorEstaLogado = SistemaAutenticacao.login(diretor, "14593")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1456")

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "5812")


console.log(gerenteEstaLogado, diretorEstaLogado);
console.log(clienteEstaLogado)
