/** 1. Get maximum */
const getMax = (numArr) => {
  let maxNum,
    max = 0;
  for (const number of numArr) {
    const sum = number
      .toString()
      .split("")
      .reduce((prev, cur) => (prev += Number(cur)), 0);

    if (sum > max) {
      max = sum;
      maxNum = number;
    }

    if (sum === max && number > maxNum) {
      maxNum = number;
    }
  }

  return maxNum;
};
console.log(getMax([128, 460, 603, 40, 521, 137, 123]));

/** 2. Reversed Prime */
const isPrime = (number) => {
  if (number < 2) return false;

  const sqrt = parseInt(Math.sqrt(number));

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getReversedPrime = (numArr) => {
  const answer = numArr.reduce((prev, cur) => {
    const reversedNumber = Number(cur.toString().split("").reverse().join(""));
    if (isPrime(reversedNumber)) prev.push(reversedNumber);
    return prev;
  }, []);
  return answer;
};

console.log(getReversedPrime([32, 55, 62, 20, 250, 370, 200, 30, 100]));
