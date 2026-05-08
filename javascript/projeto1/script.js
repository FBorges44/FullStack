// valor das moedas
const USD = 5.01
const EUR = 6.01
const BTC = 100.000

const form = document.querySelector("form")
const valor = document.getElementById("valor")
const moeda = document.getElementById("moeda")


valor.addEventListener("input",() =>{
    const hasChacartersRegex = /\D+/g
    valor.value = valor.value.replace(hasChacartersRegex, "")
})

//captando evento no terminal do submit (enviar) do formulario
// porque eu crie essa estrutura aqui? porque aqui é o evento de submit, então crio a estrutura envio e o codigo abaixo só 
// captura e exibe esse valor no terminal
form.onsubmit =(event)=>{
    event.preventDefault()

    switch (moeda.value){
        case "USD":
            conversao(valor.value, USD,"s$")
            break
        case "EUR":
            conversao(valor.value, EUR,"EUR€")
            break
        case "BTC":
            conversao(valor.value, BTC,"BT₿")
            break
    }
}
// função de converter o valor da moeda
function conversao(preco,simbolo,valor){
    console.log(preco, simbolo, valor)
}