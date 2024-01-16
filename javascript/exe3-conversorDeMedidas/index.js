let valorMetros = parseFloat(prompt("Digite um valor em metros:"))

let opcoes = parseFloat(prompt("Para qual valor de medidas deseja converter:\n" +
"1) milimetro (mm)\n" +
"2) centimetro (cm)\n" +
"3) decímetro (dm)\n" +
"4) decametro (dam)\n" +
"5) hectometro (hm)\n" +
"6) quilometro (km)"))

switch (opcoes) {
    case 1:
        let result1 = valorMetros * 1000
        alert("Convertendo " + valorMetros + " metros, temos " + result1 + " milimetros.")
        break;
    case 2:
        let result2 = valorMetros * 100
        alert("Convertendo " + valorMetros + " metros, temos " + result2 + " centimetros.")
        break;
    case 3:
        let result3 = valorMetros * 10
        alert("Convertendo " + valorMetros + " metros, temos " + result3 + " decimetros.")
        break;
    case 4:
        let result4 = valorMetros * 1000
        alert("Convertendo " + valorMetros + " metros, temos " + result4 + " milimetros.")
        break;
    case 5:
        let result5 = valorMetros * 1000
        alert("Convertendo " + valorMetros + " metros, temos " + result5 + " milimetros.")
        break;
    case 6:
        let result6 = valorMetros * 1000
        alert("Convertendo " + valorMetros + " metros, temos " + result6 + " milimetros.")
        break;
    default:
        break;
}