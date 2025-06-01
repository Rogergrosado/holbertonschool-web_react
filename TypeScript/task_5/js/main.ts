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

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  const sum = subject1.credit + subject2.credit;
  const obj: MinorCredits = {
    credit: sum,
    _brand: "Minor",
  };

  return obj;
}

// Function to append results to the DOM
function appendToDOM(subjectName: string, sum: MajorCredits | MinorCredits) {
  const body = document.getElementsByTagName("body")[0];
  
  // Create a new div to display the result
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = `
    <h2>${subjectName}</h2>
    <p><strong>Credits:</strong> ${sum.credit}</p>
    <p><strong>Brand:</strong> ${sum._brand}</p>
  `;
  
  // Append the resultDiv to the body of the document
  body.appendChild(resultDiv);
}

// Example usage:

const subject1: MajorCredits = { credit: 3, _brand: "Major" };
const subject2: MajorCredits = { credit: 5, _brand: "Major" };

const sumMajor = sumMajorCredits(subject1, subject2);
console.log("Major Credits Sum:", sumMajor);
appendToDOM("Major Credits", sumMajor);

const subject3: MinorCredits = { credit: 2, _brand: "Minor" };
const subject4: MinorCredits = { credit: 4, _brand: "Minor" };

const sumMinor = sumMinorCredits(subject3, subject4);
console.log("Minor Credits Sum:", sumMinor);
appendToDOM("Minor Credits", sumMinor);
