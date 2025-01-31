function isSameType(value1, value2) {
  // Convert values to numbers if possible
  const num1 = Number(value1);
  const num2 = Number(value2);

  // Check if both values are NaN
  if (Number.isNaN(num1) && Number.isNaN(num2)) {
    return true;
  }

  // Compare their types
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Ensure the input is a string before calling trim()
if (typeof value1 === "string" && value1.trim() !== "") value1 = Number(value1) || value1;
if (typeof value2 === "string" && value2.trim() !== "") value2 = Number(value2) || value2;

alert(isSameType(value1, value2));
