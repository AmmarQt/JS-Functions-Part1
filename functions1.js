//task1

function printName(name) {
console.log(`My name is ${name}`);

}

printName("Ammar");

//task 2

function printAge(birthYear) {
console.log(`Age = ${2024 - birthYear}`);
}
printAge(1984);

//task 3

function printAgeAndName (birthYear, name){
    console.log(`Hello ${name} you are ${2024 - birthYear} years old`)
   
}
printAgeAndName(1984, "Ammar");

//task 4

function printHello(name, language){
    if (language === "en"){
        console.log(`Hello ${name}`);
    } else if (language === "es") {
        console.log(`Hola ${name}`);
    }else if (language === "fr"){
        console.log(`bonjour ${name}`);
    }else { 
        console.log(`Marhaba ${name}`);
    }
}

printHello("Ammar", "tr");
printHello("Ammar", "fr");

//task5

function printMax (firstNumber, secondNumber){
    if (firstNumber > secondNumber){
        console.log(firstNumber);
    } else {
        console.log(secondNumber);

    }
}

printMax(13, 5);
printMax(5, 13);

