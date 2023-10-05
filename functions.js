//rest opertor in functon ...........
// function calculate(...num1){   // where ... is the rest opertor.
//     return num1;
// }
// console.log(calculate(200,300,499,400,20));
/* to print multile value of passing in function if the parameter 
of the function match the passing parameter then we use the rest opertor. */

// function calculate(num1,num2,...num3){   // where ... is the rest opertor.
//     return num3;
// }
// console.log(calculate(200,300,499,400,20))// here the first two value will assign to the num1 and num2 and rest of the value will be print with number num3.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// object calling using function:-
// const user={
//     username: 'varun',
//     age:23
// }
// function objec(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.age}`);
// }
// objec(user);


//-----------------------------------------------------------------------
//hoisting concept:- the default behavior of moving all the declarations at the top of the scope before code execution
// console.log(addone(4));
// function addone(num){
//     return num+1;
// }

// console.log(addtwo(4));// here we cannot access the value of addtwo funtion because of hoisting property.
// const addtwo=function(num1){
//     return num1+2; }      // error will occour.

//----------------------------------------------------------------------------------------------------------------

// this and arrow function javascript :-
//THIS FUNCTION
//under the scope to access value in the current context.
// const user={
//     username:'varun',
//     age:19,

// welcomemessage: function(){
//     console.log(`${this.username}, welcome to webiste`);
//     console.log(this);// this print the current context.
// }
// }


// user.welcomemessage();
// user.username="rahul";
// user.welcomemessage();// in he case the current context is change by rahul from varun
// console.log(this);
// in this case the current context is empty becaue we in node environment
// but in browser the global object is windowa in browser

// function func(){
//     let username='varun'
//     console.log(this.username);
// }
// func();// undefined because this cannot be used in function

// const hp=function(){
//     let username='varun'
//     console.log(this.username);
// }
// hp()  // undefined because this cannot be used in function


//-------------------------------------------------------------------------
//ARROW FUNCTION:- bsic syntax of arrow function is ()=>{}.
// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addtwo(3,4));

// implicit return :-
// const addtwo=(num1,num2)=> num1+num2
//or//
//const addtwo=(num1,num2)=> (num1+num2)
//console.log(addtwo(4,5));


//******************************************************************************************* */

//   replace function:-  ///
// let text="visit microsoft";
// let result=text.replace("visit","user");
// console.log(result);

//-----------------------

// slice function:- ///
// let text = "Hello world!";
// let result = text.slice(0, 7);
// console.log(result);

//------------------------------

// splice functon:-////
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");// this will add the lemon and kiwi by not deleting any value
// console.log(fruits);
//##
//At position 2, remove 2 items:
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);
// console.log(fruits);

//-------------------------

// substring function:- ///
// let text = "Hello world!";
// let result = text.substring(1, 4); // start from one and it will not count the last element.
// console.log(result);

//-----------------------------

// touppecase function and  lowercase:- //
// let text = "Hello world!";
// let result = text.toLowerCase();
// let result2 = text.toUpperCase();
// console.log(result);
// console.log(result2);

//---------------------------------

// concatination string:- /////
// let text1 = "sea";
// let text2 = "food";
// let result = text1.concat(text2);
// console.log(result);

//-------------------------------------

//charAt function:- ///
// let text = "HELLO WORLD";
// let letter = text.charAt(3); // charractor at that position.
// console.log(letter);

//-------------------------------------

//indexof function :- /////
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// let result2 = text.indexOf("Welcome");
// console.log(result);
// console.log(result2);// -1 because not present.

// trim function :- The trim() method removes whitespace from both sides of a string.
// let text = "       Hello World!        ";
// let result = text.trim();
// console.log(result);

























