let name = prompt("Qual o seu nome?")
let quantidadesCidades = ""
let cidades = 0

let cidade = prompt("Já visitou alguma cidade?")
while (cidade == "sim") {
        let nomeCidades = prompt("Qual o nome da cidade?")
        quantidadesCidades += "\n" + nomeCidades
        cidades++
        let cidade = prompt("Visitou alguma outra cidade?")
    if (cidade === "nao"){
        alert(
            "Nome: " + name + 
            "\nCidades visitadas: " + quantidadesCidades +
            "\nQuantidade de cidades: " + cidades
            
        )
            break
    }
}

