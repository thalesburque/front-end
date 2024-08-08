//escopo global e funcao
var numVar = 1
{
    var numVar = 2
    console.log('dentro: '+ numVar)
}

console.log('fora: '+ numVar)

function testeVar() {
    var numVar = 3
    console.log('function: ' + numVar)
}

testeVar()
console.log('fora: ' + numVar)

//escopo global, funcal e bloco
let numLet = 1
{
    let numLet = 2
    console.log('dentro: ' + numLet)
}

console.log('fora: ' + numLet)