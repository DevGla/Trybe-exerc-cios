/*let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index])
}*/

/*let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nomes of names){
    console.log(nomes)
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort();
console.log(numbers);
//for (let numeros of numbers){
    //console.log(numeros);
//}
for (index = 0; index < numbers.length; index += 1){
    let resultado = numbers[index] + ;
    console.log(resultado);
}
let soma = 0;
for(var i = 0; i < numbers.length; i++){
    soma = soma + numbers[i] / numbers.length;    
}
console.log(soma)
if (soma > 20){
    console.log("valor maior que 20!")
} else {
    console.log("vamos menor que 20!")
}
let ordem = 0;
let maior = 0;
for(let index = 0; index < numbers.length; index += 1){
    ordem = numbers.sort();
    maior = numbers[index];           
}
/*console.log(maior); 
for (numeros of numbers){
    numbers.sorth();
    console.log(numeros);
}*/
let impar = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (index = 0; index <= numbers.length; index += 1){
    if (numbers[index] % 2 === 1){
        impar += 1
    } else {
        impar = "Nenhum valor ímpar encontrado!";
    }   
}
console.log(impar); 