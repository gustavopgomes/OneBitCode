let palavra = prompt("Informe a palavra e veja se ela é um palíndromo")
let palavraInvertida = ""

for (let i = palavra.length -1; i >=0 ; i--) {
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palindromo")
} else {
    alert(palavra + " não é um palíndromo")
}