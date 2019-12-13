"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
var x = 10;
var y = 20;
var sum;
// const title;  // impossible ,
var title = "Codevolution";
/* basic types */
// 1. boolean, number, string
var isBeginner = true;
var total = 0;
var name = "Bruce Wayne";
// name = true; // not assignable (type error)
var sentence = "My name is " + name + "\nI am a beginner in typescript";
// console.log(sentence);
// 2. null , undefined
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// 3. array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// 4. tuple
var person1 = ["Chris", 22];
// let person1: [string, number] = [ 22, "Chris"];
// 5. enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// 6. any type - most capable type
var randomValue = 10;
randomValue = true;
randomValue = "Vishwas";
var myVariable = 10;
// does not catch error in dev tool
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
// 7. unknown
var myVariable2 = 10;
// catch error in dev tool
// console.log(myVariable2.name);
// myVariable2();
// myVariable2.toUpperCase();
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
console.log(myVariable2.toString().toUpperCase());
//
var a;
a = 10;
a = true;
var b = 20;
// b = true; // not assignable
// 9. union type -
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add("5", 10); //Argument of type '"5"' is not assignable to parameter of type 'number'.
add(5); // ? - optional parameter / default parameter num2: number =20
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
// class, access modifier
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Moring " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("JH");
console.log(emp1.employeeName);
emp1.greet();
// class -inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//access modifier
