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
