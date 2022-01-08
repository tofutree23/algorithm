/** 1. Find the minimum value among the three numbers */
const getMinimum = (a, b, c) => {
  let answer;

  if (a < b) answer = a;
  else answer = b;

  return answer < c ? answer : c;
};

console.log(getMinimum(2, 1, 5));

/** 2. Is it a triangle? */
const calcTriangle = (a, b, c) => {
  let maxLength;
  if (a < b) maxLength = b;
  else maxLength = a;
  if (maxLength < c) maxLength = c;

  if (a + b + c - maxLength > maxLength) return true;
  return false;
};

console.log(calcTriangle(3, 4, 1));
