import { Teacher } from "./subjects/Teacher"; // Import Teacher interface
import { Cpp } from "./subjects/Cpp"; // Import Cpp class
import { Java } from "./subjects/Java"; // Import Java class
import { React } from "./subjects/React"; // Import React class

// Create a teacher object with experience
const cTeacher: Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
  experienceTeachingJava: 5,
  experienceTeachingReact: 3,
};

// Create instances of each subject and pass the teacher to the constructor
const cpp = new Cpp(cTeacher);
const java = new Java(cTeacher);
const react = new React(cTeacher);

// Function to append results to the DOM
function appendToDOM(subjectName: string, requirements: string, availableTeacher: string) {
  const body = document.getElementsByTagName("body")[0];
  
  // Create a new div for each subject
  const subjectDiv = document.createElement("div");
  subjectDiv.innerHTML = `
    <h2>${subjectName}</h2>
    <p><strong>Requirements:</strong> ${requirements}</p>
    <p><strong>Available Teacher:</strong> ${availableTeacher}</p>
  `;
  
  // Append the subjectDiv to the body
  body.appendChild(subjectDiv);
}

// C++ Subject
console.log("C++");
appendToDOM("C++", cpp.getRequirements(), cpp.getAvailableTeacher());

// Java Subject
console.log("Java");
appendToDOM("Java", java.getRequirements(), java.getAvailableTeacher());

// React Subject
console.log("React");
appendToDOM("React", react.getRequirements(), react.getAvailableTeacher());
