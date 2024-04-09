function addPlayer() {
    const listPlayer = document.getElementById('escalPlayer');

    const h3 = document.createElement('h3');
    h3.innerText = "Perfil do jogador:";

    const ul = document.createElement('ul');

    const positionLi = document.createElement('li');
    positionLi.innerText = "Posição:";
    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.name = 'position'; // Alterado para 'position' para identificação correta
    positionLi.appendChild(positionInput);
    ul.appendChild(positionLi);

    const nameLi = document.createElement('li');
    nameLi.innerText = "Nome:";
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name'; // Alterado para 'name' para identificação correta
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);

    const numberLi = document.createElement('li');
    numberLi.innerText = "Camisa:";
    const numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.name = 'number'; // Alterado para 'number' para identificação correta
    numberLi.appendChild(numberInput);
    ul.appendChild(numberLi);

    const btnPlayer = document.createElement('button');
    btnPlayer.innerText = "Escalar";
    ul.appendChild(btnPlayer);
    btnPlayer.addEventListener("click", function() {
        let confirmation = confirm("Deseja escalar esse jogador?");3
        if (confirmation) {
            let lista = document.getElementById('listPlayers')
            const ul = document.createElement('ul');

            const nameLi = document.createElement('li');
            nameLi.innerText = nameInput.value
            ul.appendChild(nameLi)

            const position = document.createElement('li')
            position.innerText = positionInput.value
            ul.appendChild(position)

            const number = document.createElement('li')
            number.innerText = numberInput.value
            ul.appendChild(number)

            lista.append(ul)

            nameInput.value = ''
            positionInput.value = ''
            numberInput.value = ''
            alert("Jogador escalado!");
        } else {
            alert("Operação cancelada.");
        }
    });

    listPlayer.append(h3, ul);
}

function removePlayer(){
    const numberToRemove = Number(prompt('Qual o numero do jogador que deseja remover'))

    if (numberToRemove == listPlayer.numberInput.value) {
        alert('deuc certo')
    } else {
        
    }
}