/** 1. Merge two array */
const mergeArray = (arr1, arr2) => {
  const mergedArr = [];
  let oneLength = arr1.length;
  let twoLength = arr2.length;

  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerOne < oneLength && pointerTwo < twoLength) {
    if (arr1[pointerOne] <= arr2[pointerTwo])
      mergedArr.push(arr1[pointerOne++]);
    else mergedArr.push(arr2[pointerTwo++]);
  }

  while (pointerOne < oneLength) mergedArr.push(arr1[pointerOne++]);
  while (pointerTwo < twoLength) mergedArr.push(arr2[pointerTwo++]);

  return mergedArr;
};
console.log(mergeArray([1, 3, 5], [2, 3, 6, 7, 9]));
