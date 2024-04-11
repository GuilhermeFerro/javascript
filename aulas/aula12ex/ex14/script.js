function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var hora1 = new Date()
  var hora = hora1.getHours()
  var hora = 11
  msg.innerHTML = `Agora são ${hora} horas!`
  if (hora >= 0 && hora < 12) {
    img.src = 'imagem-manha.jpg'
    window.document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'imagem-tarde.jpg'
    window.document.body.style.background = '#b9846f'
  } else {
    img.src = 'imagem-noite.jpg'
    window.document.body.style.background = '#515154'
  }
}
