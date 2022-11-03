//Tipos de dados
//6 Tipos de Dados

var nome="Diego"// string --> conjunto de caracteres representado por "" (aspas duplas) ''(aspas simples) ``()

var idade=18 // number --> númerps sem aspas

var AssassinsCreedMelhorJogo= true // boolean --> pode ser representado por true ou false

var tempo; // undefined --> dado, valor indefinido, 

var comida= null // null --> valor nulo

var novoObjeto= {} //Object

//Verificar tipo de dados
const nome_pessoa ='John'
const idade1=30
const MediaFaculdade=4.5
const legal= true
const notaDeMatematica = null
let notadeDesenho;

//verificar qual tipo de dado
//typeof

console.log (typeof nome_pessoa)
console.log (typeof idade1)
console.log (typeof MediaFaculdade)
console.log (typeof legal)
console.log (typeof notaDeMatematica)
console.log (typeof notadeDesenho)

//Objeto

let FaculdadeAlunos = {
    nome_pessoa1: 'André',
    idade2: 28,
    MediaFaculdade1: 7.5,
    legal: false,
    notaDeMatematica1: 8,
    notadeDesenho:7,
}

console.log(typeof FaculdadeAlunos)
console.log (FaculdadeAlunos)
console.log (FaculdadeAlunos.nome_pessoa1)
console.log (typeof FaculdadeAlunos.nome_pessoa1)

//Concatenar (+) Strings
const pessoa = 'Irmão do Jorel';
const idade3 = 16;

console.log(pessoa + idade3)
console.log(pessoa +' '+ idade3)
console.log('meu nome é '+pessoa +' e eu tenho '+ idade3+' anos')


//Concatenar (+) Strings
const aluno='Grazi'
const sobrenome='Massafera'

console.log(aluno+sobrenome)

//Template Strings
const hello= `Meu nome é ${pessoa} e eu tenho ${idade3} anos`

console.log(hello)

//exercicio
const arvore='ypê amarelo'
console.log(arvore)
console.log(typeof arvore)
//STRING

var idade4="50"
console.log(idade4)
//NUMERO DENTRO DE STRING

var minhaIdade=18
//SUA IDADE

const $name="Diego"
const surname="Tavares"
console.log($name+' '+surname)
//NOME E SOBRENOME CONCATENADO


var frase="it`s time"

console.log(typeof frase)
