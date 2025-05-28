interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

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

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  // Default case if the input isn't 'Math' or 'History'
  return "Subject not available";
}

// Example usages for testing (uncomment to check outputs)
// console.log(createEmployee(200)); // Teacher
// console.log(createEmployee(1000)); // Director
// console.log(createEmployee("$500")); // Director

// executeWork(createEmployee(200)); // Getting to work
// executeWork(createEmployee(1000)); // Getting to director tasks

// console.log(teachClass("Math")); // Teaching Math
// console.log(teachClass("History")); // Teaching History

