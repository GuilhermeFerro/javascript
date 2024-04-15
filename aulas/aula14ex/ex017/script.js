function clicou() {
  var numero = window.document.getElementById('number')
  var numeroTratado = Number(numero.value)
  var saida = window.document.getElementById('saida')

  for(var multiplicador = 1 ; multiplicador <= 10 ; multiplicador++) {
    saida.innerHTML += `${numeroTratado} x ${multiplicador} = ` + (numeroTratado * multiplicador)
  }




  // saida.innerHTML = `O valor escolhido foi ${numeroTratado}`
}