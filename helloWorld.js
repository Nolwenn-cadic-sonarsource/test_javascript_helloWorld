let text = "Hello World";
console.log(text);

function add(a, b) {
    let result = a + b; // Noncompliant: Useless assignment to local variable 'result'
    return a + b;
}

console.log(add(5, 10));
