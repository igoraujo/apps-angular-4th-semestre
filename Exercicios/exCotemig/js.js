//EX1 -- Tipagem

//Para criar uma variavel em JS utilize a palavra reservada var
var minhaVariavel = 3;

//Exibindo variavel

console.log(minhaVariavel);

//Criando um objeto

var meuObjeto = {
    atributo1: "meu texto",
    atributo2: true,
    atributo3: {

        subAtributo1: 3,
        subAtributo2: function (){console.log(2)}
    }
};

//@TODO
//1) Imprima o meuObjeto
//2) Execute a função salva em subAtributo2

console.log('1) Imprima o meuObjeto: ');
console.log(meuObjeto);

console.log('2) Execute a função salva em subAtributo2: ');
meuObjeto.atributo3.subAtributo2();


//EX 2 Funçōes
//Funçōes em JS assumem caracteriscas de variaveis
//isso permite uma maior flexibilidade na sua utilização e reutilização dentro do código

function soma(p1,p2){
    return(p1+p2);
}
var multi = function (p1,p2){
    return(p1*p2);
}


//@TODO
/*
 1) Implemente uma função que verifique se um número é multiplo de 3 ou 7
 2) Escreve uma função que a partir que receba como parâmetro uma string e 4 caracteres. Sua função deve retornar a concatenação dos caracteres no Final da String
 3) Utilizando

 */

console.log('1) Implemente uma função que verifique se um número é multiplo de 3 ou 7');

function multiplo (number){

    if((number % 3 === 0) || (number % 7 === 0)){
        return true;
    }
    return false;
}

console.log('6 é multiplo de 3 ou 7?');
console.log(multiplo(6));

console.log('10 é multiplo de 3 ou 7?');
console.log(multiplo(10));


//EX 3 - Arrays
// Um array em JS pode ser criado da seguinte forma

var meuArray = [1,2,3]
console.log(meuArray)

// @TODO
// 1)Teste se é possivel armazenar dentro de um array diferentes tipos de arquivos


//Para inserir novos elementos no array basta utilizar o método push
meuArray.push(function(){
    console.log("fui inserida no array")
});

console.log('1)Teste se é possivel armazenar dentro de um array diferentes tipos de arquivos')
meuArray.push('teste');
meuArray.push(2.6);
meuArray.push(multiplo(21));

console.log(meuArray);
console.log(meuArray[5]);

//2) Utilizando o foreach implemente uma funcao que copie um array

console.log('2) Utilizando o foreach implemente uma funcao que copie um array');
meuArray.forEach(function(value, key){
    console.log(key, value);
});


//EX4 VAR e Let
/*

 Var e Let são duas formas de definição de variáveis em JS, entretanto, a interpretação com relação ao apontamento da
 variável difere entre essas formas. Veja abaixo

 */

console.log("================NO BLOCK REAL================");

var message = "hi";
{
    var message = "bye";
}

console.log(message);
console.log("================FUNCTION BLOCK REAL================");

var message2 = "hi";

function greet(){
    var message2 = "bye";
}

greet();
console.log(message2);

console.log("================BLOCK REAL================");

let message3 = "hi";
{
    let message3 = "bye";
    console.log("teste");
    console.log(message3);

}

console.log(message3);


console.log("================UTILIZAÇÃO REAL================");


var fs = [];
for(var i = 0; i < 10; i++) {
    fs.push(i)
}
fs.forEach(function (f) {
    console.log(f);
})


var fs = [];
for(let i = 0; i < 10; i++) {
    fs.push(i)
}
fs.forEach(function (f) {
    console.log(f);
})


//@TODO
//1) UTILIZANDO O CONCEITO DE VAR E LET -> Resolva o problema de impressão do exemplo anterior.

