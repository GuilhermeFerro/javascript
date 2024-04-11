var dia = new Date()
var diaSem = dia.getDay()

console.log(diaSem)

// Pelo new date as datas sao representadas por numeros, de 0 a 6.

switch (diaSem) {
  case 0:
    console.log(`Domingo!`)
    break
  case 1:
    console.log(`Segnda-feira!`)
    break
  case 2:
    console.log(`Terça-feira!`)
    break
  case 3:
    console.log(`Quarta-feira!`)
    break
  case 4:
    console.log(`Quinta-feira!`)
    break
  case 5:
    console.log(`Sexta-feira!`)
    break
  case 6:
    console.log(`Sabado!`)
    break
  default:
    console.log(`Dia Invalido!`)
    break
}