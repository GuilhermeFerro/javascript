function clicou() {
  var numero = window.document.getElementById('number')
  var tab = window.document.getElementById('seltab')
  if (numero.value.length == 0) {
    window.alert('Por favor, digite um numero!')
  } else {
      var numeroTratado = Number(numero.value)
      tab.innerHTML = ''
      for(var c = 1; c <= 10; c++) {
        var item = window.document.createElement('option')
        item.text = `${numeroTratado} x ${c} = ${numeroTratado*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
      }
  }
  // saida.innerHTML = `O valor escolhido foi ${numeroTratado}`
}