const nome = 'Thales'
const concatencao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatencao,template)

const up = texto => texto.toUpperCase()
console.log(`Olá ${up(nome)}!`)
