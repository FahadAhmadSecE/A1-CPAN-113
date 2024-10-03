import { randInt, avg, arrayReader } from './Modules.js';

let names = ["Cassy", "Ryan", "Daniel", "Alex", "Raymond", "Adnan"];
let grades = [];



for (let i = 0; i < names.length; i++) {
    grades.push(randInt())
}


let average = avg(grades)


//Average Test
for (let o = 0; o < names.length; o++) {
    console.log(names[o]);
    console.log(grades[o] + "%");
    console.log("");
}
console.log("");
console.log("Your classes average is:")
console.log(average() + "%");
console.log("");

//Saving names of students who failed
let failedN = [];
let excellentN = [];

for (let a = 0; a < names.length; a++) {
    if (grades[a] < 50) {
    failedN.push(names[a]);
    } else if (grades[a] > 85) {
        excellentN.push(names[a]);
    }
}

console.log("Your failing (<50%) students are :")

arrayReader(failedN);

console.log("")

console.log("Your excellent (>85%) students are:")

arrayReader (excellentN);