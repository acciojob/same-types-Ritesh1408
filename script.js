function isSameType(value1, value2) {
  // Explicitly check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Explicitly check if only one value is NaN
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }

  // Otherwise, compare their types
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert to numbers only if the values are numeric strings
if (!isNaN(value1) && value1.trim() !== "") value1 = Number(value1);
if (!isNaN(value2) && value2.trim() !== "") value2 = Number(value2);

alert(isSameType(value1, value2));
