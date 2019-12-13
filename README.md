# reference
- this page is summary of [code evolution tutorial](https://www.youtube.com/watch?v=WBPrJSw7yQA)

# content
## installation
- install node.js
- install typescript globally
```
npm install -g typescript
```
- check version
```
tsc -v
```

## compile


1. main.ts
```ts
var message = "Hello World";
console.log(message);

```
2. make js

```cmd
tsc main.ts
tsc main
```

3. watch : automatically compile

```cmd
tsc main --watch
```
## export {};
### make block scope possible
- main.ts
```ts
export {}; 
let message = "Welcome back";
console.log(message);
```
- main.js(compiled)
```js
"use strict";
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
var x = 10;
var y = 20;

```

## variable types

1. let , const
```ts

let x = 10;
const y = 20;

let sum;
// const title;  // impossible ,
const title = "Codevolution";
```

3. boolean, number, string

```ts
/* basic types */
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "JH";
// name = true; // not assignable (type error)

let sentence: string = `My name is ${name}
I am a beginner in typescript`;
```

4. null , undefined

```ts
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;
```
5. array  
```ts
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```

6. tuple  

```ts
let person1: [string, number] = ["Chris", 22];
// let person1: [string, number] = [ 22, "Chris"];
```
7. enum  

```ts
// 5. enum
enum Color {
  Red = 5,
  Green = 6,
  Blue = 7
}

let c: Color = Color.Green;
console.log(c);  // 6
```
8. any - most capable type
```ts
// it is possible and does not catch error
let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas";

let myVariable: any = 10;

// does not catch error in dev tool
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
```

9. unknown
```ts
let myVariable2: unknown = 10;

// catch errors when develope
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
```
10. difference of let in typescript between js'
```ts
//
let a;
a = 10;
a = true;

let b = 20;
// b = true; // not assignable
```
11. union type -
```ts
let multiType: number | boolean;
multiType = 20;
multiType = true;

```

# function
1. parameters
    1. type 
    - function receive only number parameters and return number
    ```ts

    function add(num1: number, num2: number): number {
    return num1 + num2;
    }
    add(5, 10); // ok
    add("5", 10); //Argument of type '"5"' is not assignable to parameter of type 'number'.parameters
    ```
    2. default value
    ```ts

    function add(num1: number, num2: number = 20): number {
        return num1 + num2;
    }
    add(5, 10);
    add(5); //  default parameter num2: number =20 --> return 25
    ```
    3. optional value
    ```ts

    function add(num1: number, num2?: number): number {
    return num1 + num2;
    }
    add(5, 10);
    add(5); // ? - optional parameter - deos not make error in dev environment
    ```

2. interface - make object as parameter
    ```ts
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
    ```

## class
1. initialize class
```ts
// class
class Employee {
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Moring ${this.employeeName}`);
  }
}

let emp1: Employee = new Employee("JH");
console.log(emp1.employeeName); // JH
emp1.greet(); // Good Moring JH


```
2. inheritance
```ts
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log("Manager delegating tasks");
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork(); // Manager delegating tasks
m1.greet(); //Good Moring Bruce
console.log(m1.employeeName); // Bruce
```

## access modifier
1. public (default)
```ts
// class, access modifier
class Employee {
  public employeeName: string;
  ...
}

let emp1: Employee = new Employee("JH");
console.log(emp1.employeeName); // no error
emp1.greet();


class Manager extends Employee {
  ...
  delegateWork() {
    console.log(`Manager delegating tasks ${this.employeeName}`); // no error
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName); // no error
```

2. private 
```ts
// class, access modifier
class Employee {
  private employeeName: string;
  ...
}

let emp1: Employee = new Employee("JH");
console.log(emp1.employeeName); //error
emp1.greet();


class Manager extends Employee {
  ...
  delegateWork() {
    console.log(`Manager delegating tasks ${this.employeeName}`); //error
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName); //error
```

3. protected
```ts
// class, access modifier
class Employee {
  protected employeeName: string;
  ...
}

let emp1: Employee = new Employee("JH");
console.log(emp1.employeeName); //error
emp1.greet();


class Manager extends Employee {
  ...
  delegateWork() {
    console.log(`Manager delegating tasks ${this.employeeName}`); //no error
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName); //error
```