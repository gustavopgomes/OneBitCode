
function novaVaga(){
    let nomeVaga = prompt("Qual o nome da vaga")
    let descricao = prompt("Deixe uma descrição para a vaga")
    let data = prompt("Data limite")

    confirm("Esta vaga esta correta?")
    if(confirm){
        vagas.push(novaVaga)
    } else {
        alert("Voltando ao menu")
    }
}

function visualizarVaga(){
    let indice = prompt("Qual o indice da vaga?")


}

let vagas = []

let candidatos = []

let menu = ''
do {
    let menu = prompt("Bem vindo a vagas de emprego!\n\n" +  "1) Listar vagas disponiveis\n" + "2) Criar nova vaga\n" + "3) Visualizar uma vaga\n" + "4) Inscrever um candidato em uma vaga\n" + "5) Excluir uma vaga\n" + "6) Sair")

    switch (menu) {
        case "1":
            
            break;
        case "2":
            novaVaga()
            break
        case "3":

            break
        case "4":

            break
        case "5":

            break
        case "6":
            alert("Saindo do programa, Obrigado!")
            break
        default:
            alert("Opção invalida")
            break;
    }
} while (menu !== "6");