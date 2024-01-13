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