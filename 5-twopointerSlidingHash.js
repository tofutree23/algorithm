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

/** 2. Common element */
const getCommonElement = (elementArr1, elementArr2) => {
  const commonArr = [];
  const arr1 = elementArr1.sort();
  const arr2 = elementArr2.sort();

  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerOne < arr1.length && pointerTwo < arr2.length) {
    if (arr1[pointerOne] == arr2[pointerTwo]) {
      commonArr.push(arr1[pointerOne++]);
      pointerTwo++;
    } else if (arr1[pointerOne] < arr2[pointerTwo]) pointerOne++;
    else pointerTwo++;
  }
  return commonArr;
};
console.log(getCommonElement([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
