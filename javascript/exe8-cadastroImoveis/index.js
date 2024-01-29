let imoveis = []
let menu = ""

do {
    let menu = prompt("Ìmoveis cadastrados: " + imoveis.length + "\n\n" + "1) Salvar um ímovel\n" + "2) mostar imoveis\n" + "3) Sair")

    switch (menu) {
        case "1":
            let imovel = {}

            imovel.proprietario = prompt("Qual o nome do proprietario?")
            imovel.quartos = prompt("Qual a quantidade de quartos da casa?")
            imovel.banheiros = prompt("Qual a quantidade de banheiros?")
            imovel.garagem = prompt("Possui garagem?")

            const confirm = confirm("Salvar este imovel?\n" + "Proprietario: " + imovel.proprietario + "\nQuartos: " + imovel.quartos + "\nBanheiros: " + imovel.banheiros + "\nPossui garagem: " + imovel.garagem)

            if (confirm){
                imoveis.push(imovel)
            }
            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert("Imovel " (i+1) + "\nProprietario: " + imoveis[i].proprietario + "\nQuartos: " + imovel[i].quartos + "\nBanheiros: " + imovel[i].banheiros + "\nPossui garagem: " + imovel[i].garagem)
            }
            break
        case "3":
        alert("Saindo")
            break
        default:
            alert("Invalido.")
            break;
    }
} while (menu !== "3")