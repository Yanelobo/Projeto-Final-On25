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

    definirDiaLivre(dia) {
        if (this.status[dia]) {
            this.status[dia] = "livre";
        } else {
            console.log("Dia inválido!");
        }
    }

    definirDiaOcupado(dia) {
        if (this.status[dia]) {
            this.status[dia] = "ocupado";
        } else {
            console.log("Dia inválido!");
        }
    }

    definirDiasOcupados(dias) {
        dias.forEach((dia) => {
            if (this.status[dia]) {
                this.status[dia] = "ocupado";
            } else {
                console.log(`Dia '${dia}' inválido!`);
            }
        });
    }

    getStatusDoDia(dia) {
        return this.status[dia] || "Dia inválido";
    }
    getDiasLivres() {
        return Object.keys(this.status).filter((dia) => this.status[dia] === "livre");
    }

    getDiasOcupados() {
        return Object.keys(this.status).filter((dia) => this.status[dia] === "ocupado");
    }
}

module.exports = DiaDaSemana;