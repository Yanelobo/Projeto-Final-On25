const Atividade = require('./Atividade');
const GerenciadorDeAtividades = require('./GerenciadorDeAtividades'); // Certifique-se de criar a classe GerenciadorDeAtividades

const gerenciador = new GerenciadorDeAtividades();
const atividade1 = new Atividade("Estudar", 120, "2023-09-15", "Alta");

// Adicione a atividade ao gerenciador usando o método estático
Atividade.adicionarAtividadeAoGerenciador(atividade1, gerenciador);

console.log(gerenciador.listarAtividades());