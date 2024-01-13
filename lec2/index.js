console.log("Hello")

var choice = 8;

switch(choice) {
    case 1: 
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break
    case 4: 
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Choice between 1-7")
}
// var i = 1
// while(i<=10) {
//     console.log(i)
//     i++
// }

function add(a,b) {
    console.log(a+b)
}

function sub(a,b) {
    console.log(a-b)
}

add(10,30)
sub(30,10)

fruits = ['apple', 'mango', 'banana', 'grape', 'watermelon','grapes','pineaple']
console.log(fruits.sort())

for(i=0;i<=fruits.length;i++) {
    console.log(fruits[i])
}

num = [10,40,32,54,30,33,21,12,293,212,333]

function compareNumbers(a, b) {
  return a - b;
}

num.sort(compareNumbers);

console.log(num);

a = [1,2,3,4,5]
b = [...a,6,7,8,9]
console.log(b)

