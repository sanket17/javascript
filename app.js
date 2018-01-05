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

// function statement
// It gets memory while compiling
// but it is excuted when greet() line is encountered
/* function greet(){
    console.log('Hiee');
}

greet();

// function expression
// it gets memory while performing its excution i.e on finding the var gre..

var greetFunc = function(){
  console.log('Hiee');  
};

greetFunc();
*/
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

// semicolon are optional in core JS
// it is because SYNTAX PARSER, according to its logic where ever it feels it need to insert semicolon(if it is not present) then it adds 
// automatically by its own, hence it is 

//example - if syntax parser finds a \r(enter) after return keyword, it will automatically add semicolon after it
// hence in JS syntax we find that {} braces are placed on same line
// like function() {}
// rather than function()
//              {}
/*

function getPerson(){
    return {
        firstname: 'sanket'
    }
}

console.log(getPerson());
-------------------------------------------------------------------------------------------------------------------------------------------
*/

// WHITESPACE : Invisible characters that create literal 'spcae' in your written code e.g> Carriage return, tabs, space

// Syntax parser removes extra whitespace that we add in the form of comment
//-----------------------------------------------------------------------------------------------------------------------------------------

// Immediately Invoked Function Expressions (IIFE)S

// IIFE is to call/invoke a function soon after its creations

// Consider the following example
/*
var greetFunc = function(name){
    console.log('Hello '+ name);
};

console.log(greetFunc);

// to invoke the above functio I need to call 
// greetFunc variable now contains function code

greetFunc('Sanket');

// Consider the bellow eaxmple again


var greetFunc1 = function(name){
    return 'Hello ' + name;
}('Sanket');


console.log(greetFunc1);

// In the above code when the function is invoked as soon as it is created
// so the variable greetFunc contains a string "Hello Snaket" rather than function code

// Using IIFE we can create a stand-alone function
3; // This is vslid expression in JS
"Helo"; // This is also valid expression

//but

//function(name){
//    return 'Hello' + name;
//};      // it will give me an error

// but if I enclose it with () like
// the bellow code is IIFE expression
// through this we can trick SYNTAX PARSER and we can create a function and call it immeduately after creation and run it
// it is like creating and invoking function on the fly.

( function(name){
   console.log('Hello '+ name);
}('Sanket'));

//It can also be defined as

( function(name){
   console.log('Hello '+ name);
})('Sanket');

-------------------------------------------------------------------------------------------------------------------------------------------
*/

// IIFE and Safe Code

//( function(name){
//    var greeting = 'Hello';
//   console.log(+ name);
//}('Sanket'));
//

//-----------------------------------------------------------------------------------------------------------------------------------------

// Understanding Closures

// Closures are the features in JS , They help us to call the function in order they are define no matter whether their execution stack persisit or not


/*
function greet(whattosay){
    
    return function(name){
        console.log(whattosay + ' ' + name);
    }
}

greet('Hi');
greet('Hi')('Tony'); //o/p  -Hi Tony

var sayHi = greet('Hi');
sayHi('Tony'); //o/p  -Hi Tony
*/
// Explanation for the above code :
/*
1. When the scripts gets runs Global Execution stacks gets loaded and the execution stack for greet() function gets loaded, after this memory space for whattosay variable get alloted
2. On encountering the return statement the code for anonymous function gets loaded in memory but at this point execution stack of function greet() gets removed, but this doesnot removes the space alloted to the whattosay variable.
3. When it encounters var sayHi , it gets loaded in global execution stack and then execution stack of the anonymous function gets loaded
4. On getting console.log() line it see whattosay variable, then as greet() was parent function so this anonymous function points to the memory location of the variable used by greet() function .
5, This referencing of inner fuction with its parent function variable memory is called as closure.

-------------------------------------------------------------------------------------------------------------------------------------------

*/

// Understanding Closure - Part 2
/*
function buildFunctions(){
    
    var arr = [];
    
    for(var i = 0; i<3 ; i++){
        arr.push(
            function(){
                console.log(i);
            }
        );
    }
    
    return arr;
}

var fs  = buildFunctions();

fs[0](); //op - 3
fs[1](); //op - 3
fs[2](); //op - 3
*/
// In closoure, though the parent execution may finished its execution but memory used for its variable and their values are not removed(Until GC collects them), hence when child function cannot find  particular value for a variable it search in the upper scope i.e its parent scope and then global.
/*
The above example can be considered in following scenario:-
Assume that there are 3 children and each of them is ask to tell them their father's age.
So they will tell the present age of their father and not the age that was there when they were born.

Free Variables - These are the variables which are outside the functions but are accessible.
for example  : Consider arr present situation, it is now outside of the function stack frame but is still accessible using 'fs'.
*/
/*
function buildFunctions2(){
    
    var arr = [];
    
    for(var i = 0; i<3 ; i++){
        let j = i;
        arr.push(
            function(){
                console.log(j);
            }
        );
    }
    
    return arr;
}

var fs2  = buildFunctions2();

fs2[0](); //op - 0
fs2[1](); //op - 1
fs2[2](); //op - 2
*/
/*
In the above example j will be created on every loop call and thus will retain the loopCount value at the time of its creations
Hence the anonymous function will be calling different versions of J, depending on its loop execution.
The above code can also be modified as follows using IIFE
*/

/*function buildFunctions3(){
    
    var arr = [];
    
    for(var i = 0; i<3 ; i++){
        arr.push(
            function(j){
                console.log(j);
            }(i)
        );
    }
    
    return arr;
}

var fs3  = buildFunctions3(); */

//fs3[0](); //op - 0
//fs3[1](); //op - 1
//fs3[2](); //op - 2

/*
-------------------------------------------------------------------------------------------------------------------------------------------
*/
// FUNCTION FACTORIES
// Factory - Means function that makes other things ready or forming
/*
function makeGreeting(language){
    return function(firstName, lastName){
        if(language === 'en'){
            console.log('Hello '+ firstName + ' '+ lastName);
        }
        if(language === 'es'){
            console.log('Hola '+ firstName + ' '+ lastName);
        }
    }
}

var greetEnglish = makeGreeting('en');

var greetSpanish = makeGreeting('es');

greetEnglish('Sanket','Tikam');
greetSpanish('Sanket','Tikam');
*/
/*
Explanation for the above code:-
1. makeGreeeting() function returns a anonymous function
2. variable greetEnglish, greetSpanish and makeGreeting function are loaded when global execution context gets loaded.
3. On execution of line no. 605, makeGreeting functions gets called loading its execution stack with language set to 'en'.
4. After this execution stack for makeGreeting() gets removed, leaving behind free variable language='en'.
5. On execution of line no. 607 makeGreeting functions gets called loading its execution stack with language set to 'es'.
6. After this execution stack for makeGreeting() gets removed, leaving behind free variable language='es'.
7. On execution of line 609 stack frame for anonymous function pointed by language - en gets loaded, it only happens due to closure feature.
8. Same thing happen on execution of line 610.
9. Hence though greetEnglish and greetSpanish are pointing to the same function still due to closure property different stack frame gets loaded for respective function call.

-------------------------------------------------------------------------------------------------------------------------------------------
*/

// Closures and Callbacks

function sayHiLater(){
    var greeting = 'Hi';
    setTimeout(function(){
        console.log(greeting);
    },3000)
}

sayHiLater();

/*
Syntax for setTimeout():

setTimeout(
function(){},   A function that defines what task is to be done
timerVale);     A timer value in millisecond that defines how much millisec it should wait before that task.

Callback can be stated as  - I tell the Js engine that take setTimeout function and execute it after 3sec when ever you are free.
Callback Function : A function you give to  another function, to be run when the other function is finished. Means I create a function A() and give it B(), and when A() finishes its execution it calls B().
*/