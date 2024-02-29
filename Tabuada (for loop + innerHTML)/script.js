let num = 5
let res = document.querySelector('.res')


for(let c = 1; c <= 10; c++){
    res.innerHTML += `<h2>${num} x ${c} = ${num * c}<br><br></h2>`
}
