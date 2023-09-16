class Atividade {
    constructor(nome, duracao, data, prioridade) {
        this.nome = nome;
        this.duracao = duracao;
        this.data = data;
        this.prioridade = prioridade; // Nível de prioridade (por exemplo, alta, média, baixa)
        this.concluida = false; // Indica se a atividade foi concluída
    }

    static adicionarAtividadeAoGerenciador(atividade, gerenciador) {
        gerenciador.adicionarAtividade(atividade);
    }
    // Método para marcar a atividade como concluída
    marcarComoConcluida() {
        this.concluida = true;
    }
    // Método para atualizar informações da atividade
    atualizarInformacoes(nome, duracao, data, prioridade) {
        this.nome = nome;
        this.duracao = duracao;
        this.data = data;
        this.prioridade = prioridade;
    }
}

module.exports = Atividade;