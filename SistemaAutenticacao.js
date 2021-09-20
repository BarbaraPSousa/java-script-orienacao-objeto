/*
Ser autenticavel seginifica ter a propriedade autenticaro
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) { // verificar se todos são autenticaveis
      return autenticavel.autenticar(senha)
    }
    return false
  }

  static ehAutenticavel(autenticavel){ // função que confirma 
    return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function

  }
}
