function addPlayer(){
    const listPlayer = document.getElementById('escalPlayer')

    const h3 = document.createElement('h3')
    h3.innerText = "Perfil do jogador:"

    const ul = document.createElement('ul')

    const positionLi = document.createElement('li')
    positionLi.innerText = "Posição:"
    const positionInput = document.createElement('input')
    positionInput.type = 'text'
    positionInput.name = 'fullname'
    positionLi.appendChild(positionInput)
    ul.appendChild(positionLi)

    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome:"
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    const numberLi = document.createElement('li')
    numberLi.innerText = "Camisa:"
    const numberInput = document.createElement('input')
    numberInput.type = 'number'
    numberInput.name = 'fullname'
    numberLi.appendChild(numberInput)
    ul.appendChild(numberLi)

    const btnPlayer = document.createElement('button')
    btnPlayer.innerText = "Escalar"
    ul.appendChild(btnPlayer)
    btnPlayer.addEventListener("click")
    if(btnPlayer){
        let confirmation = confirm("deseja escalar esse jogador?")
    }

    listPlayer.append(h3,ul)
}