
//========================================object==========================================


let students = {
    name : 'imran',
    fName : 'Mumtaz Ali',
    roll :  27094,

}

console.log(students);
console.log(students.name);
console.log(students['roll']);



// Declaration types 


let AdmissionStudents : {
    name : string
    fName : string
    roll : Number
    age : number
    

}

AdmissionStudents ={
    name : 'Ali',
    fName : "hakeem",
    age :   10,
    roll : 20845,

}


console.log(AdmissionStudents);
console.log(AdmissionStudents.age);
console.log(AdmissionStudents['name']);





// Anonymous

let Teacher :{Name :string, exp :number} ={
    Name : "Mss Alina",
    exp  : 15,
}

console.log(Teacher);




// ==========================Aliased Object Type============================


// Aliased Object Types

type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(student.age);


// Interfaces

interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "Bilal",
    
}

console.log(storeManager);


// ============================Structural_Typing_Object_Literals=====================


// These two interfaces are completely
// transferrable in a structural type system:


interface a { 
    name : string
}


interface b {
    name : string
    
}


let a : a =  {
    name : 'ali'
}

let b:b = {
    name: "naveed ",
   
}


a = b
b = a



// If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.
  
  interface c {
    name : string;
     age : number;
  }
  
  let c: c = { name : ' imran ', age : 23  };
  
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

let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
									//Object literals can only have properties that exist in contextual type


//Case 2a
// myType = { id: 2,  name_person: "Tom" }
;//Case 2a: Error, renamed or missing property

//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

let z: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

z = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature


//Case 3
// myType = { id: 2,  name: "Tom", age: 22 };
//Case 3: Error, excess property



//=================================================


//Case when STALE object literal are assigned to a variable 

let myType2 = { id: 2,  name: "Tom" };

//Case 1
myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

let myType3 = { id: 2,  name_person: "Tom" };
//Case 2a
// myType = myType3;
//Case 2: Error, renamed or missing property, rule same for stale and fresh object 


//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

let x:{ id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
let y = { id: 1, fullname: "Zia" };
x = y;// Ok, `fullname` matched by index signature


let myType4 = { id: 2,  name: "Tom", age: 22 };

//Case 3
myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object



  



// ==============================Nested_Objects




type information = {
    name : string,
    
};


type  Application = {
    info : information,
    fName : string,
    age : number,
    distric : string
    address :string
           
};


const studentsData : Application  = { 
    
    fName : "zeeshan",
    age : 12,
    distric: 'hyderabad' , 
    address : "village zulfiqar ALI ",

     info : {  

    name : 'ali'

},


        
        
}







type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}



// =====================intersection_types======================



type student1  = {
     
    name : string, 
    fname : string,
    id : number,

}

type student2 = {
     class : string,
     age : number
}



let newStudents : student1 & student2 = { 

    name : 'Ali Raza ',
    fname : 'Raza ',
    class : "seventh ", 
    age :  13 , 
    id  : 1003 , 


}



