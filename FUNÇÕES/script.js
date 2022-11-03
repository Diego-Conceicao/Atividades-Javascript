//funções
/*
    function nome(parametros){
        bloco de ações
    }
*/


//parametros recebem argumentos

var a=5
var b=6
var total = a+b
console.log(total)

function soma(a,b){
    var total= a+b
    return console.log(total)
}

soma(7,8)

//crie uma fução que ache a area de um retangulo de medidas diferentes.


function area(ladoMaior,ladoMenor){
    var medidaArea= ladoMaior*ladoMenor
    return console.log(medidaArea)
}
area(12,6)

//crie uma fução que ache a area de um quadrado.
// area(5,5)

function quadrado(ladoQuadrado){
    var mulitplicacao=ladoQuadrado*ladoQuadrado
    return console.log(mulitplicacao)
}
quadrado(6)
    //argumento 

function pi(){
    return 3.1415
}
var total= 5+pi(); //8.1415
//parenteses executa a função 

function corFavorita(cor){
    if(cor==='azul'){
        return 'você gosta do céu'
    } else if(cor==='verde'){
        return 'você gosta de mato'
    }else{
        return 'você gosta de nada'
    }
}


function weslei(){
    return console.log('cachorro louco')

}

addEventListener('click',weslei())
