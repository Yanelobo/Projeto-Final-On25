class Usuario {
    constructor(nome, idade, endereco, email) {
      this.nome = nome;
      this.idade = idade;
      this.endereco = endereco;
      this.email = email;
      this.ocupacao = [];
    }
  
    cadastrarOcupacao(ocupacao) {
      this.ocupacao.push(ocupacao);
    }
  }
  
  module.exports = Usuario;