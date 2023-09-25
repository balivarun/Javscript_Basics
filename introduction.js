/*
-> javascript is usually designe for works on browser
every browser has its own javscript engine which can run 
the javascipt code.
-> for eg:
chrome:-v8
firefox:-spidermonkey
microsoft edge uses chakra.

->then node came in the field it is the c++ programm
that include google v8 engine.
*/

//->variables declarartion for eg:
let name="varun";
console.log(name);

const number=5.8;
/* number=8; in this statement it will give the error because
we are redefineing the number but it a const type it can only be in the let type variables or var type variable.
*/
console.log(number);

/*
primitives / value types are:
string  :- let name='varun';  //string literal
number :- let number=30;  //number literal
boolean :- let boolean=false: //boolean literal is of true or false.
undefined :- let firstname; // not defined the value of variables is undefined.
null :- let salary=null: // used if we have to clear the value of variables.
*/

// java script is dynamically typed language means we can change the type of the varaibles dynamically
// we can check type of variables by using the typeof operator.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Referance type:-
object
array
function
*/

//objects:- to make the code clear and clean
let person= {
    name:'varun',
    age:21,
};

//  to change the value of name or age we have two notatiom
//dot notation
// person.name='bali';
console.log(person.name);

//bracket notation
// person['name']='varun1';
console.log(person['name']);


//ARRAYS:-it is an data structure to represent the list of an items.
// In javascript arrays is of object type. 
let color=['red','blue','yellow'];
color[3]='voilet';
console.log(color);
console.log(color[3]);
console.log(color.length);


//Function:-
//perform the specific task.
function greet(name, lastname){
    console.log('Hello '+ name + ' ' +lastname);
}
greet('Varun','bali');//varun is arguement which is passed to function greet and name is the parameter of the function.


//calculating a value funtion.
function square(number){
    return (number*number);
}
console.log(square(5));

/*
Ryan Dahl is creater of nodejs.
-> it toke the chrome v8 engine which is fastest javascript engine in better way in c++ program called as node.
-> node is not a programming language 
-> nodejs is a run time environment for executing javascript code.
*/


 




























