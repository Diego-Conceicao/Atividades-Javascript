//2 numeros inseridos. escolher o calculo podendo ser (+-*)

var num1= parseInt (prompt("digite um valor:"))
var num2= parseInt (prompt("digite um valor:")) 
var operacao=prompt('Qual operação você deseja fazer?')

if(operacao=='+'){
    console.log(num1+num2)

}else if(operacao=='-'){
    console.log(num1-num2)
}else if(operacao=="*"){
    console.log(num1*num2)
} else{
    console.log("Coloque uma operação válida")
}

//var numero= parseInt (prompt(""))  transforma a string em numero