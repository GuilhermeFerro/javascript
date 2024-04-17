var globalRes = []

function adicionar() {
  var numero = window.document.getElementById('num')
  var numeroTratado = Number(numero.value)
  var sel = window.document.getElementById('tab')
  var saida = window.document.getElementById('finalizou')
  saida.innerHTML = ''

  if (numeroTratado > 100 || numero.value === '') {
    return window.alert('Parâmetros incorretos')
  }

  var item = window.document.createElement('option')
  item.text = `Valor ${numeroTratado} adicionado.`
  sel.appendChild(item)
  globalRes.push(numeroTratado)
  numero.value = ''
  numero.focus()
}

function finalizar() {
  var somatoria = 0
  console.log('var', globalRes, globalRes.length)
  for (var c = 0; c < globalRes.length; c++) {
    somatoria += globalRes[c]
    console.log(somatoria, globalRes[c])
  }
  var media = somatoria / globalRes.length
  var saida = window.document.getElementById('finalizou')
  var res = [...globalRes] // Make a copy to avoid modifying the original array
  var max = Math.max(...res)
  var min = Math.min(...res)
  saida.innerHTML = ''
  saida.innerHTML += `Ao todo, temos ${res.length} números cadastrados!<br>`
  saida.innerHTML += `O maior valor informado foi ${max}.<br>`
  saida.innerHTML += `O menor valor informado foi ${min}.<br>`
  saida.innerHTML += `A soma dos valores é ${somatoria}. <br>`
  saida.innerHTML += `A media dos valores é de ${media}`
}


