let formCalculator = document.getElementById('formulir')
let operatorButtons = document.getElementById('operator-buttons')

const operators = [
    '+', '-', 'x', '/', '^'
]

for ( let operator of operators ) {
    operatorButtons.innerHTML += `
        <button type="button" class="button"
                value="${operator}" onclick="hitung(value)">${operator}</button>
    `
}

function hitung(operator) {
    let angka1Input = parseInt(formCalculator.a1.value)
    let angka2Input = parseInt(formCalculator.a2.value)
    let result

    if ( isNaN(angka1Input) || angka1Input === '' ) {
        alert('Angka ke-1 harus berupa angka dan tidak boleh kosong.')
    } else if ( isNaN(angka2Input) || angka2Input === '' ) {
        alert('Angka ke-2 harus berupa angka dan tidak boleh kosong.')
    } else {
        switch (operator) {
            case '+' :
                result = angka1Input + angka2Input
                break
            case '-' :
                result = angka1Input - angka2Input
                break
            case 'x' :
                result = angka1Input * angka2Input
                break
            case '/' :
                result = angka1Input / angka2Input
                break
            case '^' :
                result = Math.pow(angka1Input, angka2Input)
                break
            default :
                result = 0
                alert('Invalid operator.')
        }

        formCalculator.hasil.value = result
    }
}

function clearAngka1() {
    formCalculator.a1.value = ''
}

function clearAngka2() {
    formCalculator.a2.value = ''
}

function clearAllInput() {
    clearAngka1()
    clearAngka2()
    formCalculator.hasil.value = ''
}

