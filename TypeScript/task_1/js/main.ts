interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Dynamic properties
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,  // Dynamic property
};

// Rendering the teacher3 object to the browser
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

// Create a div to hold the teacher info
const teacherDiv = document.createElement('div');
teacherDiv.innerHTML = `
  <h2>Teacher Info:</h2>
  <p><strong>First Name:</strong> ${teacher3.firstName}</p>
  <p><strong>Last Name:</strong> ${teacher3.lastName}</p>
  <p><strong>Full-Time Employee:</strong> ${teacher3.fullTimeEmployee}</p>
  <p><strong>Location:</strong> ${teacher3.location}</p>
  <p><strong>Contract:</strong> ${teacher3.contract}</p>
`;

// Append the div to the body of the webpage
body.appendChild(teacherDiv);
