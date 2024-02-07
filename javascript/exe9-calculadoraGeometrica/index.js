let menu;

function areaTriangulo(base,altura){
    return (base * altura) / 2
}

function areaRetangulo(base,altura){
    return base * altura
}

function areaQuadrado(lado){
    return lado * lado
}

function areaTrapezio(baseMaior,baseMenor,altura){
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(raio){
    return 3.14 * (raio * raio)
}

do {
    menu = prompt("Bem vindo a Calculadora geométrica.\n\n" + "escolha alguma opção de calculo:\n" + "1) área do triângulo\n" + "2) área do retângulo\n" + "3) área do quadrado\n" + "4) área do trapézio\n" + "5) área do circulo\n" + "6) Sair\n")

    switch (menu) {
        case "1":
            let baseTriangulo = prompt('informe a base do triangulo')
            let alturaTriangulo = prompt('agora a altura')
            let resultTriangulo = areaTriangulo(baseTriangulo,alturaTriangulo)
            alert('A area do Triangulo é ' + resultTriangulo)
            break;
        case "2":
            let baseRetangulo = prompt('informe a base do Retangulo')
            let alturaRetangulo = prompt('agora a altura')
            let resultRetangulo = areaTriangulo(baseRetangulo,alturaRetangulo)
            alert('A area do Retangulo é ' + resultRetangulo)
            break;
        case "3":
            let ladoQuadrado = prompt('informe o lado do quadrado')
            let resultQuadrado = areaTriangulo(ladoQuadrado)
            alert('A area do Quadrado é ' + resultQuadrado)
            break;
        case "4":
            let baseMaior = prompt('informe a base maior do trapézio')
            let baseMenor = prompt('agora a base menor')
            let altura = prompt("informe a altura")
            let resultTrapezio = areaTriangulo(baseMaior,baseMenor,altura)
            alert('A area do Trapézio é ' + resultTrapezio)
            break;
        case "5":
            let raio = prompt("Informe  o raio do circulo")
            let restultCirculo = areaCirculo(raio)
            alert("A área do Circulo é " + restultCirculo)
            break
        case "6":
            alert("Saindo.")
            break
        default:
            alert("Opção invalida")
            break;
    }
} while (menu !== "6");