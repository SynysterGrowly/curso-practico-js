//Funciones para cuadrado

function perimetroCuadrado(lado){
    return lado * 4 + " cm";
}

function areaCuadrado(lado) {
    return lado * lado + " cm2"
}

//Funciones para triangulos

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Funciones para circulo

PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    console.log(diametro);
    return diametro * PI ;
}

function areaCirculo(radio){
  return (radio * radio) * PI;
}