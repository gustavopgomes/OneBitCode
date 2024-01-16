let personagem1 = prompt("Qual o nome do primeiro personagem?")
let poderAtackPersonagem1 = parseFloat(prompt("Qual o poder de ataque do personagem " + personagem1))
let personagem2 = prompt("Qual o nome do segundo personagem?")

let pontosVidaPersonagem2 = parseFloat(prompt("Quantos pontos de vida o personagem " + personagem2 + " possui:"))
let poderDefesa = parseFloat(prompt("Qual o poder de defesa do personagem " + personagem2))
let escudo = parseFloat(prompt("Se o segundo personagem possui escudo digite 1, se não possui digite 2"))

if (poderAtackPersonagem1 > poderDefesa && escudo === 2){
    let danoCausado = poderDefesa - poderAtackPersonagem1
    alert("Recebeu " + danoCausado + " de dano causado")
} else if(poderAtackPersonagem1 > poderDefesa && escudo === 1){
    let danoCausado = (poderDefesa - poderAtackPersonagem1) / 2
    alert("Recebeu " + danoCausado + " de dano causado")
} else  if (poderAtackPersonagem1 <= poderDefesa){
    alert("Dano caudado: 0")
}