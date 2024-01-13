randomNum = Math.floor(Math.random() * 100) + 1
console.log(randomNum)

minVal = 50
maxVal = 80

randomNo = Math.floor(Math.random() * (maxVal-minVal+1)) + minVal
console.log(randomNo)

attempt = 0
running = true
let guess

while(running) {
    guess = prompt("Enter your guess")
    attempt++;
    if(guess == randomNum) {
        alert(`Congratulations, You have guessed in ${attempt} attempts`)
        running = false
    } else if(guess > randomNum) {
        alert("Go Lower")
    } else {
        alert("Go Higher")
    }
}
