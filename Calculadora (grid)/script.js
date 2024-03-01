let botao = document.querySelectorAll("button")
let resultado = document.querySelector(".result")
let string = ''
let lista = []


for(let c = 1; c <= 18; c++){
    botao[c].addEventListener("click", function(){
        let number = botao[c].innerText
        if (number in [1,2,3,4,5,6,7,8,9]){
            resultado.innerHTML += `${number}`
            lista.push(number)
        }
        else if #operação ou zero{

        }
    })
}

// let teste = 1
// if(teste in [1,2,3]){
//     console.log('true')
// }
// else{
//     console.log('false')
// }