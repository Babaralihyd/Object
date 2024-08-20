//========================================object==========================================
var students = {
    name: 'imran',
    fName: 'Mumtaz Ali',
    roll: 27094,
};
console.log(students);
console.log(students.name);
console.log(students['roll']);
// Declaration types 
var AdmissionStudents;
AdmissionStudents = {
    name: 'Ali',
    fName: "hakeem",
    age: 10,
    roll: 20845,
};
console.log(AdmissionStudents);
console.log(AdmissionStudents.age);
console.log(AdmissionStudents['name']);
// Anonymous
var Teacher = {
    Name: "Mss Alina",
    exp: 15,
};
console.log(Teacher);
var student = {
    name: "Hira",
    age: 30
};
console.log(student["name"]);
console.log(student.age);
var storeManager = {
    name: "Bilal",
};
console.log(storeManager);
var a = {
    name: 'ali'
};
var b = {
    name: "naveed ",
};
a = b;
b = a;
var c = { name: ' imran ', age: 23 };
//  c = b   ;//Error
// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.
// TypeScript is comparing each member in the type against
// each other to verify their equality.
// 
// Now lets do it Case By Case
//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 
var myType = { name: "Zia", id: 1 };
//Case 1
myType = { id: 2, name: "Tom" }; //Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type
//Case 2a
// myType = { id: 2,  name_person: "Tom" }
; //Case 2a: Error, renamed or missing property
//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
var z; //Note now 'x' can have any name, just that the property should be of type string
z = { id: 1, fullname: "Zia" }; // Ok, `fullname` matched by index signature
//Case 3
// myType = { id: 2,  name: "Tom", age: 22 };
//Case 3: Error, excess property
//=================================================
//Case when STALE object literal are assigned to a variable 
var myType2 = { id: 2, name: "Tom" };
//Case 1
myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
var myType3 = { id: 2, name_person: "Tom" };
//Case 2a
// myType = myType3;
//Case 2: Error, renamed or missing property, rule same for stale and fresh object 
//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
var x; //Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x = y; // Ok, `fullname` matched by index signature
var myType4 = { id: 2, name: "Tom", age: 22 };
//Case 3
myType = myType4; //Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
var studentsData = {
    fName: "zeeshan",
    age: 12,
    distric: 'hyderabad',
    address: "village zulfiqar ALI ",
    info: {
        name: 'ali'
    },
};
var myBook = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
};
var newStudents = {
    name: 'Ali Raza ',
    fname: 'Raza ',
    class: "seventh ",
    age: 13,
    id: 1003,
};
var myname = "Zia";
// console.log((myname as string).length);
console.log(myname.length);
// myname = 
