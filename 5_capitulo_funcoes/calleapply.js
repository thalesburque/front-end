function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 1000,
    desc: 0.1,
    getPreco
}

console.log(getPreco())

console.log(produto.getPreco())

const produto2 = {
    nome: 'Notebook',
    preco: 1000,
    desc: 0.1
}

console.log(getPreco.call(produto2, 0.01, '$'))
console.log(getPreco.apply(produto2, [0.01, 'Euro']))