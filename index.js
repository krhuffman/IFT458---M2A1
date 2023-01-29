// function greetStudent(studentName){     //parameter //name function
//     return `Hello there ${studentName}`;
// }

// const greetStudent = function (studentName){    //parameter //anonymous function 
//     return `Hello there ${studentName}`;
// }

// const greetStudent = (studentName)=>{    //fat arrow function //anonymous function 
//     return `Hello there ${studentName}`;
// }

// const greetStudent = studentName => `Hello there ${studentName}`;    //fat arrow function //anonymous function 


// const fullName = function (firstName, middleName, lastName){
//     return `${lastName}, ${middleName}, ${firstName}`;
// }

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}, ${firstName}`;


const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName)

// const student = 'John Smith';
// const greet = greetStudent(student); //argument
// console.log(greet);
// console.log(message + " " + studentName);
