function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id,value,name,type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click' , function(ev){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    newRow.id = 'inputRow' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    const expLabel = createLabel('Experiencia: ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos',id1)
    const id2 = 'wxpRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id1, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos',id2)
    const id3 = 'wxpRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id1, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos',id3)

    newRow.append(
        techNameLabel, techNameInput,expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3
    )

    stackInputs.appendChild(newRow)
})