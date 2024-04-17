let valores = [4, 5, 8, 2, 3, 1, 7, 12]
console.log(valores)
/*
for(let pos=0; pos < valores.length; pos++) {
  console.log(`O valor da posição ${pos} é ${valores[pos]}`)
}
*/
valores.sort()
for(let pos in valores) {
  console.log(`O valor da posição ${pos} é ${valores[pos]}`)
}
let pos = valores.indexOf()
if (pos == -1) {
  console.log('O valor não foi encontrado')
} else {
  console.log(`O valor esta na posição ${pos}`)
}
