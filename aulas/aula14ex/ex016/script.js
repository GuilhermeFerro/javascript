function contar() {
  var inicio = window.document.getElementById('inicio')
  var inicioValorTratado = Number(inicio.value)
  var fim = window.document.getElementById('fim')
  var fimValorTratado = Number(fim.value)
  var passo = window.document.getElementById('passo')
  var passoValorTratado = Number(passo.value)
  var saida = window.document.getElementById('saida')
  var res = inicioValorTratado

  if (inicioValorTratado == '' || fimValorTratado == ''|| passoValorTratado == '') {
    return window.alert('[erro]Preencha os dados corretamente')
  }

  
  // while (res <= fimValorTratado) {
  //   saida.innerHTML += `👉 ${res}`
  //   res += passoValorTratado 

  //   if (res > fimValorTratado) {
  //     saida.innerHTML += `💪`
  //   }
  // }
  saida.innerHTML = 'Contando... <br>'
  if (inicioValorTratado < fimValorTratado) {
    for (inicioValorTratado ; res <= fimValorTratado; res += passoValorTratado) {
      saida.innerHTML += ` ${res} 👉 `
    }
   } else {
      for (inicioValorTratado ; res >= fimValorTratado ; res -= passoValorTratado) {
        saida.innerHTML += ` ${res} 👉 `
      }
    }
    saida.innerHTML += `\u{1F3C1}`
  // saida.innerHTML = `O valor de inicio é ${inicio.value}, valor de fim é ${fim.value} e o valor de passo é ${passo.value} e res é ${res}`
}