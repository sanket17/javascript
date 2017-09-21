/*

Introduction to objets and . operator
var person = new Object();

person.firstname = "Sanket";
person.lastname = "Tikam";

console.log(person);

person["middlename"] = "Satish";

console.log(person.middlename); */

// always use . operator rather using ['']
//-----------------------------------------------------------------------------------------------------------------------------------------


// Object Literals

//var person = new Object();

// can be created in short cut/ shorthand operator like

//var person = { name1: 'value', name2 : 'value2'};
// This is also called as one line code
// use , to separte multiple key-value pairs
/*
var Tony = {  
                firstname : 'SANKET',
                lastname : 'Tikam',
                address : {
                            city: 'Pune'                
                        }
            };
console.log(Tony);

// we can also create object on fly

function greet(person){
    console.log('Hi '+  person.firstname);
}

greet(Tony);

greet({
    firstname:'Sachin',         // This is called creating object on fly
    lastname:'Tendulkar'
});
-------------------------------------------------------------------------------------------------------------------------------------------
*/

// Faking Namespaces

// Js does not have namespaces
/*
var greet = 'Hello';
var greet = 'Hola';

console.log(greet); //o/p - Hola

// as we don't have namespace is js we can over come it by using objects and object literals

var english ={};
var spanish ={};

english.greet = 'Hello';
spanish.greet = 'Hola';

console.log(english);
console.log(spanish);

// This is called FAKEING NAMESPACE in Javascript
// This type is seen in various framework libraries to avoid similar namespace conflict.

// as you know usig object literals we can create name-value pair for 

english.greet = 'Hiee';

// but, if we create
 
//english.greeting.greet = 'Hiee';
 // it will give error as english.greeting is undefined
// if we deifine it as 
english.greeting = {};
english.greeting.greet = 'Hiee';

console.log(english);

-------------------------------------------------------------------------------------------------------------------------------------------
*/

// JSON and Object Literals
/*
var person = {
    firstName : 'Sanket',
    lastName : 'Tikam'          // This is a javascript object
}


// above object in xml looks like

//                    <person>
//                    <firstName>Sanket</firtName>
//                    <lastName>Tikam</lastName>
//                    </person>

// in tha above syntax firstName and lastName are called as properties

// The same object in JSON looks like
//                    {
//                    "firstName" : "Sanket",
//                    "lastName"  :   "Tikam"
//                    }

// Over the internet eariler data was send using XML format
// But when it comes for downloading part or low bandwidth part 'property' were defined twice in syntax which took more character for // // downloading

// Hence to overcome this problem JSON was introduce, and it look similar as that of Object literal in JS except with one change that JSON // properties are enclosed in " " .

// JS contains two function which can transform to and from the JSON object to JS object and vice-versa

// JS Object to JSON Object

console.log(JSON.stringify(person));

// JSON OBJECT to JS Object

var jsObject = JSON.parse('{"firstName" : "Tony" , "lastName" : "Parker"}');

console.log(jsObject);
-------------------------------------------------------------------------------------------------------------------------------------------
*/

// Functions are Objects

// First Class Functions : Everything you can do with other (data)types you can do with functions

// Assign then to variables , pass them around, create them on fly.

// Function in JS are treated as like an Object
// As object has property and methods , Function can also have primitive type, Object and Other function linked to it
// The code that we write in the function in stored in a 'CODE' property which has method invocable() i.e we can run that code when we want
// Aslo function name can be anonymous, 
// Functions are also stored in special memory
/*
function greet(){
    console.log('hi');
}

greet.language = "English"; // property attached to the function

console.log(greet); //  we will get thge code of function as o/p

console.log(greet.language);

greet(); // looks like

//        function = {
//            Name : 'greet',
//            CODE : 'console.log('hi');',
//            language : 'English',
//            Invocable(), // to run CODE property
//        }
-------------------------------------------------------------------------------------------------------------------------------------------
*/

// Function Statements and Function Expressions

//var a;
//// Anonymous Function are those function which does not have anything in their name property.
//
//var anonymousGreet = function(){        // anonymous Function
//    console.log('hi');
//}
//
//anonymousGreet();
//-----------------------------------------------------------------------------------------------------------------------------------------

// By value and by reference

// By value concept
/* var a = 3; // address 100

// Suppose I pass this value to a function or assign it to another variable like

var b = a;

// Here b's address will be 200 and new copy of value 3 will be placed at that location, this is called as By Value in JS.
// The above holds true on primitive data types

// Now, let

//a = {
//    'firstname' : 'sanket'
//}

// a is pointing to a object which is at say 100 addresss location
// now,

//b = a;  or pass 'a' to a function

// b will also point to 100 address location. This is called By Reference in JS
// All object interact by using by refernce in JS

a = 2;
console.log(a);     // example of By Value
console.log(b);

// Example for By Reference (all objects includings functions)

var c= { greeting:'hi'};

var d;

d = c;

c.greeting = 'hello'; // mutate

// Mutate : To change something
// Immuatble  :It can't be changed

console.log(c);
console.log(d);

// by reference (even as parameters)

function changeGreeting(obj){
    obj.greeting = 'Hola'; //mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memeory space (new address)

c = {greeting: 'Howdy'}; // as it new object so C is pointing to different spot in memory
console.log(c);
console.log(d);

// in JS all primitive type BY VALUE
// All object BY REFERENCE

------------------------------------------------------------------------------------------------------------------------------------------*/

// OBJECTS, FUNCTIONS AND 'this'
/*
function a(){
console.log(this);
}

a(); // this will point to global window object

var c = {
    name: 'The c object',       // property
    log : function(){           // method
        
        // to solve ** problem
        
        var self = this;
        
         self.name = 'Updated C object'; 
        console.log(self);      // this over here will point to 'c' object
        
        // as THIS was pointing to C obj so we can mutate its property using this 
        
        function setName(Name){
            self.name = Name;
            console.log(self);          // THIS over here is pointing to global WINDOWS object rather pointing to C object **
        }
        
        setName('Updated Again C');
        console.log(self);
        
        console.log(this);
    }
}

c.log();

// this in JS alwasys points to global windows object unless it is called in a method which is define in function exression in object literal as deine above
-------------------------------------------------------------------------------------------------------------------------------------------
*/

// Arrays collection of anything

/*var arr = [1, 2, 3];    // array literal same as object literal except brackets

// In other programming languages Array are used to hold collection of HOMOGENOUS elements
// But in JS array can hold collection of hetrogenous element

arr = [
    1,
    false,
    {
        firstName: 'sanket',
        lastName: 'Tikam'
    },
    function(){
        console.log(this);
    },
    "Howdy Sanket"
];

console.log(arr);

// reference  aparticular element

arr[3](); 

-------------------------------------------------------------------------------------------------------------------------------------------*/

// arguments and SPREAD

// is a special keyword set by JS engine while excecuting the function 
// conatin the list fo all the values of all the parameters that we pass to the function.
// arguments act enough like array

/*
function greet(firstname, lastname, language){
    
    language = language || 'en';  // this is way to set default parameter
    
    if(arguments.length === 0){
        console.log('Missing parameters');
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log(arguments[2]);
    console.log('-----------------');
}

greet(); // error in other languages but not in JS (concept of hoisting)

greet('John');
greet('John','Doe');
greet('John','Doe','English');
-------------------------------------------------------------------------------------------------------------------------------------------
*/

// FUNCTION OVERLOADING

// This feature is not in JS as JS treats function as objects and JS has first class fucntions

//-----------------------------------------------------------------------------------------------------------------------------------------

// Synatx Parser

// to convert our JS code into machine language JS engine uses various codes
// One of it is syntax parser
//Syntax parser takes the code and checks for its validity
// its checks character by character

//-----------------------------------------------------------------------------------------------------------------------------------------

// Automatic Semicolan Insertion



