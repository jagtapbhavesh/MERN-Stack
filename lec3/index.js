// Callback functions -- This will execute after 3 seconds 
function hello(callback) {
    setTimeout(() => {
        console.log("hello")
        callback()
    },3000)
}

function bye() {
    console.log("bye")
}

hello(bye)
// ______________________________________________
let john = {
	firstName:"John",
	lastName:"Doe",
	age:24,
    hobbies:["Music","Gaming","Singing"],
    address: {
        city:"Mumbai",
        country:"India"
    },
    getBirthYear: function() {
        return 1999
    }
}

console.log(john)
console.log(john.address)
console.log(john.address.city)
console.log(john.hobbies[0])
console.log(john.getBirthYear())

// __________________________________________________
let car1 = {
    brand:"BMW",
    getBrandName: function() {
        console.log("My car brand is "+this.brand)
    }
}

let car2 = {
    brand: "Ford",
    getBrandName: function() {
        console.log(`My car brand is ${this.brand}`)
    }
}

car1.getBrandName()
car2.getBrandName()
// _________________________________________________
// Template Literal
firstName = "Oreo"
console.log(`My name is ${firstName}`)
//_________________________________________________
// Rest Parameters
sum = function(...num) {
    let sum = 0
	for(let i of num) {
		sum = sum + i
	}
	return sum
}

console.log(sum(1,2,3))
// __________________________________________________
// foo bar example

for(i=1;i<=100;i++) {
    if(i%3 == 0 && i%5 == 0) {
        console.log("foobar")
    } else if(i%5 == 0) {
        console.log("bar")
    } else if(i%3 == 0) {
        console.log("foo")
    } else {
        console.log(i)
    }
}
// ___________________________________________________________
// date function
let today = new Date()
console.log(today)

daylist = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"]

d=today.getDay()
console.log(daylist[d])
// ________________________________________________________