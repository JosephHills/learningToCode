// JavaScript Notes

// Data Types

// There are eight different data types used in JS:
// undefined
// null
// boolean
// string (can't be used in mathematical operations) eg. "Joseph" or "36" 
// symbol
// bigint
// number (numeric data which can be used to perfom mathematical operations with a number, not a string) eg. 1 or 12345
// object

// Declaring Variables

// We tell JavaScript to create or declare a variable by putting the keyword var in front of it, eg.
var myName
// Store a value in a variable with the assignment operator = eg.
myName = Joe
// After a value is assigned to a variable you can assign the value of that variable to another variable using the assignment operator, eg. 
myNum = myVar

// Initializing Variables

// We can initialize a variable to an initial value at the same time it is declared, eg.
var myAge = 36
// We can also declare a string variable like this, eg.
myName = "Joseph Hills"
// This is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes. When variables are declared, they have an initial value of undefined, and mathematical operations using this will result in NaN (Not a Number).

// Differences Between var let and const Keywords

// Variables declared as var can be overwritten as codebase becomes larger, and would not show as an error. Variables declared as let can only be declared once with the same name. Variables declared as const are read-only, and can never be reassigned.

// Basic Maths with JavaScript

// JavaScript uses the + symbol as an addition operator when placed between two numbers
// JavaScript uses the - symbol for subtraction
// JavaScript uses the * symbol for multiplication of two numbers
// JavaScript uses the / symbol for division

// Increment a Number with JavaScript

// You can easily increment or add one to a variable with the ++ operator, eg.
i++ // would mean i = i + 1
// The entire line becomes i++;, eliminating the need for the equal sign.

// Decrement a Number with JavaScript

// You can easily decrement or decrease a variable by one with the -- operator, eg.
j-- // would mean j = j - 1
// The entire line becomes i--;, eliminating the need for the equal sign.

// Create Decimal Numbers with JavaScript

// We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats. When you compute numbers, they are computed with finite precision. Operations using floating points may lead to different results than the desired outcome. In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

// Finding a Remainder in JavaScript

// The remainder operator % gives the remainder of the division of two numbers, eg.
10 % 3 = 1
// In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2
// The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers

// Compound Assignment With Augmented Addition, Subtraction, Multiplication and

// In programming, it is common to use assignments to modify the contents of a variable
// Remember that everything to the right of the equals sign is evaluated first, eg. myVar = myVar + 5
// Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step. One such operator is the += operator, eg.
// The -= operator subtracts a number from a variable, eg. myVar = myVar - 5
// The *= operator multiplies a variable by a number
// The /= operator divides a variable by another number

// Escape Sequences in Strings

// String values in JavaScript may be written with single or double quotes as long as you start and end with the same type
// When you are defining a string you must start and end with a single or double quote
// In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote, eg "I said \"shut up! \""

// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \t	tab
// \r	carriage return
// \b	word boundary
// \f	form feed

// Concatenating Strings with Plus Operator

// In JavaScript, when the + operator is used with a String value, it is called the concatenation operator
// You can build a new string out of other strings by concatenating them together. Watch out for space
// Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself, eg. 'My name is Joseph,' + ' I concatenate.'
// We can also use the += operator to concatenate a string onto the end of an existing string variable
// Sometimes you will need to build a string. By using the concatenation operator + you can insert one or more variables into a string you're building

// Appending Variables to Strings

// Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals += operator

// eg. const anAdjective = "hard";
// let myStr = "Learning to code is ";
// myStr += anAdjective;

// Find the Length of a String

// You can find the length of a String value by writing .length after the string variable or string literal

console.log("Joseph Hills".length);

// This would display the value 12 in the console, including the space between the words
// Can use this to set a variable to display the number of characters in another variable

// eg. let lastNameLength = 0;
// const lastName = "Hills"
// lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String

// Bracket notation is a way to get a character at a specific index within a string
// Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing
// For example, the character at index 0 in the word Charles is C
// So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0]

// Understand String Immutability

// In JavaScript, String values are immutable, which means that they cannot be altered once created
// The only way to change myStr would be to assign it with a new value
// eg. let myStr = "Hoseph";
// myStr = "Joseph";

// Use Bracket Notation to Find the Nth Character in a String

// You can also use bracket notation to get the character at other positions within a string

const firstName = "Joseph";
const secondLetterOfFirstName = firstName[1];

// secondLetterOfFirstName would have a value of o

// Use Bracket Notation to Find the Last Character in a String

// In order to get the last letter of a string, you can subtract one from the string's length
// eg. const firstName = "Joseph";
// const lastLetter = firstName[firstName.length - 1];
// This would return lastLetter as h
// You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character

// Word Blanks

// You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs
// You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense
// eg. const myNoun = "dog";
// const myAdjective = "big";
// const wordBlanks = "My " + myNoun + " is very " + myAdjective + ".";

// Store Multiple Values in one Variable using JavaScript Arrays

// With JavaScript array variables, we can store several pieces of data in one place. You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry.

const sandwich = ["peanut butter", "cheese", "pickle"];

// Nest one Array within Another Array

// You can also nest arrays within other arrays. This is also called a multi-dimensional array.

const Teams = [["Spurs", 1], ["Brentford", 20]];

// Access Array Data with Indexes

// We can access the data inside arrays using indexes. Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.

const myArray = [50, 60, 70];
let myData = myArray[0];

// The variable myData will now be assigned the value 50

// Modify Array Data With Indexes

// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

const ourArray = [50, 40, 30];
ourArray[0] = 15;

// The array now has the value [15, 40, 30]. There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

// Access Multi-Dimensional Arrays With Indexes

// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array. Each additional pair of brackets refers to the next level of entries inside.

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

// In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and element has the value 11.

// Manipulate Arrays With push() pop() shift() unshift()

// An easy way to append data to the end of an array is via the push() function
// .push() takes one or more parameters and "pushes" them onto the end of the array

const arr1 = [1, 2, 3];
arr1.push(4);
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]]

// Another way to change the data in an array is with the .pop() function
// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable
// In other words, .pop() removes the last element from an array and returns that element
// Any type of entry can be popped off of an array - numbers, strings, even nested arrays

// eg. const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);

// The first console.log will display the value 6, and the second will display the value [1, 4]

// .shift() works just like .pop(), except it removes the first element instead of the last

// eg. const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();

// removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]]

// Not only can you shift elements off of the beginning of an array.
// You can also unshift elements to the beginning of an array i.e. add elements in front of the array
// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array

// eg. const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");

// After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"]

// Write Reusable JavaScript with Functions

// In JavaScript, we can divide up our code into reusable parts called functions
// eg. function functionName() {
//  console.log("Hello World");
// }

// You can call or invoke this function by using its name followed by parentheses, like this: functionName();
// Each time the function is called it will print out the message Hello World on the dev console
// All of the code between the curly braces will be executed every time the function is called

// Passing Values to Functions with Arguments

// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called
// When a function is defined, it is typically defined along with one or more parameters
// The actual values that are input (or "passed") into a function when it is called are known as arguments

// eg. function testFun(param1, param2) {
//   console.log(param1, param2);
// }

// This is a function with two parameters, param1 and param2
// Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World
// Inside the function, param1 will equal the string Hello and param2 will equal the string World
// Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments

// Return a Value from a Function with Return

// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

eg.function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);

// answer has the value 8. plusThree takes an argument for num and returns a value equal to num + 3

// Global Scope and Functions

// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code. Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

// Local Scope and Functions

// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);

// The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

// Global vs. Local Scope in Functions

// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

// The function myFun will return the string Head because the local version of the variable is present

// Understanding Undefined Value returned from a Function

// A function can include the return statement but it does not have to
// In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined

// eg. let sum = 0;

// function addSum(num) {
//   sum = sum + num;
// }

// addSum(3);

// addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined

// Assignment with a Returned Value

// Everything to the right of the assignment operator (=) is resolved before the value is assigned
// This means we can take the return value of a function and assign it to a variable
// Assume we have pre-defined a function sum which adds two numbers together

// eg. ourSum = sum(5, 12);

// This will call the sum function, which returns a value of 17 and assigns it to the ourSum variable

// Understanding Boolean Values

// Another data type is the Boolean. Booleans may only be one of two values: true or false
// They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive
// Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript

// Use Conditional Logic with If Statements

// if statements are used to make decisions in code
// The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses
// These conditions are known as Boolean conditions and they may only be true or false
// When the condition evaluates to true, the program executes the statement inside the curly braces
// When the Boolean condition evaluates to false, the statement inside the curly braces will not execute

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

// test(true) returns the string It was true, and test(false) returns the string It was false
// When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not
// Since it is true, the function returns It was true
// When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false

// Comparison with the Equality Operator

// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value
// The most basic operator is the equality operator ==
// The equality operator compares two values and returns true if they're equivalent or false if they are not
// Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left

// eg. function equalityTest(myVal) {
//   if (myVal == 10) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal
// Otherwise, the function will return Not Equal
// In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another
// This is known as Type Coercion. Once it does, however, it can compare terms as follows:

// 1   ==  1  // true
// 1   ==  2  // false
// 1   == '1' // true
// "3" ==  3  // true

// Comparison with the Strict Equality Operator

// Strict equality (===) is the counterpart to the equality operator (==)
// However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion
// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false

// eg. 3 ===  3  // true
// 3 === '3' // false

// In the second example, 3 is a Number type and '3' is a String type.

// Practice comparing different values

// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===)
// Let's do a quick review and practice using these operators some more
// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values
// However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other

// eg. 3 == '3' returns true because JavaScript performs type conversion from string to number
// 3 === '3' returns false because the types are different and type conversion is not performed

// In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

// typeof 3
// typeof '3'
// typeof 3 returns the string number, and typeof '3' returns the string string

// Comparison with the Inequality Operator

// The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

1 != 2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

// Comparison with the Strict Inequality Operator

// The strict inequality operator(!==) is the logical opposite of the strict equality operator.It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa.The strict inequality operator will not convert data types.

3 !== 3  // false
3 !== '3' // true
4 !== 3  // true

// Comparison with the Greater Than Operator

// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the greater than operator will convert data types of values while comparing.

5 > 3  // true
7 > '3' // true
2 > 3  // false
'1' > 9  // false

// Comparison with the Greater Than Or Equal To Operator

//The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the greater than or equal to operator will convert data types while comparing.

6 >= 6  // true
7 >= '3' // true
2 >= 3  // false
'7' >= 9  // false

// Comparison with the Less Than Operator

// The less than operator(<) compares the values of two numbers.If the number to the left is less than the number to the right, it returns true.Otherwise, it returns false.Like the equality operator, the less than operator converts data types while comparing.

2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false

// Comparison with the Less Than Or Equal To Operator

// The less than or equal to operator(<=) compares the values of two numbers.If the number to the left is less than or equal to the number to the right, it returns true.If the number on the left is greater than the number on the right, it returns false.Like the equality operator, the less than or equal to operator converts data types.

4 <= 5 // true
'7' <= 7 // true
5 <= 5 // true
3 <= 2 // false
'8' <= 4 // false

// Comparisons with the Logical And Operator

// Sometimes you will need to test more than one thing at a time.The logical and operator(&&) returns true if and only if the operands to the left and right of it are true. The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";

// This will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

// Comparisons with the Logical Or Operator

// The logical or operator(||) returns true if either of the operands is true.Otherwise, it returns false. The logical or operator is composed of two pipe symbols: (||).This can be found on my backslash \ key. The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

// will return Yes only if num is between 5 and 10(5 and 10 included).The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

// Introducing Else Statements

// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

// Introducing Else If Statements

// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
//Logical Order in If Else Statements

// Order is important in if, else if statements. The function is executed from top to bottom so you will want to be careful of what statement comes first. Take these two functions as an example. Here's the first:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

// And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

// While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0)
bar(0)

//foo(0) will return the string Less than one, and bar(0) will return the string Less than two.

//Chaining If Else Statements

// if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
  //    . . .
} else {
  statementN
}

// Golf Code Example

// In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname. Your function will be passed par and strokes arguments.Return the correct string according to this table which lists the strokes in order of priority; top(highest) to bottom(lowest):

Strokes	      Return
1	            "Hole-in-one!"
  <= par - 2	"Eagle"
par - 1	      "Birdie"
par	          "Par"
par + 1	      "Bogey"
par + 2	      "Double Bogey"
  >= par + 3	"Go Home!"

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return "Hole-in-one!";
  }
  else if (strokes <= par - 2) {
    return "Eagle";
  }
  else if (strokes == par - 1) {
    return "Birdie";
  }
  else if (strokes == par) {
    return "Par";
  }
  else if (strokes == par + 1) {
    return "Bogey";
  }
  else if (strokes == par + 2) {
    return "Double Bogey";
  }
  else {
    return "Go Home!";
  }
}

golfScore(5, 4);

// Selecting from Many Options with Switch Statements

// If you have many options to choose from, use a switch statement.A switch statement tests a value and can have many case statements which define various possible values.Statements are executed from the first matched case value until a break is encountered.

switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

// case values are tested with strict equality(===).The break tells JavaScript to stop executing statements.If the break is omitted, the next statement will be executed.

function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  return answer;
}

caseInSwitch(1);

// Adding a Default Option in Switch Statements

// In a switch statement you may not be able to specify all possible values as case statements.Instead, you can add the default statement which will be executed if no matching case statements are found.Think of it like the final else statement in an if/else chain. A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  // ...
  default:
    defaultStatement;
    break;
}

// Multiple Identical Options in Switch Statements

// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

// Cases for 1, 2, and 3 will all produce the same result.

// Replacing If Else Chains with Switch

//If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

// can be replaced with:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

// Returning Boolean Values from Functions

// You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value. Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

// Return Early Pattern for Functions

//When a return statement is reached, the execution of the current function stops and control returns to the calling location.

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

// The above will display the string Hello in the console, and return the string World.The string byebye will never display in the console, because the function exits at the return statement.

// Counting Cards
//In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck.This is called Card Counting. Having more high cards remaining in the deck favors the player.Each card is assigned a value according to the table below.When the count is positive, the player should bet high.When the count is zero or negative, the player should bet low.

Count Change	      Cards
  + 1	          2, 3, 4, 5, 6
0           7, 8, 9
  - 1	          10, 'J', 'Q', 'K', 'A'

// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision(Bet or Hold) should be separated by a single space. Example Outputs: -3 Hold or 5 Bet. Do NOT reset count to 0 when value is 7, 8, or 9. Do NOT return an array. Do NOT include quotes(single or double) in the output.

let count = 0;

function cc(card) {

  if (card >= 2 && card <= 6) {
    count++;
  }
  else if (card >= 7 && card <= 9) {

  }
  else {
    count--;
  }

  if (count > 0) {
    return count + " Bet"
  }
  else {
    return count + " Hold"
  }


}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Build JavaScript Objects

// You may have heard the term object before. Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties. Objects are useful for storing data in a structured way, and can represent real world objects, like a cat. Here's a sample cat object:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

// In this example, all the properties are stored as strings, such as name, legs, and tails.However, you can also use numbers as properties.You can even omit the quotes for single - word string properties, as follows:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

// However, if your object has any non - string properties, JavaScript will automatically typecast them as strings.

// Accessing Object Properties with Dot Notation

// There are two ways to access the properties of an object: dot notation(.) and bracket notation([]), similar to an array. Dot notation is what you use when you know the name of the property you're trying to access ahead of time. Here is a sample of using dot notation(.) to read an object's property:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

// prop1val would have a value of the string val1, and prop2val would have a value of the string val2.

// Accessing Object Properties with Bracket Notation

//The second way to access the properties of an object is bracket notation([]).If the property of the object you are trying to access has a space in its name, you will need to use bracket notation. However, you can still use bracket notation on object properties without spaces. Here is a sample of using bracket notation to read an object's property:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

// myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise. Note that property names with spaces in them must be in quotes(single or double).

// Accessing Object Properties with Variables

//Another use of bracket notation on objects is to access a property which is stored as the value of a variable.This can be very useful for iterating through an object's properties or when accessing a lookup table. Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

// The string Doberman would be displayed in the console. Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

// Updating Object Properties

// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update. For example, let's look at ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Since he's a particularly happy dog, let's change his name to the string Happy Camper.Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.

// Add New Properties to a JavaScript Object

//You can add new properties to existing JavaScript objects the same way you would modify them. Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";

// or

ourDog["bark"] = "bow-wow";

// Now when we evaluate ourDog.bark, we'll get his bark, bow-wow. Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Delete Properties from a JavaScript Object

//We can also delete properties from objects like this:

delete ourDog.bark;

// Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// After the last line shown above, ourDog looks like:

{
  "name": "Camper",
    "legs": 4,
      "tails": 1,
        "friends": ["everything!"]
}

// Using Objects for Lookups

// Objects can be thought of as a key / value storage, like a dictionary.If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range. Here is an example of an article object:

const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];

// articleAuthor is the string Kaashan Hussain, articleLink is the string https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/, and valueLookup is the string How to create objects in JavaScript.

// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }

  result = lookup[val];

  return result;
}

phoneticLookup("charlie");

// Testing Objects for Properties

// Sometimes it is useful to check if the property of a given object exists or not.We can use the.hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

// The first hasOwnProperty returns true, while the second returns false.

// Manipulating Complex Objects

// Sometimes you may want to store data in a flexible Data Structure.A JavaScript object is one way to handle flexible data.They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

// Here's an example of a complex data structure:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
      "CD",
      "Cassette",
      "LP"
    ],
    "gold": true
  }
];

// This is an array which contains one object inside.The object has various pieces of metadata about an album.It also has a nested formats array.If you want to add more album records, you can do this by adding records to the top level array.Objects hold data in a property, which has a key - value format.In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk. Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

// Accessing Nested Objects

// The sub - properties of objects can be accessed by chaining together the dot or bracket notation. Here is a nested object:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;

// ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.

// Accessing Nested Arrays

// As we have seen in earlier examples, objects can contain both nested objects and nested arrays.Similar to accessing nested objects, array bracket notation can be chained to access nested arrays. Here is an example of how to access a nested array:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
// ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

// Record Collection

//You are given an object literal representing a part of your musical album collection.Each album has a unique id number as its key and several other properties.Not all albums have complete information. You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop(like artist or tracks), and a value.Complete the function using the rules below to modify the object passed to the function. Your function must always return the entire record collection object. If prop isn't tracks and value isn't an empty string, update or set that album's prop to value. If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it. If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array. If value is an empty string, delete the given prop property from the album.   Note: A copy of the recordCollection object is used for the tests.

