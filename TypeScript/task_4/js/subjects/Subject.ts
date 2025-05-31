import { Teacher } from "./Teacher"; // Import Teacher interface

export class Subject {
  teacher: Teacher;

  constructor(teacher: Teacher) {
    this.teacher = teacher; // Initialize teacher
  }

  set setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }
}
