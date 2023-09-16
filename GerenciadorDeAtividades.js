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
    
}

module.exports = GerenciadorDeAtividades;