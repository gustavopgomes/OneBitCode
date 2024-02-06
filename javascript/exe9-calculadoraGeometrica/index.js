let menu;

function areaTriangulo(base,altura){
    return (base * altura) / 2
}

function areaRetangulo(base,altura){
    return base * altura
}

function areaQuadrado(){
    return lado * lado
}

do {
    menu = prompt("Bem vindo a Calculadora geométrica.\n\n" + "escolha alguma opção de calculo:\n" + "1) área do triângulo\n" + "2) área do retângulo\n" + "3) área do quadrado\n" + "4) área do trapézio\n" + "5) área do circulo\n" + "6) Sair\n")

    switch (menu) {
        case "1":
            let base = prompt('informe a base do triangulo')
            let altura = prompt('agora a altura')

            let result = areaTriangulo(base,altura)

            alert('a area do triangulo é' + result)
            break;
    
        default:
            break;
    }
} while (menu !== "6");