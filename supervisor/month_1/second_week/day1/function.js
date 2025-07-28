function checkStudentInfo(firstName, lastName, Math, Phy, Chem){
let sum = Math + Phy + Chem;
let average = sum/3;
if(average < 50){
    console.log( `Hello ${lastName} ${firstName}, your average is ${average}. You are Failed.`);
}else{
    console.log( `Hello ${lastName} ${firstName}, your average is ${average}. You are Passed.`);
}
}
checkStudentInfo("Muheto", "Hodal", 20, 20, 50);



