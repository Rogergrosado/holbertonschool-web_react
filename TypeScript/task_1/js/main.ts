interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Dynamic properties
}

interface Directors extends Teacher {
  numberOfReports: number; // Add numberOfReports property
}

// Example of creating a teacher object
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,  // Dynamic property
};

// Example of creating a director object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,  // numberOfReports added
};

// Render the teacher info to the browser
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

// Append the teacher info to the body of the webpage
body.appendChild(teacherDiv);

// Create a div to hold the director info
const directorDiv = document.createElement('div');
directorDiv.innerHTML = `
  <h2>Director Info:</h2>
  <p><strong>First Name:</strong> ${director1.firstName}</p>
  <p><strong>Last Name:</strong> ${director1.lastName}</p>
  <p><strong>Full-Time Employee:</strong> ${director1.fullTimeEmployee}</p>
  <p><strong>Location:</strong> ${director1.location}</p>
  <p><strong>Number of Reports:</strong> ${director1.numberOfReports}</p>
`;

// Append the director info to the body of the webpage
body.appendChild(directorDiv);
