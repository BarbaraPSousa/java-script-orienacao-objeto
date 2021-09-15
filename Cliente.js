//class cliente
export class Cliente {
  //Contrutor q inicializa os metodos
  constructor(nome, cpf) {
    this.nome = nome
    this._cpf = cpf
  }

  //Get (só get sem set pois não vai te alteração)
  get cpf() {
    return this._cpf
  }
}
