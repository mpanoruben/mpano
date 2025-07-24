

// function sayHello(){
//     let firstname ="mpano";
//     let lastname ="ruben";
//     console.log("hello " + firstname + "  " + lastname + "");
//     // console.log("")
// }
// sayHello();

// let numA=2;
// let numB=5;
// let sum=numA+numB;
// console.log("the sum is", sum);


// global
// let x = 10; 
// function printX() {
//   console.log(x); 
// }

// printX(); 
// console.log(x); 

// local
function myFunction() {
  let y = 5; // Local variable
  console.log(y);
}

myFunction(); // Output: 5
console.log(y); // ❌ Error: y is not defined
