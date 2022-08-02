let displayResult = document.querySelector('#cal-input')

let calculate = (number) => {
    displayResult.value+=number
}

let result = () => {
    try {
        displayResult.value = eval(displayResult.value)
    } catch {
        alert('Please enter a correct value')
    }
}

let clearValue = () => {
    displayResult.value = ""
    console.log('click')
}

let del = () => {
    displayResult.value = displayResult.value.slice(0, -1)
}

