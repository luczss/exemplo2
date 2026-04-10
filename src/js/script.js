// DECLARAÇÕES E VARIAVEIS
//VAR, LET E CONST

var nome="fiap";
console.log(nome);
var nome="Dev";
console.log(nome);

if(true){
    var avatar="fiapinho";
}

console.log(avatar);

let exemplo1="Ola Dev-let";
console.log(exemplo1)

const exemplo2="Ola Dev-const";
console.log(exemplo2)

let exemplo3=20;
console.log(typeof exemplo3);

let exemplo4=true;
console.log(typeof exemplo4)

let exemplo5={nome:"fiap"};
console.log(typeof exemplo5)

let exemplo6=["PHP","JAVA", "HTML"]
console.log(exemplo6)

//valor undefined

let exemplo7;
console.log(exemplo7)


//valor null
let exemplo8=null
console.log(exemplo8)

//OPERADORES ARITIMETICOS

const valor1=10;
const valor2=20;

console.log(valor1+ valor2);
console.log(valor1- valor2);
console.log(valor1/ valor2);
console.log(valor1* valor2);

//OPERADORES LOGICOS

const valor3=40;
const valor4=20;

console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 < 0);
console.log(valor3 == valor4 || valor4 >10);

//OPERADORES DE COMPARAÇÃO

console.log(valor3 == valor4); //COMPARA
console.log(valor3 === valor4);//COMPARA E VERIFICA O TIPO

/*
Utilizando as variaveis p(preço do produto) e v(valor do desconto),
crie uma nota variavel chamada precofinal que subtraia o desconto
do preço e exiba o resultado.
*/

const p=120;
const v=20;
const precofinal =p - v;
console.log("o desconto é de:",precofinal,"reais");

//estrutura condicional

//if
if(true){
    console.log("verdadeira")
}

let nome="fiap";

if(nome1 == "fiap"){
    console.log("nome Correto")
}else{
    console.log("nome errado")
}
//if, else, else encadeado/animado

let idade=13

if(idade<= 13){
    console.log("uma criança")
}else if(idade>13 && idade<18){
    console.log("um adolescente")
}else{
    console.log("um adulto")
}

//switch case

let times="corinthians"

switch(times){
    case"corinthians":
    console.log("gambazada")
    break;
    case "sao paulo":
        console.log("sem tradiçao")
        break;
    case "palmeiras":
    console.log("O Maior do brasil")
    break;
    default:
        console.log("nenhuma das opçoes(santos")
}

//condicional ternaria 

let numero=100;
let resultado= numero ==100? "certo":"errado";
console.log(resultado)

let usuario="fiap";
let usuariologado=usuario=="fiap"? "logado com sucesso": "usuario ivalido"
console.log(usuariologado)