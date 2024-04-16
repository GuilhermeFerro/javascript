function adicionar() {
  var numero = window.document.getElementById('num')
  var numeroTratado = Number(numero.value)
  var sel = window.document.getElementById('tab')
  var res = window.document.getElementById('res')

  if (numeroTratado > 100 || numeroTratado == '') {
    return window.alert('Parametros incorretos')
  } else {
    var item = window.document.createElement('option')
    item.text = `Valor ${numeroTratado} adicionado.`
    sel.appendChild(item)
    numero.innerHTML = ''
  }
}