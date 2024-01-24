let filaDeEspera = []
let menu = ""

do {
let menu = prompt("Cartas do Baralho:\n" + filaDeEspera + "\n" + "1) Adicionar uma carta\n" + "2) Puxar uma carta\n" + "3) Sair")

    switch (menu) {
        case "1":
            let newPaciente = prompt("Qual o nome da carta?")
            filaDeEspera.unshift(newPaciente)
            
            break;
        case "2":
            let pacienteConsultado = filaDeEspera.shift()
            alert("Carta " + pacienteConsultado + " puxada")
            break
        case "3":
            alert("Saindo.")
            break
        default:
            alert("Opção invalida")
            break;
    }
} while (menu !== "3")