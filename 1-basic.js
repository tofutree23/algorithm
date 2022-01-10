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

/** 3. How many pencils do you need to hand out to all students? */
const calcDoseOfPencils = (n) => Math.ceil(n / 12);

console.log(calcDoseOfPencils(25));

/** 4.The sum from 1 to N */
const getSum = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
};

console.log(getSum(5));

/** 5. Min value of Array */
const getMinValue = (arr) => Math.min(...arr);

console.log(getMinValue([5, 4, 2, 6, 3, 11, 1]));

/** 6. Get odd number in array, return sum of odd and minimum odd  */
const getOdd = (arr) => {
  const oddArr = arr.filter((num) => num % 2 === 1);
  const min = Math.min(...oddArr);
  const sum = oddArr.reduce((prev, cur) => {
    return (prev += cur);
  }, 0);
  return { min, sum };
};

console.log(getOdd([2, 3, 4, 5, 6, 7]));

/** 7. Ten-part system */
const getViolated = (date, numberPlateArr) => {
  return numberPlateArr.reduce(
    (prev, cur) => (cur % 10 === date ? prev + 1 : prev),
    0
  );
};

console.log(getViolated(3, [23, 54, 34, 67, 23, 75]));
