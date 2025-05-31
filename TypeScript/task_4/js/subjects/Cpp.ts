import { Teacher } from "./Teacher"; // Import Teacher interface
import { Subject } from "./Subject"; // Import Subject class

export class Cpp extends Subject {
  constructor(teacher: Teacher) {
    super(teacher); // Pass teacher to the parent class
  }

  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }

  getAvailableTeacher(): string {
    if (!this.teacher.experienceTeachingC) {
      return "No available teacher";
    }
    return `${this.teacher.firstName}`; // Return only the teacher's first name
  }
}
