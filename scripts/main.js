// ARROW FUNCTIONS & SCOPE /////////////////////////////////////////////////////

let deliveryBoy = {
  name: 'John',

  handleMessage: function(message, handler) {
    handler(message);
  },
  receive: function() {
    this.handleMessage('Hello ', message => console.log(message + this.name));
  }
}
// deliveryBoy.recieve();


// DEFAULT VALUES //////////////////////////////////////////////////////////////
function greet(greeting, name = 'John') { //adding a default value to the name variable
  console.log(greeting + ', ' + name);
}
// greet('Hello');

// DEFAULT FUNCTIONS
function receive(complete = () => console.log('complete')) {
  complete();
}
// receive();


// DESTRUCTURING/SHORTHAND PROPERTIES  /////////////////////////////////////////

let firstName = 'John';
let lastName = 'Lindquist';

let person = {firstName, lastName}; //an example of destructing
// console.log(person);

let mascot = 'Moose';

let team = {person, mascot};
// console.log(team);


// OBJECT ENHANCEMENTS /////////////////////////////////////////////////////////

var color = 'red';
var speed = 10;

var car = {
  color,
  speed,
  go() { // shorthand way of having a function inside an object
    console.log('vroom');
  }
};

// console.log(car.color);
// console.log(car.speed);
// car.go();


// ES6 SPREAD OPERATOR /////////////////////////////////////////////////////////

let first = [1, 2, 3];
let second = [4, 5, 6];

function addThreeThings(a, b, c) {
  let result = a + b + c;
  console.log(result);
}

// addThreeThings(...first); // spreading out an array into their individual elements
// addThreeThings(...second);


// TEMPLATE LITERALS ///////////////////////////////////////////////////////////

var salutation = 'Hello';
var greeting = `${salutation}, world!`; // using a template literal to access the a variable, notice the use of backticks instead of quotations

// console.log(greeting);

function tag(strings, ...values) {
  if (values[0] < 20) {
    values[1] = 'awake';
  } else {
    values[1] = 'tired';
  }
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

var message = tag`It's ${new Date().getHours()} I'm ${''}`;
// console.log(message);


// DESTRUCTURING ASSIGNMENT ////////////////////////////////////////////////////

var {color} = {
  color: 'blue'
}
// console.log(color);

function generateObj() {
  return {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
  }
}
var {name, state} = generateObj();
console.log(name);
console.log(state);

var people = [
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
]

people.forEach(({firstName}) => console.log(firstName))

var [,Skyler] = people; // skip the first object, name the second object 'Skyler'

function logEmail({email}){ // grab the email key/value of the people object
  console.log(email);
}

logEmail(Skyler) // print out the email value of the second object that we named 'Skyler'


// ES6 MODULES /////////////////////////////////////////////////////////////////

import { sumTwo } from `math/addition`;

console.log(
  '2 + 3',
sumTwo(2, 3));
