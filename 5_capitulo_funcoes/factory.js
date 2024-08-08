function criarProduto(nome = 'Generico', preco = 0.0) {
    return {
        nome,
        preco
    }
}

const iphone = criarProduto('iphone', 3500.0)
const generico = criarProduto()

console.log(iphone)
console.log(generico)

function Pessoa(nome) {
    this.nome = nome
    this.falar = () => console.log(`Meu nome é ${this.nome}`)
}

const thales = new Pessoa('thales')
thales.falar()