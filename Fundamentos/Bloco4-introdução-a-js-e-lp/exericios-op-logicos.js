/*const currentHour = 4;
let message = "";

if (currentHour >= 22){
    console.log(message = "Não deveríamos comer nada, é hora de dormir!")
}
else if (currentHour >= 18 && currentHour < 22){
    console.log(message = "Rango da noite, Vamos jantar :D")
}
else if (currentHour >= 14 && currentHour < 18){
    console.log(message = "Vamos fazer um bolo de café da tarde")
}
else if (currentHour >= 11 && currentHour <= 14){
    console.log(message = "Hora do almoço")
}
else if (currentHour >= 4 && currentHour <= 11){
    console.log(message = "Hmmm, cheio de café recém passado!")
}*/

/*let WeekDay = "Segunda-feira";
if (WeekDay == "Segunda-feira" || WeekDay =="Terça-feira" || WeekDay =="Quarta-feira" || WeekDay =="Quinta-feira" || WeekDay =="sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe")
} else {
    console.log("FINALMENTE, descanso merecido UwU")
}*/

//console.log(!(2 + 2) === 4);

let resultado = "Reprovado"; 
switch (resultado){
    case  ("Aprovada"):
        console.log("Parabéns Você foi Aprovado(a).")
    break
    case  ("Lista"):
        console.log("Você está na lista de espera!")
    break
    case  ("Reprovado"):
        console.log("Infelizmente você não alcançou a pontuação mínima e foi Repovado(a).")
    break
    default:
        console.log("Não se aplica")
}
