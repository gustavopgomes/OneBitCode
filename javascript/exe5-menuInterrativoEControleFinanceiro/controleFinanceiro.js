
let options = ""

let saldo = parseFloat(prompt("Quanto de dinheiro voce possui?"))
do{
    

    let options = prompt("Cache disponivel: " + saldo +
            "\n1) Adicionar mais dinheiro.\n" +
            "2) Retirar dinheiro.\n" +
            "3)Sair da operação.")
            
    switch(options){
        case "1":
            saldo += parseFloat(prompt("Quanto deseja adicionar:"))
            break
        case "2":
            saldo -= parseFloat(prompt("Quanto deseja retirar:"))
            break
        case "3":
            alert("Saindo.")
    }
} while (options !=="3")