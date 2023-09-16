const GerenciadorDeAtividades = require('./GerenciadorDeAtividades');
const Atividade = require('./Atividade'); // Suponha que você tenha uma classe Atividade para testar.

describe('Testes para a classe GerenciadorDeAtividades', () => {
  let gerenciador;

  beforeEach(() => {
    gerenciador = new GerenciadorDeAtividades();
  });

  it('Deve adicionar uma atividade ao gerenciador', () => {
    const atividade = new Atividade('Estudar', 120, 'Alta');
    gerenciador.adicionarAtividade(atividade);

    expect(gerenciador.listarAtividades()).toContain(atividade);
  });

  it('Deve listar as atividades no gerenciador', () => {
    const atividade1 = new Atividade('Estudar', 120, 'Alta');
    const atividade2 = new Atividade('Exercício', 60, 'Média');
    gerenciador.adicionarAtividade(atividade1);
    gerenciador.adicionarAtividade(atividade2);

    const atividades = gerenciador.listarAtividades();

    expect(atividades).toContain(atividade1);
    expect(atividades).toContain(atividade2);
  });

});
