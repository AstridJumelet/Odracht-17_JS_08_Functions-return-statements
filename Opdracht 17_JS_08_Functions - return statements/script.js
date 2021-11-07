console.log("***"); //check of node loopt

//Deel 1
const checkNumber = function (realNumber) { //functie met 1 argument
    if (realNumber > "100") {
        return "true";
    }
    else {
        return "false";
    }
};
console.log(checkNumber(8));//output: false
console.log(checkNumber(102));//output:true
console.log(checkNumber(100));//output: false
//this is a function that does something

//Deel 2
const checkBouncer = function (age, realNumber1) {//eerst selectie op leeftijd, dan op aantal)
    if (age < 18) {
        return "sorry, this is a club for adults";
    }
    else if (age >= 18 && realNumber1 > 100) {
        return "it's too busy now, come back later";
    }
    else if (age >= 18 && realNumber1 <= 100) {
        return "come in";
    }
};
console.log(checkBouncer(17, 10));//expected output: this is a club for adults
console.log(checkBouncer(18, 90));//expected output: come in
console.log(checkBouncer(18, 110));//expected output: it's too busy now
//this is a function that does something

//Deel 3 
const average = function (number1, number2, number3, number4, number5) {
    const gem = (number1 + number2 + number3 + number4 + number5) / 5;
    return Math.round(gem);
};
console.log(average(2, 2, 2, 2, 2));//expected output: 2
console.log(average(2, 4, 3, 5, 6));//expected output: 4
console.log(average(2, 4, 2, 4, 6));//expected output: 3,6 > afgerond 4
console.log(average(13, 10, 45, 5, 9));//expected output: 16,4> afgerond 16
//this is a function that does and produces something
