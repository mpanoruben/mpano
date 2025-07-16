

function sayHello(){
    let firstName = "John";
    let lastName = "Doe";
    console.log(`Hello ${firstName} ${lastName}, welcome to the team!`); 
}
sayHello();

function checkAges(firstName, lastName, age){
    let first_name = firstName;
    let last_name = lastName;
    let age_ = age;
    if(age_ < 20){
        console.log(
          "Welcome to Timtom Aviation your first name is " +
            first_name +
            " and your last name is " +
            last_name +
            " and your ages is " +
            age_ +
            " You are still too young to work here"
        );
    }else{
        console.log(
          "Welcome to Timtom Aviation your first name is " +
            first_name +
            " and your last name is " +
            last_name +
            " and your ages is " +
            age_ +
            " You are welcome to work to work here"
        ); 
    }
}

checkAges("John", "Doe", 18);
checkAges("Hodal", "Muheto", 18);
checkAges("Keza", "Divin", 18);
checkAges("Mucyo", "Emmable", 18);

