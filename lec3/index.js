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

// Template Literal
firstName = "Oreo"
console.log(`My name is ${firstName}`)

// Rest Parameters
sum = function(...num) {
    let sum = 0
	for(let i of num) {
		sum = sum + i
	}
	return sum
}

console.log(sum(1,2,3))