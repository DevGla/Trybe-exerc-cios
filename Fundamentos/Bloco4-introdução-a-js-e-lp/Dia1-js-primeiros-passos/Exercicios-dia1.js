const a = 32;
const b = 27;
const c = 25.1
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b){
    console.log(a)
} else {
    console.log(b)
}

if (a > b && a > c){
    console.log(a)
} else if (b > a && b > c){
    console.log(b)
} else{
    console.log(c)
}

const valor = 0;
if (valor > 0){
    console.log("Positive")
} else if (valor < 0){
    console.log("Negative")
} else {
    console.log("Zero")
}

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("ERRO: Tente novamente")
} else if (angulo1 + angulo2 + angulo3 <= 180){
    console.log(true)
} else {
    console.log(false)
}
