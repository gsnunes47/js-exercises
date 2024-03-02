let botao = document.querySelectorAll("button")
let resultado = document.querySelector(".result_text")
let string = ''
let lista = []
let first_number
let second_number
let operation


for(let c = 1; c <= 17; c++){
    botao[c].addEventListener("click", function(){
        let number = botao[c].innerText
        if (number == 0){
            if(lista[0] >= 1){
                lista.push(number)
                resultado.innerHTML += `${number}`
            }
            else{
                alert('O primeiro número não pode ser 0!')
            }
        }

        else if (number == '+' || number == '-' || number == '*' || number == '/' || number == '√' || number == '%'){
                first_number = resultado.innerText
                operation = number
                resultado.innerHTML = ''
        }

        else {
            lista.push(number)
            resultado.innerHTML += `${number}`
        }

    })
}

botao[0].addEventListener("click", function(){
    resultado.innerHTML = ''
    first_number = 0
    second_number = 0
    operation = ''
})

botao[18].addEventListener("click", function(){
    second_number = resultado.innerText
    if (operation == '+'){
        resultado.innerHTML = `${first_number} + ${second_number} = ${parseInt(first_number) + parseInt(second_number)}`
    }
    else if (operation == '-'){
        resultado.innerHTML = `${first_number} - ${second_number} = ${parseInt(first_number - second_number)}`
    }
    else if (operation == '*'){
        resultado.innerHTML = `${first_number} * ${second_number} = ${parseInt(first_number * second_number)}`
    }
    else if (operation == '/'){
        resultado.innerHTML = `${first_number} / ${second_number} = ${parseInt(first_number / second_number)}`
    }
})
