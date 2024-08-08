// objeto 
const pessoa = { 
    nome: 'Thales',
    idade: 31,
    endereco: {
        rua: 'Quararibeia',
        numero: 200
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco} = pessoa
console.log(endereco)

const {endereco: {rua}} = pessoa
console.log(rua)

//Array
const [a] = [10,20]
console.log(a)

//funcao
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

obj = {
    min: 1,
    max: 7
}
console.log(rand(obj))

function randArray([min = 0, max = 1000]) {
    if (max < min) [min, max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

vetor = [7,1]
console.log(randArray(vetor))