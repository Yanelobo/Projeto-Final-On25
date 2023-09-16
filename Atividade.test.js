const Atividade = require('./Atividade');

describe('Testes para a classe Atividade', () => {
  let atividade;

  beforeEach(() => {
    atividade = new Atividade('Estudar', 120, 'Alta');
  });

  it('Deve criar uma instância de Atividade com os valores iniciais corretos', () => {
    expect(atividade.nome).toBe('Estudar');
    expect(atividade.duracao).toBe(120);
    expect(atividade.prioridade).toBe('Alta');
    expect(atividade.concluida).toBe(false);
  });

  it('Deve marcar a atividade como concluída', () => {
    atividade.marcarComoConcluida();
    expect(atividade.concluida).toBe(true);
  });

  it('Deve atualizar as informações da atividade corretamente', () => {
    atividade.atualizarInformacoes('Ler', 60, '2023-09-16', 'Média');
    expect(atividade.nome).toBe('Ler');
    expect(atividade.duracao).toBe(60);
    expect(atividade.data).toBe('2023-09-16');
    expect(atividade.prioridade).toBe('Média');
  });
});