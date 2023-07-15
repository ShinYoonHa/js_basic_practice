var num1 = Number(prompt("첫 번째 숫자를 입력하시오"));
var num3 = Number(prompt("세 번째 숫자를 입력하시오"));

addNumber(num1, num3);

function addNumber(a,b,c=3) {
    var sum = a+b+c;
    alert(sum);
}