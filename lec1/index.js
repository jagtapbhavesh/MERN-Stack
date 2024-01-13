// console.log("hey")
// console.warn("yo")
// console.error("error")

// alert("I am an alert box")

// prompt("Enter a number")

// let age = 22
// console.log(age)

// let s = "Bhavesh"
// console.log(s)

// let isGraduated = false
// console.log(isGraduated)

// const pi = 3.14
// console.log(pi)

// // pi = 1

// console.log("My name is "+ s + " and my age is "+ age)

// document.write("Hello from JS")

// document.getElementById("hd1").innerHTML = "My Portfolio"
// document.getElementById("p1").innerHTML = "My name is "+ s + " and my age is "+ age

// x = prompt("Enter a Number")
// console.log(x)
// console.log(x+1)
// console.log(typeof x)
// x = Number(x)
// console.log(typeof x)
// console.log(x+1)
// x-=x
// x+=7
// console.log(x+ " Thala for a reason ")

// a = 10
// b = '10'
// console.log(a==b)
// console.log(a===b)

// y = prompt("Enter a Number")
// y = Number(y)

// if (y >= 0) {
// 	if (y == 0) {
// 		console.log("zero")
// 	} else {
// 		console.log("positive")
// 	}
// } else {
// 	console.log("negative")
// }


// Task 90-100 A+ 80-90 A 70-80 B+ 60-70 B <60 FAIL
    score = prompt("Enter your marks ! ")
    if(score >= 90 && score <= 100) {
        console.log("YOUR GRADE IS A+")
    } else if(score >= 80 && score < 90 ) {
        console.log("Your GRADE IS A")
    } else if(score >= 70 && score < 80) {
        console.log("Your grade is B+")
    } else if(score >= 60 && score < 70) {
        console.log("Your grade is B")
    } else if(score < 60) {
        console.log("Fail")
    } else {
        console.log("Invalid Score")
    }

    