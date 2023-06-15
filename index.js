
// Write your code here
const num1 = 31;
const num2= 2;
const multiply = num1 * num2;

const random = generateRandomInterger(1, Number.MAX_SAFE_INTEGER); 
function generateRandomInterger(min, max) {
    return Math.floor(Math.random() *(max - min + 1)) + min;

}
const num3 = 25;;
const num4 = 7;
const mod = num3 % num4;

const numbers = [5, 10, 20, 15, 8];
const max = Math.max(...numbers);