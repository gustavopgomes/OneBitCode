let veicle1 = prompt("Qual o nome do primeiro veiculo?")
let velo1 = parseFloat(prompt("E qual a velocidade do primeiro veiculo?"))

let veicle2 = prompt("Qual o nome do segundo veiculo?")
let velo2 = parseFloat(prompt("E qual a velocidade do segundo veiculo?"))

if (velo1 > velo2){
    alert("O veiculo de " + veicle1 + " é o mais rapido")
} else if (velo1 < velo2){
    alert("O veiculo de " + veicle2 + " é mais rapido")
} else {
    alert("Os veiculos tem velocidade iguais")
}