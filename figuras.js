//Codigo del cuadrado

console.group("Cuadrados")
const ladoCuadrado = 5;

console.log("Los latos del cuadrado miden " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area de mi cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();


console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden ${ladoTriangulo1} cm,${ladoTriangulo2} cm ${baseTriangulo} cm y la altura ${alturaTriangulo} cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es ${perimetroTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triangulo es: ${areaTriangulo} cm2`);
console.groupEnd();

//Circulo
console.group("Circulos")

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const Pi = Math.PI;
console.log(`${Pi}`)


const perimetroCirculo = diametroCirculo * Pi;
console.log(`El perimetro del circulo es ${perimetroCirculo} cm`);

const areaCirculo = (radioCirculo * radioCirculo) * Pi;
console.log(`El area del circulo es ${areaCirculo} cm2`)

console.groupEnd();