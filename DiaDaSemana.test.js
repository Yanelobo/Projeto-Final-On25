const DiaDaSemana = require('./DiaDaSemana');

describe('Testes para a classe DiaDaSemana', () => {
  let diaDaSemana;

  beforeEach(() => {
    diaDaSemana = new DiaDaSemana();
  });

  it('Deve inicializar todos os dias como "livre"', () => {
    const statusInicial = {
      segunda: "livre",
      terca: "livre",
      quarta: "livre",
      quinta: "livre",
      sexta: "livre",
      sabado: "livre",
      domingo: "livre",
    };
    expect(diaDaSemana.status).toEqual(statusInicial);
  });

  it('Deve definir um dia como "livre"', () => {
    diaDaSemana.definirDiaLivre('segunda');
    expect(diaDaSemana.status.segunda).toBe('livre');
  });

  it('Deve definir um dia como "ocupado"', () => {
    diaDaSemana.definirDiaOcupado('terca');
    expect(diaDaSemana.status.terca).toBe('ocupado');
  });

  it('Deve definir vários dias como "ocupados"', () => {
    diaDaSemana.definirDiasOcupados(['quarta', 'quinta', 'sexta']);
    expect(diaDaSemana.status.quarta).toBe('ocupado');
    expect(diaDaSemana.status.quinta).toBe('ocupado');
    expect(diaDaSemana.status.sexta).toBe('ocupado');
  });

  it('Deve retornar o status de um dia específico', () => {
    expect(diaDaSemana.getStatusDoDia('sabado')).toBe('livre');
    diaDaSemana.definirDiaOcupado('sabado');
    expect(diaDaSemana.getStatusDoDia('sabado')).toBe('ocupado');
  });

  it('Deve retornar uma lista de dias livres', () => {
    diaDaSemana.definirDiasOcupados(['quinta', 'sabado']);
    const diasLivres = diaDaSemana.getDiasLivres();
    expect(diasLivres).toEqual(['segunda', 'terca', 'quarta', 'sexta', 'domingo']);
  });

  it('Deve retornar uma lista de dias ocupados', () => {
    diaDaSemana.definirDiasOcupados(['terca', 'sabado', 'domingo']);
    const diasOcupados = diaDaSemana.getDiasOcupados();
    expect(diasOcupados).toEqual(['terca', 'sabado', 'domingo']);
  });

  it('Deve lidar com dias inválidos ao definir status', () => {
    diaDaSemana.definirDiaLivre('feriado');
    expect(diaDaSemana.getStatusDoDia('feriado')).toBe('Dia inválido');
    diaDaSemana.definirDiaOcupado('feriado');
    expect(diaDaSemana.getStatusDoDia('feriado')).toBe('Dia inválido');
    diaDaSemana.definirDiasOcupados(['segunda', 'feriado']);
    expect(diaDaSemana.getStatusDoDia('feriado')).toBe('Dia inválido');
  });
});
