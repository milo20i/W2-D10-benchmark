//21
let x = "John"
let y = "Doe"
console.log(x +" "+ y);

//22
let person = {
    name: "Danilo",
    surname: "De Matteis",
    email: "dematteis_danilo@yahoo.it"
};

//23
delete person.email;
console.log(person);

//24-25
const animal = ['ant', 'camel', 'duck', 'bison','lion','cat','dog','panther','pinguin','turtle' ];
console.log(animal);


//26 
Array.from({length: 100}, () => Math.floor(Math.random() * 100));


//29
function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("Today is Friday"));
