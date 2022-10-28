//Arrays
const numbers = ['apples','1','howdo',1,3];
numbers[5] = "Hoduu";
numbers.push("mangos")
numbers.unshift("straw");


numbers.pop();
console.log(numbers);

console.log(Array.isArray(numbers))




//Object literals

const person = {
    fistName: "John",
    secondName: "Doe",
    age:30,
    movies: ["Spiderman", "Ironman"],
    address: {
        street: "221 B",
        city : "Kandy",
        State : "Emergency"
    }
}

person.email ="john@gmail.com"

console.log(person);
console.log(person.fistName);


//DESTRUCTURING

const {fistName, secondName, address:{city}} = person;
console.log(fistName);
console.log(city);

//
const todos = [
    {
        id: 1,
        work: "Go to College",
        complete: false
    },
    {
        id: 2,
        work: "Buy Food",
        complete: false
    },
    {
        id: 3,
        work: "Clean Room",
        complete: true
    }
];

console.log(todos[1].work);

//Converting to JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);


//loops
for(let i=0;i<10;i++){
    console.log(i);
}

//using loops to iterate

for(let todo of todos){
    console.log(todo.id);

}

//using forEach, map and filter

todos.forEach(function(todo){
    console.log(todo.id);
});


const todoText = todos.map(function(todo){
    return(todo.work);
});
console.log(todoText);

const todoComp = todos.filter(function(todo){
    return todo.complete===true;
}).map(function(todoComp){
    return todoComp.work;
});

console.log(todoComp);



