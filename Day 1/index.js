console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(typeof null); //object
console.log(typeof undefined); // undefined
let foo;
console.log("is undefined ", foo === undefined); // true
let fooo = { a: "a" };
// console.log(foo.b); //undefined

console.log(Infinity > -Infinity); //true
var a = 0,
  b = -0;
console.log(1 / a === 1 / b); //false

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log("b" * 3); //nan
console.log("cccb" - "b"); //nan

// console.time can be used to measure how long a task in your code takes to run
console.time("start");

console.time("Loop time");
for (var i = 0; i < 5000; i++) {
  for (var j = 0, length = 5000; j < length; j++) {
    // nothing to do ...
  }
}
console.timeEnd("Loop time");

console.log("%s has %d points", "Sam", 100);

// %s Formats the value as a string
// %i or %d Formats the value as an integer
// %f Formats the value as a ﬂoating point value
// %o Formats the value as an expandable DOM element
// %O Formats the value as an expandable JavaScript object
// %c Applies CSS style rules to the output string as speciﬁed by the second parameter

console.log("%cHello world!", "color: blue; font-size: xx-large");

// console.trace – outputs the current stack trace or displays the same output as the log method if invoked in
// the global scope.
// function sec() {
//   first();
// }

function first() {
  console.trace();
}

var e = new Error("foo");
console.log(e.stack);

// sec();

// It is used to add a timestamp to the browser's Timeline or Waterfall feature for debugging and profiling purposes.
console.timeStamp("display the current time with custom string");
