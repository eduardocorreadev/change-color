const bgMain = document.getElementById('bg-main')
const customArea = document.getElementById('custom-color')

function backgroundColor(value) {
    bgMain.style.background = value
}

function changeColor(getColor) {
    let text = getColor.options[getColor.selectedIndex].text

    if (getColor.value != 'custom') {
        backgroundColor(getColor.value)
        bgMain.innerHTML = text
        customArea.style.display = 'none'
    } else {
        customArea.style.display = 'block'
        bgMain.innerHTML = '< Custom />'
    }
}

document.getElementById('create-color').addEventListener('click', event => {
    event.preventDefault()

    let selectColor = document.getElementById('select-color')
    let formCreate = document.getElementById('form-create')
    let nameColor = formCreate.nameColor
    let colorCode = formCreate.colorCode

    if (nameColor.value === '') {
        nameColor.value = 'Sem Nome'
    }

    let opt = document.createElement('option')

    opt.value = colorCode.value
    opt.text = nameColor.value
    selectColor.appendChild(opt)

})