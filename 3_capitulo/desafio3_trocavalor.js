let a = 7
let b = 94

console.log(`valor inicial de a ${a}` )
console.log(`valor inicial de b ${b}` )

let aux = b
b = a
a = aux

console.log(`valor de a apos a troca ${a}` )
console.log(`valor de b apos a troca ${b}` )

[a,b] = [b,a]
