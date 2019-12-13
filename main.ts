export {};
let message = "Welcome back";
console.log(message);

let x = 10;
const y = 20;

let sum;
// const title;  // impossible ,
const title = "Codevolution";

/* basic types */
// 1. boolean, number, string
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Bruce Wayne";
// name = true; // not assignable (type error)

let sentence: string = `My name is ${name}
I am a beginner in typescript`;

// console.log(sentence);

// 2. null , undefined
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// 3. array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 4. tuple
let person1: [string, number] = ["Chris", 22];
// let person1: [string, number] = [ 22, "Chris"];

// 5. enum
enum Color {
  Red = 5,
  Green = 6,
  Blue = 7
}

let c: Color = Color.Green;
console.log(c);

// 6. any type - most capable type
let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas";

let myVariable: any = 10;

// does not catch error in dev tool
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

// 7. unknown
let myVariable2: unknown = 10;

// catch error in dev tool
// console.log(myVariable2.name);
// myVariable2();
// myVariable2.toUpperCase();

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable2)) {
  console.log(myVariable2.name);
}
console.log(myVariable2.toString().toUpperCase());

//
let a;
a = 10;
a = true;

let b = 20;
// b = true; // not assignable

// 9. union type -
let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2?: number): number {
  return num1 + num2;
}
add(5, 10);
// add("5", 10); //Argument of type '"5"' is not assignable to parameter of type 'number'.
add(5); // ? - optional parameter / default parameter num2: number =20

// interface
interface Person {
  firstName: string;
  lastName: string;
}
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruce",
  lastName: "Wayne"
};

fullName(p);

// class, access modifier
class Employee {
  public employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Moring ${this.employeeName}`);
  }
}

let emp1: Employee = new Employee("JH");
console.log(emp1.employeeName);
emp1.greet();

// class -inheritance

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks ${this.employeeName}`);
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//access modifier
