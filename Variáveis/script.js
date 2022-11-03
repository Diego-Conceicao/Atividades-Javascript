/*Variáveis*/

/* responsáveis por guardar dados na memória.
incia com a palavra VAR, LET ou CONST */

var nome= 'Grazi'
console.log(nome)

let idade= 28 /*numero*/
console.log(idade)

let idade2= '28'/*string*/
console.log(idade2)

const PossueFaculdade = true
console.log(PossueFaculdade)


/*Calculos*/

var conta= 20+5
console.log (conta)

var preco= 80000
var prestacao= 60

var precoMensal=preco/prestacao
console.log (precoMensal)

/*Sintaxe*/

var idade3=19
var nome1= 'Gabriel'
var apelido='Fifinha'

var idade3= 19,
    nome= 'Gabriel'
    apelido= 'Fifinha'

/*Sem Valor*/
var precoAplicativo;
    console.log (precoAplicativo)
//undefined//

/* regras variaveis

1-  os nomes das variaveis podem iniciar com o cifrão $, underline _ ou letras. Podem conter números mas não iniciar com eles.

2-  podem conter os nomes com letra Maiúscula ou Minúscula. Nome minúsculo é diferente de nome maiúsculo

3-  não usar palavras reservadas

4-  caixa de camelo
    é comum nomearmos assim: AbrirModal;
    não pode ter espaço
*/


/*Exemplo inválido*/
    // var #nome
    // var function;
    // var 1possueFaculdade


/*Exemplo Válido*/
    var $selecionar
    var _nome
    var Possue1_Faculdade

//Declarar

//console.log(curso)
//retorna is not defined. não tem var nem valor para curso

//mudar o valor atribuido
var idade4=19
    idade4=27
    console.log(idade4)

let preco2=50
    preco2=25
    console.log(preco2)

// const possueCarro= true
//     possueCarro= false
// console.log(possueCarro)

//EXERCÍCIO

/*declarar uma variável com sua idade
declarar uma variável com a sua comida favorita
atribuir valor a sua comida favorita
declarar 5 variaveis diferentes sem valores
crie duas variáveis com valores diferentes, faça uma multiplicação entre elas e imprima no console.log o resultado*/

/* Declarar uma váriável com seu nome*/

var nome2= 'Diego Tavares',
    _idade5= 18,
    $comidadFav='Strogonoff com batata e coquinha',
    comida1;

var possueCelular,
    possueDinheiro,
    possueConta,
    possueDocumento,
    possueCarteira;

var meses= 48;
var   mensalidade=1200;
var precototal = meses * mensalidade;
console.log(precototal)

//Revisão
/*
.console.log(2 * 10)
.console.log(2 + 10)
.console.log(2 - 10)
.console.log(10 / 3)
.console.log(10 % 3) 
.console.log(5 % 3)
*/
/*modulo em operação encontra o resto da divisão*/

var nome6= 'Diego'
console.log (nome6)

var valor1 = 5,
    valor2 = 6;
    var resultado = valor1 * valor2

    console.log(resultado)