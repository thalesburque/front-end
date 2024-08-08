function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(3,4)

function soma(a,b = 0) {
    return a + b
}

console.log(soma(3,2))

const somaArrow = (a,b) => {
    return a + b
}

console.log(somaArrow(10,5))

const subtracao = (a,b) => a - b

console.log(subtracao(10,8))