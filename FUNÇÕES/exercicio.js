//crie uma função matematica que retorne o perimetro de um quadrado
//perimetro é a soma de todos os quatro lados do quadrado


function perimetro(x){
    var operation=4*x
    return console.log(operation)
}

perimetro(5)

//crie uma funçao que retorne o seu nome completo
//ela deve possuir os parametros nome e sobrenome 

function nomeCompleto(nome,sobrenome){
    var seuNome=nome+" "+sobrenome
    return console.log(seuNome)
}

nomeCompleto("Diego","Tavares")


//crie uma função que verifica se um numero é par

function ePar(numero){
    if(numero % 2==0){
        return console.log('numero é par')
    }else{
        return console.log('numero é impar')
    }
}

ePar(2)
ePar(9)


//var conta= Xnumero % 2 == 0;