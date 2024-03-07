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

        if (lista.length == 0 && first_number){
            if (number == '+' || number == '-' || number == '*' || number == '/' || number == '√' || number == '%'){               
                operation = number
                resultado.innerHTML = ''
                lista.push(number)
                console.log('entrei aqui')
            }
            else{
                resultado.innerHTML = ''
                first_number = 0
                second_number = 0
                truncateList(lista)
                operation = ''
            }
        }
        
        if (number == 0){
            if(lista.length == 0){
                resultado.innerHTML += number
                lista.push(number)
            }
            else if (lista[0] != 0){
                resultado.innerHTML += number
            }
        }
        
        else if (number == '.'){
            if (inList(lista, '.') == false){
                resultado.innerHTML += number
                lista.push(number)
            }
        }
        
        else if (number == '+' || number == '-' || number == '*' || number == '/' || number == '√' || number == '%'){
            if (first_number == undefined){
                first_number = resultado.innerText
                console.log('entrei lá')
            }
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
    lista = []
    operation = ''
})

botao[18].addEventListener("click", function(){
    second_number = resultado.innerText
    if (operation == '+'){
        resultado.innerHTML = `${first_number} + ${second_number} = ${parseFloat(first_number) + parseFloat(second_number)}`
        first_number = parseFloat(first_number) + parseFloat(second_number)
    }
    else if (operation == '-'){
        resultado.innerHTML = `${first_number} - ${second_number} = ${parseFloat(first_number - second_number)}`
        first_number = parseFloat(first_number) - parseFloat(second_number)
    }
    else if (operation == '*'){
        resultado.innerHTML = `${first_number} * ${second_number} = ${parseFloat(first_number * second_number)}`
        first_number = parseFloat(first_number) * parseFloat(second_number)
    }
    else if (operation == '/'){
        resultado.innerHTML = `${first_number} / ${second_number} = ${parseFloat(first_number / second_number)}`
        first_number = parseFloat(first_number) / parseFloat(second_number)
    }
    second_number = 0
    truncateList(lista)
})

function inList(list, obj){
    let ver
    for(let c = 0; c <= list.length; c++){
        if(list[c] == obj){
            ver = true
            break
        }
        else{
            ver = false
        }
    }
    return ver
}

function truncateList(list){
    for(let c = 0; c<= list.length; c++){
        list.pop()
    }
}