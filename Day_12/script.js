function myFunction(name, age) {
    console.log("My name is " + name + " and I am " + age + " years old.");
}

myFunction("Ali", 25);

function add(a, b) {
    console.log("This will not be executed.");
    return a + b;

} 
console.log(add(5, 10));