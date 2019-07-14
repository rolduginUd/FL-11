function isInteger() {
    return arguments[0] === parseInt(arguments[0], 10);
 }
 console.log(isInteger(5));
 console.log(isInteger(5.1));