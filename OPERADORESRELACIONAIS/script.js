// //boolean

// //existem dois valores : false ou true

//  var lulaEleito = false
// var lulaEleito = true

// if (lulaEleito){
//     console.log('vamos comer picanha')
// }else{
//     console.log("Bolsonaro vai criar o pix")
// }

// //operadores relacionais
// /*
//     ==     --> igualdade
//     >      --> maior que
//     <      --> menor que
//     !=     --> diferente
//     >=     --> maior ou igual
//     <=     --> menor ou igual
// */

// var a=1,
//     b=5,
//     c=2,
//     d=1;

// console.log(a>b)    //false
// console.log(a<b)    //true
// console.log(a==d)   //true
// console.log(b>=a)   //true
// console.log(c<=b)   //true
// console.log(d!=a)   //false
// console.log(d!=b)   //true

// //Condições
// // if e else

// // if é condição verdadeiro ( "se for verdade ...")
// // else é a condição falsa ("se não .... é falsa")
    

// // if (condição){
// //     bloco verdadeiro
// // }else{
// //         bloco falso
// // }


// var graziFazFaculdade = true

// if (graziFazFaculdade){
//     console.log("grazi vai se formar")
// } else{
//     console.log("Grazi não faz faculdade")
// }


// let valor1 = 5,
//     valor2 = 7,
//     valor3 = 5,
//     valor4 = 2;


// if(valor1>valor2){
//     console.log("valor1 é maior que valor2")
// }else{
//     console.log("valor1 não é maior que valor2")
// }

// if(valor1!=valor3){
//     console.log("valor1 é diferente ao valor3")
// } else{
//     console.log("valor1 é igual de valor3")
// }


// const home = prompt('digite o seu nome:')
// console.log (home)

// // CONDICIONAIS ELSE IF
// var GraziPossuiGraduacao = true
// var GraziPossuiDoutorado = false

// if(GraziPossuiDoutorado){
//     console.log('possui graduação e doutorado')
// } else if (GraziPossuiGraduacao){
//     console.log('possui graduação, mas não possui doutorado')
// } else{
//     console.log('não possui graduação')
// }


// /*categoria x Produto*/
// // var categoria=prompt("Digite a categoria do produto")

// if (categoria==1){
//     console.log('Preço R$10,00')
// } else if (categoria==2){
//     console.log('Preço R$18,00')
// } else if (categoria==3){
//     console.log('Preço R$23,00')
// } else if (categoria==4){
//     console.log('Preço R$26,00')
// } else{
//     console.log('categoria invalida, digite um numero entre 1 e 5!')
// }

// /*switch e case*/

// var corfavorita="preto"

// switch(corfavorita){
//     case "preto":
//         console.log("Yasmin usava calça colorida")
//         break;
//         case "vermelho":
//             console.log("Yasmin apaixonada")
//             break;
//         case "amarelo":
//             console.log("yasmin usava blusa amarela")
//             break;
// }


// // operadores lógicos &&
// // && = e

// console.log(true && true);
// console.log(false && true);



// verifique se a sua idade é maior que a de algum parente 

// escreva um programa que pergunte a distancia que um passageiro deseja percorrer em km.
// calcule o preço da passagem. cobrando 0.50 r$ por km para viagens de até 200km e 0.45 para viagens mais longas

let idade1=prompt("qual sua idade?");
    idadeparente=prompt("qual a idade do seu parente?")

    if(idade1>idadeparente){
        console.log("você é mais velho que seu parente.")
    }else if (idade1<idadeparente){console.log("seu parente é mais velho do que você.")   
    }else{console.log("seu parente tem a mesma idade que você.")
    }


const dist=parseInt(prompt('Qual a distância que você deseja percorrer:'))


if (dist<=200){
    alert(`Preço da passagem: R$${dist*0.5}`)
} else if(dist>200){
    alert(`Preço da passagem: R$${dist*0.45}`)
}