let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let cargo = document.getElementById('cargo')
let salario = document.getElementById('salario')
alert('funcionou')

function salvar () {
    event.preventDefault()
    document.getElementById('fnome').innerHTML = nome.value
    document.getElementById('fidade').innerHTML = idade.value
    document.getElementById('fsalario').innerHTML = cargo.value
    document.getElementById('fcargo').innerHTML = salario.value



}