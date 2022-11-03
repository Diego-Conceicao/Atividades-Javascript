//ARRAYS

/* é um grupo de valores. Servem para guardamos diferentes valores em um única variável.*/ 

/*
var numeros = [1, 2, 3, 4]
var soma = numeros[2]+numeros[3]
console.log(soma)

var videoGames = ['switch', 'ps4', 'xbox'];

//videoGames.pop();//remove o ultimo item e retorna da Array
videoGames.push('3DS');//adiciona ao final da array
videoGames.length//retorna a quantidade de valores.

//while
var i = 0

while(i<10){
    console.log(i)
    i = i + 1
}

//for
for(var numero = 0; numero <=10; numero = numero +1){
    console.log(numero)
}
*/
/*
var videoGames = ['switch', 'ps4', 'xbox'];

for(var b = 0; b < videoGames.length; b = b + 1){
    console.log(videoGames [b])
}
*/

//foreach
/*É um método que executa uma função para cada item da array. É uma forma mais simples de utilizarmos um loop com arrays*/

var videoGames = ['switch', 'ps4', 'xbox'];
videoGames.forEach(function (b, c, d) {
    console.log(b, c, d)
});

//valor, posição e elementos da array

//crie uma array com os anos que o brasil ganhou a copa
//58 62 70 94 02

let copas = [1958, 1962, 1970, 1994, 2002]

//interaja com a array utilizadndo um loop, para mostrar no console a seguinte menagem, o Brasil ganhou a copa de ${ano}

copas.forEach(function (a){
    console.log(`O Brasil ganhou a copa de ${a}`)
});
