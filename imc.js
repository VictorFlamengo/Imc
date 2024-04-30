
function calcimc(){

var peso = parseFloat(document.getElementById('peso').value);
var altura = parseFloat(document.getElementById('altura').value);
var imc = peso/(altura*altura);
var resultado;

if(imc < 18.5){
    resultado ="Magro.";
}
else if(imc >= 18.5 && imc <= 24.9){
    resultado = "Saudável.";
}
else if(imc >= 25.0 && imc <= 29.9){
    resultado ="Sobrepeso.";
}
else if(imc >= 30.0 && imc <= 39.9){
    resultado ="Obeso.";
    }

document.getElementById('resultado').innerHTML=resultado;

}