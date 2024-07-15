// function scopeTest(){
//       if(true){
//             var varVariable ="I am var";
//             let letVariable ="Iam let";
//             const constVariable = "Iam const";
//       }
//       console.log(varVariable);
//       console.log(letVariable);
//       console.log(constVariable);

// }
// scopeTest();


// 1.answer:

// we are already knew that, in javascript variable can be declared using (var,let and const).these keywords defined the scope of the variable differently.the var keywords declare as a variable with function scope it's means the variable is accessible throughout the entire function is declared.if it is within a block (if)statement.one the other hand,the var and const keyword declare as block scope variable.it's means the variable are accessible with in block statement.it mean with in curly braces`{}`of an if statement.outside of the function those variable are not accessible.according to the code,
//  1. we can see  varVariable is declare with var  and has a function scope .it means it is accessible anywhere with in the scope test  function,including outside the if block.
// 2.
// let letVariable = "I am let";
//  letVariable is declared with let and has block scope. This means it is only accessible within the if block. Therefore, console.log(letVariable); will throw a ReferenceError because letVariable is not accessible outside the if block.
// 3.const constVariable = "I am const";
// constVariable is declared with const and also has block scope. This means it is only accessible within the if block. Therefore, console.log(constVariable); will throw a ReferenceError because constVariable is not accessible outside the if block.
// we can  see all variables' values within the if block, you would need to log them inside the if block like this:
// javascript according to the above code we can write as,


// function scopeTest(){
//       if(true){
//           var varVariable = "I am var";
//           let letVariable = "I am let";
//           const constVariable = "I am const";
//           console.log(varVariable);  // This will log "I am var"
//           console.log(letVariable);  // This will log "I am let"
//           console.log(constVariable);  // This will log "I am const"
//       }
//   }
  

// question:2
// answer:


function greet(name,greeting="Hello"){
      return `"${greeting}, ${name}!"`;
}
console.log(greet("Alice"));
console.log(greet("Bob","Goog morning"));




// question:3
// answer:

function sum(...numbers){
      return numbers.reduce((accumulator,currentValue) =>accumulator + currentValue,0);
}
console.log(sum(1,2,3));
console.log(sum(10,20,30,40));
console.log(sum(5));



// question:4
// answer:

const array1=[1,2,3];
const array2=[4,5,6];
const array3=[7,8,9];
const newArray=[...array1,...array2,...array3];
console.log(newArray);


// question:5
// answer:

const person ={
      name:"John",
      age:30,
      greet(){
            return `hello, i'm ${this.name}  and i am ${this.age} years old.`;
      }
};
console.log(person.greet());

// question:6
// answer:


const array =["apple","banana","cherry"];
for(const element of array){
      console.log(element);
}

// question:7
// answer:

const nam ="Alice";
const age =25;
const message =`Hello, my name is ${nam} and I am ${age} years old.`
console.log(message);


// question:8
// answer:

const students=[
      {name:"Alice",grade:90},
      {name:"Bob",grade:85},
      {name:"Charlie",grade:92},
      {name:"Dina",grade:88}
];
for(const student of students){
      console.log(`${student.name}:${student.grade}`);
};

// question:9
// answer:

const nestedArray =[
      [1,2,3],
      [4,5,6],
      [7,8,9]
];
for(const innerArray of nestedArray){
      let sum=0;
      for (const num of innerArray){
            sum +=num;
      }
      console.log(`sum of ${innerArray}:${sum}`);
}
// question:10
// answer:
const a=5;
const b=10;
const result =a +b;
const mes =`the sum of ${a} and ${b} is ${result}`;
console.log(mes)

