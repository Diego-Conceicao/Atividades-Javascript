//numeros
var idade=25; //number
var pi=3.14; //ponto p/ decimal
var numero = 30000
var exp=2e10; //expoente 2 elevado a 10= 20000000000
console.log(exp)

//operadores aritméticos
var soma= 1+2;   //3
var subtracao= 5-4;  //1
var multiplicacao= 3*7;  //21
var divisao=81/9;    //9
var expoente= 2e4;  //16// 2*2*2*2
var modulo= 14%5;    //4

//exercicio
/*converta as seguintes expressões matemáticas para que possam ser calculadas usando o javascript*/

//10+20+30
//4 elevado a 2 dividido por 30
//(9 elevado a 4 mais 2) vezess 6 menos 1//

var adicao=10+20+30

let expoente2= (4**2)/30

var expressao= (9**4+2)*6-1

console.log(adicao)
console.log(expoente2)
console.log(expressao)

//OPERADORES ARITMÉTICOS (STRINGS)

var soma1 = '100' + 50  //10050   
console.log(soma1)

console.log('100'-50)

console.log('100'*'2')

var lais='100'* 2;
console.log(lais)

let div= 'comprei 10' / 2
console.log(div)    //NaN   (NOT a NUMBER)

//a ordem importa
// começa a radiciação e exponenciação multiplicação e divisão e depois soma e subtração

var total1= 20+5*2; //5*2+20=30
var total2= (20+5)*2; //25*2=50
var total3= 20/2*5; //20
var total4= 10+10*2+20/2; //40

//operadores aritméticos unários

let icrementado = 5
console.log(++icrementado)