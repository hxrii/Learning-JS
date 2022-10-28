//Arrays
const numbers = ['apples','1','howdo',1,3];
numbers[5] = "Hoduu";
numbers.push("mangos")
numbers.unshift("straw");


numbers.pop();
console.log(numbers);

console.log(Array.isArray(numbers))