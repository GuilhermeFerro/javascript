var global = [1, 3, 6, 9, 16]
var somatoria = 0
for(var c = 0 ; c <= global.length ; c++) {
  somatoria += global[c]
}
console.log(somatoria)




var globalRes = []

function adicionar() {
  var numero = window.document.getElementById('num')
  var numeroTratado = Number(numero.value)
  var sel = window.document.getElementById('tab')
  var res = window.document.getElementById('res')

  if (numeroTratado > 100 || numeroTratado === '') {
    return window.alert('Parametros incorretos')
  }
    var item = window.document.createElement('option')
    item.text = `Valor ${numeroTratado} adicionado.`
    sel.appendChild(item)
    globalRes.push(numeroTratado)
  }

function finalizar() {
  var somatoria = 0
  for(var c = 0 ; c < globalRes.length ; c++) {
    somatoria += globalRes[c]
  }
  var saida = window.document.getElementById('finalizou')
  var res = globalRes.sort()
  saida.innerHTML = ''
  saida.innerHTML += `Ao todo, temos ${res.length} números cadastrados!<br>`
  saida.innerHTML += `O maior valor informado foi ${res.pop()}.<br>`
  saida.innerHTML += `O menor valor informado foi ${res.shift()}. <br>`
  saida.innerHTML += `A somatoria dos valores é de ${somatoria}`
}
