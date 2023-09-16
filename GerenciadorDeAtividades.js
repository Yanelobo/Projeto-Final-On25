class GerenciadorDeAtividades {
    constructor() {
        this.atividades = [];
    }

    adicionarAtividade(atividade) {
        this.atividades.push(atividade);
    }

    listarAtividades() {
        return this.atividades;
    }

    // Outros métodos para filtrar, atualizar, excluir atividades, etc.
}

module.exports = GerenciadorDeAtividades;