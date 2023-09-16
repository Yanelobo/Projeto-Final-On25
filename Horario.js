class Horario {
    constructor() {
        this.horarios = Array
            .from({ length: 24 }, (_, i) => ({ hora: i, status: "livre" }));
    }

    definirHorarioLivre(hora) {
        const horario = this.horarios.find((h) => h.hora === hora);
        if (horario) {
            horario.status = "livre";
        } else {
            console.log("Horário inválido!");
        }
    }

    definirHorarioOcupado(hora) {
        const horario = this.horarios.find((h) => h.hora === hora);
        if (horario) {
            horario.status = "ocupado";
        } else {
            console.log("Horário inválido!");
        }
    }

    getStatusDoHorario(hora) {
        const horario = this.horarios.find((h) => h.hora === hora);
        return horario ? horario.status : "Horário inválido";
    }

    adicionarHorario(hora) {
        if (hora >= 0 && hora < 24) {
            this.horarios.push({ hora, status: "livre" });
        } else {
            console.log("Horário inválido! Deve estar entre 0 e 23.");
        }
    }

    listarHorariosLivres() {
        return this.horarios.filter((horario) => horario.status === "livre").map((horario) => horario.hora);
    }


}
module.exports = Horario;
