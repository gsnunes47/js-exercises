let botao = document.querySelectorAll("button")

for(let c = 1; c <= 18; c++){
    botao[c].addEventListener("click", function(){
        console.log(botao[c].innerText)
    })
}
