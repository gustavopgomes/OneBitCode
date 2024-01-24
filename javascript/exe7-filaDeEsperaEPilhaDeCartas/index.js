let filaDeEspera = []
let menu = ""

do {
let menu = prompt("FIla de Pacientes:\n" + filaDeEspera + "\n" + "1) Novo paciente\n" + "2) Consultar paciente\n" + "3) Sair")

    switch (menu) {
        case "1":
            let newPaciente = prompt("Qual o nome do paciente?")
            filaDeEspera.push(newPaciente)
            
            break;
        case "2":
            let pacienteConsultado = filaDeEspera.shift()
            alert("Paciente " + pacienteConsultado + " consultado.")
            break
        case "3":
            alert("Saindo.")
            break
        default:
            alert("Opção invalida")
            break;
    }
} while (menu !== "3")