function creatLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function creatInput(id,value,name,type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.typw = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('cick' , function(ev){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows.id = 'inputRow' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = creatLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = creatInput('techName-' + rowIndex, null, 'techName')

    newRow.append(
        techNameLabel, techNameInput
    )

    stackInputs.appendChild(newRow)
})