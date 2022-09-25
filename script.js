// A.

// 1. How do we assign a value to a variable? 

// To assign a value to a variable we declare a statement and then use the = operator followed by the value.

// 2. How do we change the value of a variable?

// Certain variables like let and var can be reassigned and manipulated to change its data. A const variable you would have to make changes to the variable itself.

// 3. How do we assign an existing variable to a new variable?

// You can use the equal operator = to assign the variable to a new variable with a new.

// 4. Remind me, what are declare, assign, and define?

// Declaring is saying something exists, Assigning is designating value to a specfic place, Defining is showing how something is used

// 5. What is pseudocoding and why should you do it?

// Pseudocode is drafting a loose form of code to help better implement and approach how the code will work and look like

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// Whenever you have a difficult solution that needs to be broken down or even explained to someone else. Pseudocoding is usually done at the start of a project to help take the appropriate path.

// B.

// 1.

let firstVariable = 'Hello World'

firstVariable = 11

secondVariable = firstVariable

console.log(secondVariable)

secondVariable = 'Hello there'

console.log(secondVariable)

console.log(firstVariable)

The first variable is equal to 11

// 2. 

let yourName = 'Cody Clark'

let intro = 'Hello, my name is ' + yourName

// 3. 

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a !== b !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a == a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// D.

// 1. 

let farmAnimal = "cow"

// 2. Write code that will print out "mooooo" if the it is equal to cow
// 3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// 4. Commit

farmAnimal = "chicken"
if (farmAnimal == "cow") {
    console.log("mooooo")
} else if (farmAnimal !== "cow") {
  console.log("Hey! You're not a cow.")
}

// E. 

// 1. 

let ageOfPerson = 17

// 2.

if (ageOfPerson >= 16) {
    console.log("Here are the keys!")
} else if (ageOfPerson <= 16) {
    console.log("Sorry, you're too young.")
}

//  II. 

//  A.

//  1. 

 for(let i = 0; i <= 10; i++) {
    console.log(i)
 }

//  2. 

 for(let i = 10; i <= 400; i++) {
    console.log(i)
 }

//  3. 

 for(let i = 12; i < 4000; i += 3) {
   console.log(i);
}

//  B.

//  1. 
//  2. 

 for(let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i + ' <-- is an even number')
    }
 }

//  C.

//  1. 
 
  for(let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('I found a ' + i + '. High five!' + ' Three is a crowd')
    } else if (i % 5 == 0) {
        console.log('I found a ' + i + '. High five!')
    } else if (i % 3 == 0) {
        console.log('I found a ' + i + '. Three is a crowd')
    }     
 }

//  D. 

//  1.

let bankAccount = 0

 for(let i = 1; i <= 10; i++) {
    bankAccount += i
    
}
console.log(bankAccount)

// 2. 

let bankAccountTwo = 0

for(let i = 1; i <= 100; i++) {
    bankAccountTwo += i * 2
    
}
console.log(bankAccountTwo)

// III.

// A.

// 1. 

Elements

// 2. 

No

// 3. 

Types of food

// B.

// 1. 

let quotes = ['Luke I am your father', 'Hello there', 'It's Morbin' time']

// C.
 
const randomThings = [1, 10, "Hello", true]

// 1. 

console.log(randomThings[0])

// 2. 

randomThings[2] = 'World'

// 3. 

console.log(randomThings)

// D.

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 1. 

console.log(ourClass[2])

// 2. 

ourClass[4] = 'Octocat'

// 3.

ourClass.push('Cloud City')

console.log(ourClass)

// E.

const myArray = [5, 10, 500, 20]

// 1. 

myArray.push("Egon", "Hello")

// 2. 

myArray.shift()

console.log(myArray)

// 3. 

myArray.unshift("Bob Marley")

console.log(myArray)

// 4. 

myArray.pop()

console.log(myArray)

// 5. 

myArray.reverse()

console.log(myArray)

// F. 

// 1. 

// 2. 

let number = 99

if (number < 100) {
  console.log('little number')
} else (number >= 100) {
    console.log('beeg number')
}

// G. 

// 1. 

// 2. 

// 3. 

let number = 11 

if (number < 5) {
  console.log('little number')
} else if (number > 10) {
  console.log('big number')
} else {
  console.log('monkey')
}

// H.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1. 

console.log("Kristyn is rocking that " + krystynsCloset[2] + " today!")

// 2. 

kristynsCloset.splice(6, 0, 'raybans')

console.log(kristynsCloset)

// 3. 

kristynsCloset.splice(5, 1, 'stained knit hat')

console.log(kristynsCloset)

// 4.

console.log(thomsCloset[0][0])

// 5. 

console.log(thomsCloset[1][1])

// 6. 

console.log(thomsCloset[2][1])

// 7. 

console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1])

// 8. 

thomsCloset[1][2] = "Footie Pajamas"

console.log(thomsCloset)

// IV. 

// A. printGreeting

let printGreeting = function(name) {
  console.log('Hello there, ' + name)
}

console.log(printGreeting('Cody'))

// B. printCool

let printCool = function(name) {
  console.log(name + " is cool")
}
console.log(printCool('Cody'))

// C. calculateCube

let calculateCube = function(number) {
  console.log(number * number * number)
}

console.log(calculateCube(5))

// D. isVowel

let isVowel = function(vowel) {
  if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
    return true
  } else {
    return false
  }
}
  console.log(isVowel('a'))

// E. getTwoLengths 

let arr = []

let getTwoLengths = function(stringone, stringtwo) {
  arr.push(stringone.length)
  arr.push(stringtwo.length)
  return arr
}

console.log(getTwoLengths("Hank", "Hippopopalous"))

// F. getMultipleLengths

let arr = ["hello", "what", "is", "up", "dude"]
let arrOfNumbers = []
let getMultipleLengths = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arrOfNumbers.push(arr[i].length)
  }
  return arrOfNumbers
}

console.log(getMultipleLengths(arr));

// G. maxOfThree 

let varOne = 6
let varTwo = 9
let varThree = 1
let largest


if (varOne > varTwo && varOne > varThree) {
  largest = varOne;
} else if (varTwo > varOne && varTwo > varThree) {
  largest = varTwo;
} else {
  largest = varThree;
}


console.log(largest)

H. printLongestWord

let arr = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]
let longestWord = []
let printLongestWord = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i]
    }
  }
  return longestWord
}

console.log(printLongestWord(arr));

// Objects

// A. 

// 1. 

// 2. 

let user = {
name: 'Cody',
email: 'hello@gmail.com'
age: 28,
purchased: [],
}

// B. 

// 1.

user.email = 'hi@gmail.com'

// 2.

user.age++

// C. 

// 1.
 
user.location = "Texas"

// D.

// 1. 

user.purchased.push("carbohydrates")

// 2.

user.purchased.push("peace of mind")

// 3.

user.purchased.push("Merino jodhpurs")

// 4.

console.log(user.purchased[2])

// E.

// 1.

user.friend = {
    name: "Grace Hopper",
    age: 85,
    purchased: [],
    location: 'Texas'
}

// 2.

console.log(user.friend.name)

// 3.

console.log(user.friend.location)

// 4.

user.friend.age = 55

// 5.

user.friend.purchased.push("The One Ring")

// 6.

user.friend.purchased.push("A latte")

// 7.

console.log(user.friend.purchased[1])

// F.

// 1.

for(let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i])}
}

// 2.

for(let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i])}

// G.

// 1.

let updateUser = function() {
  user.age = ++user.age
  user.name = user.name.toUpperCase()
}

updateUser()

console.log(user)

// 2.

let oldAndLoud = function(person) {
  person.age = ++person.age
  person.name = person.name.toUpperCase()
}

oldAndLoud(user.friend)

console.log(user)

console.log(user.friend)























 


*/