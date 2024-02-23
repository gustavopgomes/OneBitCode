let vagas = []

let candidatos = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal,vaga,indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos\n"
    }, "")
}

function novaVaga(){
    let nome = prompt("Qual o nome da vaga")
    let descricao = prompt("Deixe uma descrição para a vaga")
    let data = prompt("Data limite")

        function exibirVaga(){
            const indice = ("Informe o índice da vaga que deseja exibir")
            const vaga = vaga[indice]

            const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal,candidato){
                return textoFinal + "\n - " + candidato
            }, "")

            alert("Vaga n " + indice +
            "\nNome: " + vaga.nome +
            "\nDescrição: "+ vaga.descricao + 
            "\nData limite: " + vaga.data +
            "\nQuantidade de candidatos: " + vaga.candidatos.length +
            "\nCandidatos inscritos: " + candidatosEmTexto)
        }

    const confirmacao = confirm("Salvar está vaga?\n" + "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + data)
    
    if(confirmacao){
        const novaVaga = {nome,descricao,data,candidatos: []}
        novaVaga.push(novaVaga)
    } else {
        alert("Voltando ao menu")
    }
}

function visualizarVaga(){
    let indice = prompt("Qual o indice da vaga?")


}

let menu = ''
do {
    let menu = prompt("Bem vindo a vagas de emprego!\n\n" +  "1) Listar vagas disponiveis\n" + "2) Criar nova vaga\n" + "3) Visualizar uma vaga\n" + "4) Inscrever um candidato em uma vaga\n" + "5) Excluir uma vaga\n" + "6) Sair")

    switch (menu) {
        case "1":
            listarVagas()
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