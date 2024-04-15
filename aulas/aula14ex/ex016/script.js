function contar() {
  var inicio = window.document.getElementById('inicio')
  var inicioValorTratado = Number(inicio.value)
  var fim = window.document.getElementById('fim')
  var fimValorTratado = Number(fim.value)
  var passo = window.document.getElementById('passo')
  var passoValorTratado = Number(passo.value)
  var saida = window.document.getElementById('saida')
  var res = inicioValorTratado

  if (inicioValorTratado == '') {
    return window.alert('Preencha um numero de inicio!')
  }

  if (passoValorTratado == 0) {
    passoValorTratado = 1
    return window.alert('Não é possível usar passo 0, mudando automaticamente para 1')
  }
  
  // while (res <= fimValorTratado) {
  //   saida.innerHTML += `👉 ${res}`
  //   res += passoValorTratado 

  //   if (res > fimValorTratado) {
  //     saida.innerHTML += `💪`
  //   }
  // }
  
  for (inicioValorTratado ; res <= fimValorTratado; res += passoValorTratado) {
    saida.innerHTML += `${res}👉 `
  }
  

  // saida.innerHTML = `O valor de inicio é ${inicio.value}, valor de fim é ${fim.value} e o valor de passo é ${passo.value} e res é ${res}`
}