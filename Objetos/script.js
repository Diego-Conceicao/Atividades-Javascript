//objetos
/*conjunto de variáveis e funções que são chamadas de propriedades e metodos*/

var pessoa={
    nome: 'Diego',
    idade:18,
    profissao:'desempregado',
    maiorDeIdade: true,
}
console.log(pessoa)
/*console.log(typeof pessoa)//objeto*/

pessoa.nome//'Diego'
console.table(pessoa)

/*MÉTODO
//é uma propriedade que possui uma função no local do seu valor
*/

let quadrado={
    lados:4,
    area: function(lado){
        return lado*lado;
    },
    perimetro: function(lado){
        return quadrado.lados*lado;
    }
}

//acesse a propriedade de um objeto utilizando o ponto

var menu={
    width:800,
    height:50,
    backgroundColor:'#84E'
}

var bg = menu.backgroundColor

//crie um objeto com os dados pessoais. Deve possuir pelo menos duas propriedades nome e sobrenome

var cadastro={
    nome:"Diego",
    sobrenome:"Tavares",
    idade1:18,
    nomeLimpo: false,
}

console.table(cadastro)

//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos que late ao ver um homem 

var cachorro={
    raça:"Labrador",
    cor:'preto',
    Idade2:10,
    lateAoVerUmHomem:true,
}
console.table(cachorro)


//ARRAYS
/*é um grupo de valores geralmente relacionados.
Servem para guardarmos diferentes valoers em uma unica variável */ //colchetes[]

var videogames = [
    "ps4", "switch", "Xbox"
];

//ps4 posição 0, swicth 1 e xbox posição 2

videogames[0]


//Métodos e propriedades de uma array

console.log(videogames.length);
