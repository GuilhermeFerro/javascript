var idade = 18
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
  console.log(`Voce nao pode votar`)
} else if (idade < 18 || idade > 64) {
  console.log(`Voto opcional`)
} else {
  console.log(`Voto obrigatorio!`)
}