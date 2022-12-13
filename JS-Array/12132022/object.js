// Objects
// an entity with properties and behavior (method)

// {} = object literal
// Syntax = property: value,
const person = {
    firstName: "Juan",
    lastName: "Dela Cruz",
    age: 28,
    gender: "Male"
};
// console.log(person.firstName);

// console.log(`You are ${person.firstName + " " + person.lastName}`);

person.isAdmin = true; //add new property in object
person.firstName = "John"; //replace the value of property in object

// console.log(person);

// Object Instance
const person2 = new Object();

//add property in object instance person2
person2.firstName = "Glenn";
person2.lastName = "Andaleon";
person2.age = 28;
person2.isAdmin = true;

delete person2.isAdmin; //delete the property of object instance
// console.log(person2)


// Object Constructor
function Car( color, brand, model, year, sound ){
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function(){
        console.log(sound);
    }
}

const vios = new Car("Blue", "Toyota", "Vios", "2023", "Broom Broom");
// console.log( vios.color );
// vios.start();

const student = {
    firstName: "Glenn",
    middleName: "Hernandez",
    lastName: "Andaleon",
    grade: 75,
    hobby: ["Reading", "Sleeping", "Coding"],
    name: {
        fName: "Istong",
        lName: "Koloy"
    }
}

console.log(student.name.fName, student.name.lName);

// for...of
// return the elements of array
for(anyVariable of student.hobby){
    console.log(anyVariable)
}

// for in
// return the property of the object
for( anyVariable in student){
    console.log(`${anyVariable}: ${student[anyVariable]}`)
}