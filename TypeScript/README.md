# TypeScript Project: Creating Interfaces, Classes, and Advanced Types

This project is a series of tasks focusing on TypeScript fundamentals such as interfaces, classes, declaration merging, namespaces, and nominal typing. Below is a detailed breakdown of each task and the approach taken to achieve the requirements.

## Table of Contents
1. [Creating an Interface for a Student](#1-creating-an-interface-for-a-student)
2. [Extending the Teacher Class](#2-extending-the-teacher-class)
3. [Printing Teachers](#3-printing-teachers)
4. [Writing a Class](#4-writing-a-class)
5. [Advanced Types Part 1](#5-advanced-types-part-1)
6. [Creating Functions Specific to Employees](#6-creating-functions-specific-to-employees)
7. [String Literal Types](#7-string-literal-types)
8. [Ambient Namespaces](#8-ambient-namespaces)
9. [Brand Convention & Nominal Typing](#9-brand-convention--nominal-typing)

---

## 1. Creating an Interface for a Student

### Task
The goal was to create an interface for a student, with properties such as `firstName`, `lastName`, `age`, and `location`. Then, a function was written to handle student data and return them in a structured format.

### Solution:
- Created a `Student` interface with the necessary properties.
- Utilized TypeScript's strong typing to enforce data consistency.
- Rendered the student data in HTML for visualization.

```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Larry",
  lastName: "Hudson",
  age: 32,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "Karla",
  lastName: "Dermond",
  age: 26,
  location: "New York",
};

const studentsList: Array<Student> = [student1, student2];

## 2. Extending the Teacher Class

### Task
The objective was to extend a Teacher class by creating a `Director` interface that added a new property `numberOfReports`.

### Solution:
- Created an interface `Directors` that extends the `Teacher` interface and adds `numberOfReports`.
- Implemented functionality to display the details of a director and validate the teacher's experience.

```typescript
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

## 3. Printing Teachers

### Task

A function `printTeacher` was needed that would take a `firstName` and `lastName`, and return the first letter of the `firstName` followed by the `lastName`.

### Solution:

- Created a function `printTeacher` and applied a simple string manipulation to achieve the desired format.

```typescript
export const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

## 4. Writing a Class

### Task

A `StudentClass` was to be created that had methods to simulate work on homework and displaying the student’s name.

### Solution:
- Defined a `StudentClass` with the methods `workOnHomework()` and `displayName()`.
- Used TypeScript interfaces for structured and type-safe class design.

```typescript
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

## 5. Advanced Types Part 1

### Task

This task involved defining interfaces for `Director` and `Teacher` with specific methods and implementing the logic for handling different employee types based on their salary.

### Solution:

- Created `DirectorInterface` and `TeacherInterface` with required methods.
- Implemented functions that determine the type of employee based on salary.

```typescript
export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

## 6. Creating Functions Specific to Employees

### Task
Functions were created to check whether an employee is a Director or a Teacher, and to execute the appropriate tasks based on the type.

### Solution:
- Defined functions `isDirector` (for type checking) and `executeWork` to call respective methods based on the employee's role.

```typescript
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let msg: string;

  if (isDirector(employee)) {
    msg = employee.workDirectorTasks();
  } else {
    msg = employee.workTeacherTasks();
  }

  console.log(msg);
  return msg;
}

## 7. String Literal Types

### Task
You were required to create a string literal type for subjects (`Math` and `History`) and define functions that return specific strings based on these values.

### Solution:
- Defined the `Subjects` string literal type and a `teachClass` function to return the appropriate teaching message.

```typescript
type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

## 8. Ambient Namespaces

### Task
You created several files within a namespace `Subjects` to model different subjects like `Cpp`, `Java`, and `React`, and extended the `Teacher` interface using declaration merging.

### Solution:

- Used declaration merging to add specific experience properties to the `Teacher` interface for each subject.
- Created classes (`Cpp`, `Java`, `React`) with methods to handle the subject-specific functionality like listing requirements and available teachers.

```typescript
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

## 9. Brand Convention & Nominal Typing

### Task

You used nominal typing to distinguish between `MajorCredits` and `MinorCredits`, and implemented functions to sum the credits for each type.

### Solution:

- Created the `MajorCredits` and `MinorCredits` interfaces with a unique `_brand` property.
- Wrote functions `sumMajorCredits` and `sumMinorCredits` to sum the credits and return the correct type.

```typescript
interface MajorCredits {
  credit: number;
  _brand: "Major";
}

interface MinorCredits {
  credit: number;
  _brand: "Minor";
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  const sum = subject1.credit + subject2.credit;
  const obj: MajorCredits = {
    credit: sum,
    _brand: "Major",
  };

  return obj;
}

## How I Achieved the Tasks

1. **Interface Design**: 
   For each task, I created TypeScript interfaces with specific properties and methods that matched the task requirements. TypeScript’s strong typing and interfaces helped enforce consistency.

2. **Classes and Methods**: 
   Where necessary, I used classes to model entities like students, teachers, and subjects, and provided relevant methods for each class.

3. **Declaration Merging**: 
   In tasks like Ambient Namespaces, I utilized TypeScript's declaration merging to extend existing interfaces (Teacher) with additional properties based on specific subjects.

4. **Nominal Typing**: 
   For the task involving brand conventions, I used nominal typing by adding a `_brand` property to distinguish between types like MajorCredits and MinorCredits.

