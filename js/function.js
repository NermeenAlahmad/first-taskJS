/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune (jobTitle,
   geographicLocation,partnerName, numberOfChildren){
    return ("You will be a" + jobTitle + "in" + geographicLocation + "and married to" + partnerName + "with" + numberOfChildren);
  }
  console.log(tellFortune(" software engineer", " Jordan", " Alice", " 3 kids"));

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age){
  var dogAge = 7 * age;
  return("Your doggie is " + dogAge + " years old in dog years!");
}
  console.log(calculateDogAge(5));

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay){
var maxAge=100;
var need= (365*amountPerDay) * (maxAge-age);
return("You will need " + need + " to last you until the ripe old age of " + maxAge)
}
console.log(calculateSupply(22,3));
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name){
  return ("Hello " + name);
}
console.log(greet("Nermeen"));

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

// 1- x is not defined, they will be "cat" in return
// 2- We cannot start the variable name with a number
// 3-We cannot start the variable name with a number and single quote


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x){
  return (2*x);
}

function double2(x){
  return(2*x);
}

function double3(x){
  return(2*x);
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(num){
return(num**3);
}
console.log(cube(4));

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1, num2){
  return(num1*num2);
}
console.log(multiply(3,4));
console.log(multiply(5,4));

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age){
  var x = 20-age;
  let result;
  if (age >= 20 ) {
    result = 'yes you can';
  }
  else {
    result = 'please come back after ' + x + ' years to get one';
  }
  return result;
}
console.log(canIGetADrivingLicense(21));
console.log(canIGetADrivingLicense(17));
console.log(canIGetADrivingLicense(20));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2){
  let result;
if (str1 == str2 ) {
  result = 'true'
} else{
  result = 'false'
} 
return result;
}
console.log(sameLength("tree".length ,"care".length ));
console.log(sameLength("tree".length ,"toy".length ));

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(num1, num2){
  let result;
if (num1 > num2 ) {
  result = num1;
} else {
  result = num2;
}
return result;
}
console.log(largerNubmer(5,6));
console.log(largerNubmer(5,3));

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(num1, num2, num3){
  let result;
if (num1 < num2 < num3 ) {
  result = num1;
}
if (num2 < num3) {
  result = num2;
} else {
  result = num3;
}
return result;
}
console.log(smallerNubmer(8,7,6));
console.log(smallerNubmer(5,99,3));
console.log(smallerNubmer(5,3,3));

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(str1,str2,str3,str4,str5) {
  let arr = [str1, str2, str3, str4, str5];
  let short = Math.min(str1.length, str2.length, str3.length, str4.length, str5.length);

  for(let x=0; x < 5; x++){
    if (arr[x].length == short) {
      return arr[x];
    }
  }
}
console.log(shorterString("air","school","car","by","github"));
console.log(shorterString("air","tr","car","by","github"));
console.log(shorterString("by","tr","car","air","github"));
console.log(shorterString("air","by","car","school","github"));
console.log(shorterString("air","tr","by","car","github"));
console.log(shorterString("air","tr","car","github","by"));

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1,str2,str3,str4) {
  let arr = [str1, str2, str3, str4];
  let longer = Math.max(str1.length, str2.length, str3.length, str4.length);

  for(let x=0; x < 5; x++){
    if (arr[x].length == longer) {
      return arr[x];
    }
  }
}
console.log(longerString("air","school","car","github"));
console.log(longerString("air","schoo","car","github"));
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(num){
  let result;
if (num % 2 === 0) {
  result = 'true';
} else {
  result = 'false';
}
return result;
}
console.log(isEven(1));
console.log(isEven(2));

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(num){
  let result;
if (num % 2 === 0) {
  result = 'false';
} else {
  result = 'true';
}
return result;
}
console.log(isOdd(4));
console.log(isOdd(5));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(num){
  let result;
if (num > 0) {
  result = 'positive';
} else {
  result = 'non positive';
}
return result;
}
console.log(positive(4));
console.log(positive(-5));

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName, lastName){
return (firstName + lastName);
}
console.log(fullName("Adam ","McCallen"));
console.log(fullName("Alex ","Mercer"));
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(x1,x2,x3,x4,x5){
return ((x1+x2+x3+x4+x5)/5);
}
console.log(average(1,2,3,4,5));
console.log(average(5,7,9,3,5));
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber(){
}
console.log(Math.random());
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(max, min){
  return Math.random() * (max - min) + min;
}
console.log(randomBetweenNumbers(1,8));
console.log(randomBetweenNumbers(3,100));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(mark){
  let result;
  if ( mark >= 95) {
    result = 'A'
  } else if (mark >= 85) {
    result = 'B'
  } else if (mark >= 70) {
    result = 'C'
  } else if (mark >= 50) {
    result = 'D'
  } else {
    result = 'F'
  }
  return result;
}
console.log(scoreInUniversty(96));
console.log(scoreInUniversty(3));
console.log(scoreInUniversty(71));
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let num=0;
function counter(){
  return ++num
}
console.log(counter());
console.log(counter());
console.log(counter());
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter() {
  console.log(`${num} and the counter reset now `)
  return num=0;
}
console.log(resetCounter());
console.log(counter());
console.log(counter());
console.log(resetCounter());