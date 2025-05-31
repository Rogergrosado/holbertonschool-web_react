/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create a row object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and capture the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with an age property
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row using the newRowID and updatedRow
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the newRowID
CRUD.deleteRow(newRowID);

// Append results to the DOM to visualize them
const rowDiv = document.createElement("div");
rowDiv.innerHTML = `
  <h2>Row Operations</h2>
  <p><strong>Inserted Row:</strong> ${JSON.stringify(row)}</p>
  <p><strong>Updated Row:</strong> ${JSON.stringify(updatedRow)}</p>
  <p><strong>Deleted Row ID:</strong> ${newRowID}</p>
`;

// Append the information to the body
document.body.appendChild(rowDiv);
