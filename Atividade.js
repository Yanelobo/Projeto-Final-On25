class Atividade {
    constructor(nome, duracao, prioridade) {
        this.nome = nome;
        this.duracao = duracao;
        this.prioridade = prioridade;
        this.concluida = false; 
    }
    static adicionarAtividadeAoGerenciador(atividade, gerenciador) {
        gerenciador.adicionarAtividade(atividade);
    }
    marcarComoConcluida() {
        this.concluida = true;
    }
    atualizarInformacoes(nome, duracao, data, prioridade) {
        this.nome = nome;
        this.duracao = duracao;
        this.data = data;
        this.prioridade = prioridade;
    }
}
module.exports = Atividade;