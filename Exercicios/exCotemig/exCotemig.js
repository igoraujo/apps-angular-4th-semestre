/*

Esta lista de exercicos tem como objetivo peraprar o aluno para utilização de 
técnicas básicas de JavaScript e Css

*/


//EX1 -- Tipagem

//Para criar uma variavel em JS utilize a palavra reservada var
var minhaVariavel = 3
//Exibindo variavel 
console.log(minhaVariavel
//Criando um objeto 
var meuObjeto = {
    atributo1: "meu texto",
    atributo2: true,
    atributo3: {

        subAtributo1: 3,
        subAtributo2: function (){console.log(2)}
    }
}

//@TODO
//1) Imprima o meuObjeto
//2) Execute a função salva em subAtributo2



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


//EX 3 - Arrays
// Um array em JS pode ser criado da seguinte forma

var meuArray = [1,2,3]
console.log(meuArray)

// @TODO
// 1)Teste se é possivel armazenar dentro de um array diferentes tipos de arquivos

//Para inserir novos elementos no array basta utilizar o método push
meuArray.push(function(){console.log("fui inserida no array")})
meuArray[5]();


//2) Utilizando o foreach implemente uma funcao que copie um array

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


//@TODO
//1) UTILIZANDO O CONCEITO DE VAR E LET -> Resolva o problema de impressão do exemplo anterior.

//EX 5 OPERADOR ...

/*
    Situações onde o número de varáveis que a função recebe é extramamente comum no JS, sobretudo após a criação 
    dos frameworks para executá-lo no backend. Para solucinoar esse cenário o operador ... foi implementado 
    veja abaixo seu funcionamento

*/

console.log("=====================PRINT ARRAY=====================");
console.log([ 1, 2, 3]); // [1, 2, 3]
console.log("=====================PRINT VALUES OF ARRAY=====================");
console.log(...[ 1, 2, 3]); // [1, 2, 3]
console.log("=====================CONCAT ARRAYS=====================");
let first = [ 1, 2, 3];
let second = [ 4, 5, 6];

//JUNTANDO 2 ARRAYS
first.push(second);

//Push não funcionou da maneira correta
console.log(first); // [ 1, 2, 3, [ 4, 5, 6] ] 

console.log("=====================CONCAT VALUES OF ARRAYS=====================");
let first2 = [ 1, 2, 3];
let second2 = [ 4, 5, 6, 7];

//Concatenando valores do array
first2.push(...second2);

//VEJA COMO FICOU
console.log(first2); 

//EXERCÍCIOS AVANÇADOS


/*EX 1

Considere a implementação de um de um escalonador de tarefas. 
Este sistema identifica a fila de processos com menor corrência e realiza a alocação.
A partir do código já implementado abaixo. Realize o desenvolvimento nos locais indicados
*/


//FILA DE PROCESSOS
var fila1=[];
var fila2=[];

function printFila() {
    
    console.log("Alocação Fila 1 = "+fila1.length);
    fila1.forEach(function(f){
        f.print();
    });
        console.log("Alocação Fila 2 ="+ fila2.length);
    fila2.forEach(function(f){
        f.print();
    });

}

//@TODO MÉTODO PARA ALOCAR FILA
//@TODO OBJETO JOB

alocaTarefa(new job("Ir para o Cotemig"));
alocaTarefa(new job("Dormir"));

printFila();



/*EX 2 EVENT/DOM


A partir da resolução do exercício anterior implemente uma alteração que informe a partir de uma página html 
os itens alocados no array em uma lista. 
*/

//Código HTML

<!DOCTYPE html>
<meta charset="UTF-8">

<html>
<head>
    <title>Exercício 2</title>
    <script src="ex2-Resolvido.js"></script>
</head>
<body>
    <div id="dadosFila1">
        <ul id="Fila1">
            
        </ul>
    </div>  
    <div id="dadosFila2">
        <ul id="Fila2">
            
        </ul>
    </div>
<button onclick="start()">Qual a situação das filas?</button>

</body>
</html>


/* EX3

Utilizando as funções abaixo implemente um jogo de adivinhação 

Math.random()
Math.floor()
prompt()
parseInt()
alert()

dica:
Teste de controle caso o usuário pressione enter sem ter inserido o número

 if (isNaN(valorInserido)) {
        alert("Você deve informar um número.\n\n" +
              "Insira um valor de 1 a 100.");
        return false;
    }

*/


var numSorteado;            
var valorDigitado;   
var valorInserido;      
var encontrado = false;   
var tentativas = 0;

function do_game() {
    var valorAleatorio = Math.random() * 100;
    var valorAleatorioINT = Math.floor(valorAleatorio);
    numSorteado = valorAleatorioINT;

    while (!encontrado) {
        valorDigitado = prompt("Adivinhe um número "+
                                  "entre 1 e 100.\n\n"+
                                  "Qual número foi sorteado?");
        valorInserido = parseInt(valorDigitado);
        tentativas += 1;   
        encontrado = check_guess();
    }
}

function check_guess() {
    if (isNaN(valorInserido)) {
        alert("Você deve informar um número.\n\n" +
              "Insira um valor de 1 a 100.");
        return false;
    }
    if ((valorInserido < 1) || (valorInserido > 100)) {
        alert("Por favor Insira um número entre 1 e 100");
        return false;
    }
    if (valorInserido > numSorteado) {
        alert("Opa o número inserido foi muito alto, tente um valor menor");
        return false;
    }
    if (valorInserido < numSorteado) {
        alert("O número digitado é menor do que o número sorteado, ");
        return false;
    }
    alert("Muito bem!!! O número sorteado era  " + numSorteado + 
          ".\n\nVocê realizou " + tentativas + 
          " tentativas para encontrar o número");
    return true;   
}



