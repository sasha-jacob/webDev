//Task 1 - Hello World
alert("Hello World!");
console.log("My first JavaScript assignment!");
document.getElementById("output").innerHTML = "I just modified this element with JavaScript";

//Task 2 - Variable Practice
var firstName = "Sasha";
var age = 18;
var favNumber = 28.69;
console.log("My name is " + firstName + ", I am " + age + " years old, and my favorite number is " + favNumber + ".")

//Task 3 - Calculator Function
function calculate(num1,num2){
    var sum = num1 + num2;
    var product = num1*num2;
    var quotient = num1 / num2;
    var difference = num1 - num2; 
    console.log("The sum is " + sum);
    console.log("The product is " + product);
    console.log("The quotient is " + quotient);
    console.log("The difference is " + difference);
}

calculate(21,12);
calculate(28,69);
calculate(25,45);

//Task 4 - Temperature Converter
function fahrenheitToCelsius(fValue){
 let celsiusFormula = (fValue - 32) * (5 / 9); 
}

fahrenheitToCelsius(10);

function celsiusToFahrenheit(cValue){
 let fahrenheitFormula = (cValue * 9 / 5) + 32;
}
celsiusToFahrenheit(15);

//Task 5 - String Manipulation

function manipulation(){
    let userAnswer = prompt("Enter your first name:");
    let newUserAnswer = userAnswer.toUpperCase();
    let userLength = userAnswer.length;
    alert("In" + newUserAnswer + ", there are" + userLength + "characters in your statement.");
}

manipulation();

//Task 6 - Toggle Switch

var isLightOn = true;
if (isLightOn == true){
    var isLightOn = false;
}
else {
    var isLightOn = true;
}

console.log(isLightOn);

//Task 7 - Counting Loop
<button onclick="countByTwo()">Track Each Value</button>
function countByTwo(num){
    for(i = 0; i <= 20; i+=2){
        //HTML button should display each value
    }
}

countByTwo(20);