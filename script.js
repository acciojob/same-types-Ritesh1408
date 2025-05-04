function isSameType(value1, value2) {
  // Check if the values are numbers in string format
  if (!isNaN(value1) && /^-?\d+$/.test(value1)) {
    value1 = Number(value1);
  }
  if (!isNaN(value2) && /^-?\d+$/.test(value2)) {
    value2 = Number(value2);
  }

  // Check if the values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Compare the types of the values
  return typeof value1 === typeof value2;
}
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));