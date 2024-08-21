import { IStudentInfo } from './IStudentInfo'
import Students from './Student'

enum lenguagesKnow { Inglish, Spanish, French }

// Interface declaration ---------------------


let student: IStudentInfo = {
    Name: "Johneee",
    Age: 25,
    Phone: 1234567890,
    Lenguage: lenguagesKnow[lenguagesKnow.Inglish]
}

let studentList: IStudentInfo[] = [
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
]

// Generic List ------------------------------

let studentListG: Array<IStudentInfo> = [
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
]

studentList.push(student)

// for (let index = 0; index < studentList.length; index++) {
//     const element = studentList[index];
//     console.log("Age : " + element.Age + " with Name : " + element.Name + "has Phone : " + element.Phone + " and speak : " + element.Lenguage);
// }

function GetStudentsList(students: IStudentInfo[]) {
    students.forEach(element => {
        console.log("Age : " + element.Age + " with Name : " + element.Name + "has Phone : " + element.Phone + " and speak : " + element.Lenguage);
    });
}

GetStudentsList(studentList);

function GetNumbers(...nums: number[]) {
    nums.forEach(element => {
        console.log("Number: " + element);
    });
}

GetNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function GetInfo(info: string = "Happy") {
    console.log(info);
}

GetInfo("VERY HAPPY");

//--------------------------------------------

let StudentName = function (lName: string, fName: string) {
    return fName + " ... " + lName;
}

console.log(StudentName("Doesss", "Johnsss"));

// Arrow function ----------------------------

let StudentFullName = (lName: string, fName: string) => { return fName + " .... " + lName };

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




let s = new Students("Uriel", "SR");
console.log(s.GetFullName());

// Generics ---------------------------------

function GetStudentsListGenerics(students: Array<IStudentInfo>) {
    students.forEach(element => {
        console.log("Age : " + element.Age + " with Name : " + element.Name + "has Phone : " + element.Phone + " and speak : " + element.Lenguage);
    });
}

GetStudentsListGenerics(studentListG);