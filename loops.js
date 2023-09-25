// (for of) loop //

//*on numbers
// const arr=[1,3,4,2,5,6]
// for (const i of arr) {
//     console.log(i);
// }

// //*on string
// const greeting="hello world";
// for (const j of greeting) {
//     console.log(`each words is ${j}`);
// }

//------------------------------------------------------------------------------
// foreach function in javascript
// const coding=["js","ruby","java","python"];
// coding.forEach( function (item){     // callback function is written in foreach loop so function is name is not written in callback function
//     console.log(item);
// } )

// foreach function can be written as this way also
// const coding=["js","ruby","java","python"];
// coding.forEach( (item)=>{  // callback funtion ha tho hame store karne ki jarurat nhi ha.
//     console.log(item);
// })

//**********************************************************************************/
// const coding=["js","ruby","java","python"];
// coding.forEach((item,index,arr)=>{  // this an inbuild in foreach it will give the full arr and the index of the item.
//     console.log(item,index,arr);
// })


// foreach doesnot return any value
//--------------------------------------------------------------------------------------
// const mycoding=[
//     {
//         languagename:"python",
//         filename:"py",
//     },
//     {
//         languagename:"java",
//         filename:"java",
//     },
//     ,{
//         languagename:"javascript",
//         filename:"js",
//     },
// ];

// mycoding.forEach( (item)=>{
//     console.log(item.languagename);
//     // console.log(item.filename);
// })


// filter function return the value whereas foreach doesn't.
// const mynum=[1,2,3,4,5,6,7,8,9,10];
// const newnum=mynum.filter( (num)=>{
//      return num>4;
// })
// console.log(newnum);


// doing this from foreach function //
// const mynum=[1,2,3,4,5,6,7,8,9,10];
// const newnum=[];
// mynum.forEach( (num) => {
//     if(num>4){
//         newnum.push(num);
//     }
// })
// console.log(newnum);
let num1=89;
let num2="an";
let result=num1-num2;
console.log(result);