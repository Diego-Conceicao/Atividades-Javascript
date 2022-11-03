/*EXERCÍCIO JS

crie um programa que lê um valor e imprima dizendo se ele é maior ou menor que 10*/

const numero = prompt("Digite um valor:")

const valor = 10

if(numero<valor){
    alert(`${numero} é menor que ${valor}`)
    console.log(`${numero} é menor que ${valor}`)
} else{
    alert(`${numero} é maior que ${valor}`)
    console.log(`${numero} é maior que ${valor}`)
}

/*
Faça um programa no qual o usuário deve digitar a idade do seu carro. 
Se for maior que 3 imprima um alert "seu carro é velho". 
Se for menor ou igual a 3 imprima seu carro é novo*/

const idade = prompt('Digite a idade de seu carro:')

const valor1 = 3

if(idade>valor1){
    console.log(`seu carro é velho, ele tem ${idade} anos`)
    alert(`seu carro é velho, ele tem ${idade} anos`)
} else{
    console.log(`seu carro é novo, ele tem ${idade} anos`)
    alert(`seu carro é novo, ele tem ${idade} anos`)
}

/* faça um programa que peça ao usuário a idade dele.
Se for maior que 18 a mensagem dever ser" você pode ser preso. se for menor" seus pais serão presos*/

const idadeUsuario = prompt('Digite a sua idade:')

const idademinima = 18

if(idadeUsuario<18){
    alert("seus pais serão presos")
} else{
    alert("você pode ser preso")
}

/*faça um programa que pergunte a velocidade de um carro de um usuario. 
Caso ultrapasse 80 km/h, exiba uma mensagem dizendo que o usuario foi multado
no caso exiba o valor da multa cobrando 5 reais por km acima da multa*/

const velocidadeCarro=prompt('Qual a velocidade do seu carro')

velocidademax=80


if (velocidadeCarro>velocidademax){
    alert(`você foi multado`)
    alert(`valor da multa: ${(velocidadeCarro-velocidademax)*5} R$`)
} else{
    alert('dentro do limite de velocidade')
}