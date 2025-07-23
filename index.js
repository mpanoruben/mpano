let first_number = 50;
let second_number = 50;
// This is id only
// if( first_number < second_number) {
//     console.log("The first number is less than the second number.");
// }

// this is if with else statment

// if (first_number < second_number) {
//     console.log("The first number is less than the second number.");
// }else {
//     console.log("The first number is greater than or equal to the second number.");
// }

// This is if with else if statement
// if (first_number < second_number) { 
//     console.log("The first number is less than the second number.");
// }else if (first_number > second_number) {
//     console.log("The first number is greater than the second number.");
// }else {
//     console.log("The first number is equal to the second number.");
// }

//HOW TO USE SWITCH STATEMENT
let day = 1;    
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day number");
}