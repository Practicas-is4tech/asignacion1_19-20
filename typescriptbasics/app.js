"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
var lenguagesKnow;
(function (lenguagesKnow) {
    lenguagesKnow[lenguagesKnow["Inglish"] = 0] = "Inglish";
    lenguagesKnow[lenguagesKnow["Spanish"] = 1] = "Spanish";
    lenguagesKnow[lenguagesKnow["French"] = 2] = "French";
})(lenguagesKnow || (lenguagesKnow = {}));
// Interface declaration ---------------------
let student = {
    Name: "Johneee",
    Age: 25,
    Phone: 1234567890,
    Lenguage: lenguagesKnow[lenguagesKnow.Inglish]
};
let studentList = [
    {
        Name: "John",
        Age: 25,
        Phone: 1234567890,
        Lenguage: lenguagesKnow[lenguagesKnow.French]
    },
    {
        Name: "Jane",
        Age: 24,
        Phone: 1234567891,
        Lenguage: lenguagesKnow[lenguagesKnow.Spanish]
    }
];
// Generic List ------------------------------
let studentListG = [
    {
        Name: "John",
        Age: 25,
        Phone: 1234567890,
        Lenguage: lenguagesKnow[lenguagesKnow.French],
    },
    {
        Name: "Jane",
        Age: 24,
        Phone: 1234567891,
        Lenguage: lenguagesKnow[lenguagesKnow.Spanish]
    }
];
studentList.push(student);
// for (let index = 0; index < studentList.length; index++) {
//     const element = studentList[index];
//     console.log("Age : " + element.Age + " with Name : " + element.Name + "has Phone : " + element.Phone + " and speak : " + element.Lenguage);
// }
function GetStudentsList(students) {
    students.forEach(element => {
        console.log("Age : " + element.Age + " with Name : " + element.Name + "has Phone : " + element.Phone + " and speak : " + element.Lenguage);
    });
}
GetStudentsList(studentList);
function GetNumbers(...nums) {
    nums.forEach(element => {
        console.log("Number: " + element);
    });
}
GetNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function GetInfo(info = "Happy") {
    console.log(info);
}
GetInfo("VERY HAPPY");
//--------------------------------------------
let StudentName = function (lName, fName) {
    return fName + " ... " + lName;
};
console.log(StudentName("Doesss", "Johnsss"));
// Arrow function ----------------------------
let StudentFullName = (lName, fName) => { return fName + " .... " + lName; };
console.log(StudentFullName("Doe", "John"));
/* -------------------------------- Class -------------------------------- */
// class Student {
//     private _lName: string;
//     private _fName: string;
//     constructor(lName: string, fName: string) {
//         this._lName = lName;
//         this._fName = fName;
//     }
//     GetFullName(): string {
//         return this._lName + " .... " + this._fName;
//     }
// }
// let s = new Student("Uriel", "SR");
// console.log(s.GetFullName());
let s = new Student_1.default("Uriel", "SR");
console.log(s.GetFullName());
// Generics ---------------------------------
function GetStudentsListGenerics(students) {
    students.forEach(element => {
        console.log("Age : " + element.Age + " with Name : " + element.Name + "has Phone : " + element.Phone + " and speak : " + element.Lenguage);
    });
}
GetStudentsListGenerics(studentListG);
//# sourceMappingURL=app.js.map