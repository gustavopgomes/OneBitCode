let imoveis = []
let menu = ""

do {
    let menu = prompt("Ìmoveis cadastrados: " + imoveis.length + "\n\n" + "1) Salvar um ímovel\n" + "2) mostar imoveis\n" + "3) Sair")

    switch (menu) {
        case "1":
            let name = prompt("Qual o nome do proprietario?")
            let quartos = prompt("Qual a quantidade de quartos da casa?")
            let banheiros = prompt("Qual a quantidade de banheiros?")
            let garagem = prompt("Possui garagem?")

            name.push(imoveis)
            quartos.push(imoveis)
            banheiros.push(imoveis)
            garagem.push(imoveis)
            break;
        case "2":
        alert("Imoveis salvos:\n" + imoveis)
            break
        case "3":
        alert("Saindo")
            break
        default:
            break;
    }
} while (menu !== "3")