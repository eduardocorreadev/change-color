var bgMain = document.getElementById('bg-main')
var customArea = document.getElementById('custom-color')

function backgroundColor(value) {
    bgMain.style.background = value
}

function changeColor(getColor) {
    var text = getColor.options[getColor.selectedIndex].text

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

    var selectColor = document.getElementById('select-color')
    var formCreate = document.getElementById('form-create')
    var nameColor = formCreate.nameColor
    var colorCode = formCreate.colorCode

    if (nameColor.value === '') {
        nameColor.value = 'Sem Nome'
    }

    var opt = document.createElement('option')

    opt.value = colorCode.value
    opt.text = nameColor.value
    selectColor.appendChild(opt)

})