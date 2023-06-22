// Strings
var nullString = String(null);
console.log(nullString); // "null"

console.log(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"

// Reverse A string
var sentence = "This is Ahsan Zahoor";
console.log(sentence.split("").reverse().join(""));

// To cut white spaces from edges
console.log("          some whitespaced string  ".trim());
console.log("       this is me  ".trimStart());
