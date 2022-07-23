function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(str) {
  const arr = str.split(" ");
  const reversedArr = arr.reverse();
  const reversedStr = reversedArr.join(" ");
  return `output will be (${reversedStr} === ${str}) ? true : false `;
}
function getCircumfrence(radius) {
  return 2 * Math.PI * radius;
}
function getArea(radius) {
  return Math.PI * radius * radius;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
};
