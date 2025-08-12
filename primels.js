console.log("Primeels.js is loaded successfully!");
console.log("Welcome to the Primels.js script!");
console.log("This script is designed to demonstrate some basic JavaScript functionality.");
console.log("Let's start with a simple greeting function.");
function greetUser(name) {
    return `Welcome, ${name}! Enjoy your time here.`;
}
console.log(greetUser("User"));
console.log("Now, let's implement a function to check for prime numbers.");
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Checking if 7 is a prime number: " + isPrime(7));
console.log("Checking if 10 is a prime number: " + isPrime(10));
console.log("Next, we will create a function to generate prime numbers up to a given limit.");
function generatePrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
console.log("Generating prime numbers up to 20: " + generatePrimes(20));
console.log("Now, let's add a feature to log the generated primes.");
function logPrimes(limit) {
    const primes = generatePrimes(limit);
    console.log(`Prime numbers up to ${limit}: ${primes.join(', ')}`);
}
logPrimes(30);
console.log("Feature to log primes added successfully.");
console.log("End of the Primels.js script.");
console.log("Thank you for using Primels.js!");
console.log("Feel free to explore and modify the code as you wish.");
console.log("Remember to test the functions to ensure they work as expected.");
console.log("This script is now complete.");
console.log("You can now run this script to see the output.");
console.log("Thank you for your attention!");