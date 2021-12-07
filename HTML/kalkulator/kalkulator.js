var a = prompt("a number:");
var a = parseFloat(a);
var op = prompt("operation:");
var b = prompt("a number:");
var b = parseFloat(b);

if (op === "+") {
    var c = a + b;  
}
else if (op === "-") {
    var c = a - b;
}
else if (op === "*") {
    var c = a * b;
}
else if (op === "/") {
    var c = a / b;
}

c = c.toFixed(4);
document.write(c)
