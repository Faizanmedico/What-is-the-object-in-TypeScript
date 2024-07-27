

//    An object literal is a simple way to create an object with properties and values.
let person = {
    name: "Sultan",
    age: 60
  };
  
  console.log(person.name); // Output: Sultan
  console.log(person.age); // Output: 60
  
  //    TypeScript allows you to add type annotations to objects, 
  //ensuring that the object has the correct structure and types.
  let person1: { name: string; age: number } = {
    name: "Arsalan",
    age: 18
  };
  
  console.log(person1.name); // Output: Arsalan
  console.log(person1.age); // Output: 18
  
  
  //     Interfaces in TypeScript provide a way to define the shape of an object.
  interface Person {
    name: string;
    age: number;
  }
  
  let person2: Person = {
    name: "Faizan",
    age: 35
  };
  
  console.log(person2.name); // Output: Faizan
  console.log(person2.age); // Output: 35
  
  
  
  //     Interfaces can be extended to create new interfaces with additional properties.
  interface Person {
    name: string;
    age: number;
  }
  
  interface Employee extends Person {
    employeeId: number;
  }
  
  let employee: Employee = {
    name: "Usman",
    age: 30,
    employeeId: 112233
  };
  
  console.log(employee); // Output: { name: "Usman", age: 30, employeeId: 1234 }
  
  
  
  
  //    Intersection types allow you to combine multiple types into one.
  
  
  interface Person {
    name: string;
    age: number;
  }
  
  interface Employee {
    employeeId: number;
  }
  
  type EmployeePerson = Person & Employee;
  
  let employee1: EmployeePerson = {
    name: "Tipu",
    age: 25,
    employeeId: 786
  };
  
  console.log(employee1); // Output: { name: "Tipu", age: 25, employeeId: 786 }
  
  
  