function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.querySelector('div#res')
  if (fano.value == 0 || fano.value > ano) { //verificando se o ano digitado é valido
    window.alert('Verifique os dados e tente novamente!')
  } else {
    var fsex = window.document.getElementsByName('radsex') //variavel para pegar o sexo (tem que ser getelementbyname pois o id deles é diferente)
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = window.document.createElement('img') // cria um elemento imagem pelo javascript
    img.setAttribute('id', 'foto') //define o id foto ao atributo img
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 18) {
        //Crianca
        img.setAttribute('src', 'crianca-homem.jpg') // seleciona o arquivo igual o src da tag img
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'adulto-homem.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'idoso-homem.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 18) {
        //Crianca
        img.setAttribute('src', 'crianca-mulher.jpg')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'adulto-mulher.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'idoso-mulher.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img) //appendChild para colocar um conteudo na linha de baixo do innerHTML
  }
}