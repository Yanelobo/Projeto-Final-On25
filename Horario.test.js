const Horario = require('./Horario');

describe('Testes para a classe Horario', () => {
  let horario;

  beforeEach(() => {
    horario = new Horario();
  });

  it('Deve inicializar todos os horários como "livre"', () => {
    expect(horario.horarios.length).toBe(24);
    expect(horario.horarios.every(h => h.status === 'livre')).toBe(true);
  });

  it('Deve definir um horário como "livre"', () => {
    horario.definirHorarioLivre(8);
    expect(horario.getStatusDoHorario(8)).toBe('livre');
  });

  it('Deve definir um horário como "ocupado"', () => {
    horario.definirHorarioOcupado(14);
    expect(horario.getStatusDoHorario(14)).toBe('ocupado');
  });

  it('Deve retornar o status de um horário específico', () => {
    expect(horario.getStatusDoHorario(3)).toBe('livre');
    horario.definirHorarioOcupado(3);
    expect(horario.getStatusDoHorario(3)).toBe('ocupado');
  });

  it('Deve adicionar um horário livre', () => {
    horario.adicionarHorario(17);
    expect(horario.getStatusDoHorario(17)).toBe('livre');
  });

  it('Deve lidar com horários inválidos ao definir status', () => {
    horario.definirHorarioLivre(30);
    expect(horario.getStatusDoHorario(30)).toBe('Horário inválido');
    horario.definirHorarioOcupado(-1);
    expect(horario.getStatusDoHorario(-1)).toBe('Horário inválido');
  });

  it('Deve listar os horários livres corretamente', () => {
    horario.definirHorarioOcupado(10);
    horario.definirHorarioOcupado(12);
    const horariosLivres = horario.listarHorariosLivres();
    expect(horariosLivres).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
  });
});
