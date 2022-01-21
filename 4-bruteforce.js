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
