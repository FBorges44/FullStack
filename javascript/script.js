/* testes de codigo antigo
const retornar = document.getElementsByClassName("input")
console.log(retornar)

const jv =document.querySelector("#jv")
console.log(jv.textContent)
*/

/* Testes pegando atributos
const input = document.querySelector("input")
input.setAttribute("disabled", true)

const button = document.getElementsByClassName("botao-envio")
button.setAttribute("type", File) */

// testes de eventos
/*window.addEventListener("click", (eventos)=>{
    console.log(eventos)
})

const ul = document.querySelector("ul")

ul.addEventListener("scroll", (scrolar)=>{
    console.log(scrolar.target)

})
    */
/*
const form = document.querySelector("form")

form.onsubmit =(event)=>{
    event.preventDefault()
    console.log("Voce esta submetendo algo")
}
*/


/*
// KEydown teste
const input = document.querySelector("input")

input.addEventListener("keydown", (event)=>{
    console.log(event)
})
    */

const addElementos = document.querySelector("button")
const input = document.getElementById('value')
const novoNome=input.value

const novaDiv = document.createElement("div")

novaDiv.textContent= novoNome

// acessando a lista
const list = document.getElementById("lista")
const a