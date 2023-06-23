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

// Date
var now = new Date();
var nowOne = new Date(0);
var one = new Date(2020, 1);
var special = new Date(99, 0);
console.log(special);

var date1 = new Date();
console.log(date1.toString()); //Returns: "Fri Apr 15 2016 07:48:48 GMT-0400 (Eastern Daylight Time)"
console.log(date1.toTimeString()); //Returns: "07:48:48 GMT-0400 (Eastern Daylight Time)"
console.log(date1.toDateString()); // Returns: "Thu Apr 14 2016"
console.log(new Date().getFullYear());

var checkoutDate = new Date();
// Thu Jul 21 2016 10:05:13 GMT-0400 (EDT)
checkoutDate.setDate(checkoutDate.getDate() + 12);
console.log(checkoutDate); // Tue Aug 02 2016 10:05:13 GMT-0400 (EDT)

var date1 = new Date();
var date2 = new Date(date1.valueOf() + 5000);
var dateDiff = date1.valueOf() - date2.valueOf();
var dateDiffInYears = dateDiff / 1000 / 60 / 60 / 24 / 365; //convert milliseconds into years
console.log("Date difference in years : " + dateDiffInYears);

// Comparison Operations
// The abstract equality and inequality operators ( == and != ) convert their operands if the operand types do not match.
// Operands of the abstract equality operator are compared after being converted to a common type.
console.log("" == 0);
console.log(false == 0);
console.log(false == "0");
// JavaScript converts empty strings to numbers.
Number(""); // 0
Number("0"); // 0
Number(false); // 0

// Any equality or relational comparisons with NaN returns false , even comparing it with itself. Because, NaN is
// supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other
// nonsensical computations.

console.log(NaN === NaN); //false

// Logical OR ( || ), reading left to right, will evaluate to the ﬁrst truthy value. If no truthy value is found, the last value is returned.
var t = "" || undefined;
console.log("t", t);

// Logical AND ( && ), reading left to right, will evaluate to the ﬁrst falsy value. If no falsey value is found, the last value is returned.
// var c = "" && "asd";
var c = "" && "asd";
console.log("c", c);

// Object.is It returns true if both operands belong to the same Type and are the same value.
var t1 = 1,
  t2 = 1;
console.log(Object.is(t1, t2));
console.log(Object.is({}, {}));
