let number = parseFloat(prompt("Escolha um número de 1 a 20 para ver a tabuada"))

let result = ""

for (let index = 1; index <= 20; index++) {

    result += number + " * " + index + " = " + (number*index) + "\n"
    
}

alert("Resultado da operação:\n\n" + result)