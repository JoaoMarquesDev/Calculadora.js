let display = document.getElementById('display')

function inserir(num) {
    let valor = Number(num).toLocaleString('pt-BR')
    result = display.innerHTML += valor.toLocaleString('pt-BR')
    let n = display.innerHTML.split('')
        if(n.length > 3) {
            result = display.innerHTML += n.splice(1,0,'.')
        }
    console.log(n)
}

function soma() {
    let soma = document.getElementById('operador-soma')
    teste = display.innerHTML = `${result}${soma.innerHTML}`
}

function subtrair() {
    let subtrair = document.getElementById('operador-subtrair')
    teste = display.innerHTML = `${result}${subtrair.innerHTML}`
}

function multiplicar() {
    let multi = document.getElementById('operador-multiplicar')
    teste = display.innerHTML = `${result}${multi.innerHTML}`
}

function dividir() {
    let dividir = document.getElementById('operador-dividir')
    teste = display.innerHTML = `${result}${dividir.innerHTML}`
}

function reset() {
    display.innerHTML = ''  
}

function del() {
    var valor = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = valor.substring(0, valor.length - 1)
}

function virgula() {
    display.innerHTML += '.'
}

function resultado() {
    display.innerText = eval(result)
}

