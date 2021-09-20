//class cliente
export class Cliente {
  //Contrutor q inicializa os metodos
  constructor(nome, cpf, senha) {
    this.nome = nome
    this._cpf = cpf
    this._senha = senha
  }

  //Get (só get sem set pois não vai te alteração)
  get cpf() {
    return this._cpf
  }

  autenticar(){
    return true;
  }
}
