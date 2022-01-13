/** 1. Receive N (1<=N<=100) integers and output only those larger than its immediate predecessor. */
const findBig = (numArr) => {
  return numArr.reduce((prev, cur, idx) => {
    if (idx === 0) prev.push(cur);
    if (cur > numArr[idx - 1]) prev.push(cur);
    return prev;
  }, []);
};
console.log(findBig([7, 3, 9, 5, 6, 12]));
