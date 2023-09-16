class DiaDaSemana {
    constructor() {
        this.status = {
            segunda: "livre",
            terca: "livre",
            quarta: "livre",
            quinta: "livre",
            sexta: "livre",
            sabado: "livre",
            domingo: "livre",
        };
    }

    // Define um dia como "livre"
    definirDiaLivre(dia) {
        if (this.status[dia]) {
            this.status[dia] = "livre";
        } else {
            console.log("Dia inválido!");
        }
    }

    // Define um dia como "ocupado"
    definirDiaOcupado(dia) {
        if (this.status[dia]) {
            this.status[dia] = "ocupado";
        } else {
            console.log("Dia inválido!");
        }
    }

    // Obtém o status de um dia específico
    getStatusDoDia(dia) {
        return this.status[dia] || "Dia inválido";
    }

    // Obtém todos os dias com o status "livre"
    getDiasLivres() {
        return Object.keys(this.status).filter((dia) => this.status[dia] === "livre");
    }

    // Obtém todos os dias com o status "ocupado"
    getDiasOcupados() {
        return Object.keys(this.status).filter((dia) => this.status[dia] === "ocupado");
    }
}

module.exports = GerenciadorDeAtividades;