// empty object.
// const ob={};

// predefined object constructor.
// const obj2=new Object(); 

// factory function.
// function objectfactory(){

//     return {
//         coursetitle : 'fee',
//         coursecode: 'cs342',
    
//     }
// }
// const obj3=objectfactory();

// console.log(obj3);

///////////////////////////////////////////////////////////////////////////////////////
// example passing arguement ////////////
// function objectfactory(t,c){
   
// return {
//     coursrtitle : t,
//     coursecode: c,

// }
// }
// const obj3=objectfactory('hello','cs345');
// console.log(obj3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// customised or user defined constructor.
// first letter should be capital for constructor name
// function Cource(){
//     this.courecetittle='fee',
//     this.courcecode='cs33',
//     this.name='name'
// }
// const obj2=new Cource();
// console.log(obj2);
// obj2.semester=5;
// console.log(obj2);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// if you are creating a constructor for objects then we cannot directly add the property dynamically //


/////////////////////////////////////////////////////////////////////

// // QUESTION:-
// const arr=[
// {name:'n1',marks:[60,40,23,45]},
// {name:'n2',marks:[50,30,23,65]},
// {name:'n3',marks:[80,20,26,45]},
// {name:'n4',marks:[50,60,23,45]},
// {name:'n5',marks:[56,70,23,45]}
// ];

// function total_marks(arr){
//     let total;
//     arr.forEach(function(val){
//         total=0
//         val.marks.forEach(function(v){
//             total+=v;
//         })
//         console.log(`the total marks of ${val.name} are ${total}`);
//     }
//     )

// }
// total_marks(arr);



// //////////////////////////////////////////////////////////----------------------------------------------------------------
// JSON:- javscript object notation we store the data in thr form of objects (store in string format).
// Importance of json format :- 
// method of json
// stringify function convert the data into json format.
// parse function converts serialised data into object.
// let obj1 = JSON.stringify(obj)
// let obj2 = JSON.parse(obj1);
// console.log(obj2);
// why do we use open Storage.
// Storage that is provided to the client by the browser. 
// Advantage : local storage is persistant until the data is deleted.
// Disadvantages : The amount of data to be put in the function is limited.
// let obj={
//     username : User1,
//     password : "abc"
// }
// let obj1 = JSON.stringify(obj);
// localStorage.setItem('User1',obj1);


























//-------------------------------------------------------
//de-structure:-

const cource={
    courcename:"fee",
    courcefee:"999",
    courceinstructor:"varun"
}
console.log(cource.courceinstructor);

// const {courceinstructor:instuctor}=cource
// console.log(instuctor); int this line we give the name courceinstructor to the instructor
// so now we dont want to write the full name again of courceinstuctor


print("varunbali")









































