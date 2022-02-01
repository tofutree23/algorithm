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

/** 3. Continuous sequence - make 6 */
const makeSixArrCount = (arr) => {
  let answer = 0;
  let followPointer = 0;
  let sum = 0;

  for (let leadPointer = 0; leadPointer < arr.length; leadPointer++) {
    sum += arr[leadPointer];
    if (sum === 6) answer++;
    while (sum >= 6) {
      sum -= arr[followPointer++];
      if (sum === 6) answer++;
    }
  }
  return answer;
};
console.log(makeSixArrCount([1, 2, 1, 3, 1, 1, 1, 2]));

/** 4. Continuous sequence - lower than 5 */
const makeLowerThanFiveCount = (arr) => {
  let answer = 0;
  let sum = 0;
  let followPointer = 0;

  for (let leadPointer = 0; leadPointer < arr.length; leadPointer++) {
    sum += arr[leadPointer];
    while (sum > 5) {
      sum -= arr[followPointer++];
    }
    answer += leadPointer - followPointer + 1;
  }
  return answer;
};
console.log(makeLowerThanFiveCount([1, 3, 1, 2, 3]));

/** 5. Maximum sales */
const getThreeDaysMaximumSales = (arr) => {
  let answer = 0;
  let sum = 0;

  // initiate
  for (let i = 0; i < 3; i++) sum += arr[i];
  answer = sum;

  for (let i = 3; i < arr.length; i++) {
    sum += arr[i] - arr[i - 3];
    answer = Math.max(answer, sum);
  }

  return answer;
};
console.log(getThreeDaysMaximumSales([12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

/** 6. Election */
const getWinner = (text) => {
  const candidatesMap = new Map();
  for (let word of text) {
    if (candidatesMap.has(word))
      candidatesMap.set(word, candidatesMap.get(word) + 1);
    else candidatesMap.set(word, 1);
  }

  let candidate = "";
  let max = 0;
  candidatesMap.forEach((value, key) => {
    if (value > max) {
      max = value;
      candidate = key;
    }
  });

  return candidate;
};
console.log(getWinner("BACBACCACCBDEDE"));

/** 7. Anagram */
const getIsAnagram = (text1, text2) => {
  const textHash = new Map();
  for (let t of text1) {
    if (textHash.has(t)) textHash.set(t, textHash.get(t) + 1);
    else textHash.set(t, 1);
  }

  for (let t of text2) {
    if (!textHash.has(t)) return "false";
    textHash.set(t, textHash.get(t) - 1);
  }

  const isAllZero = [...textHash.values()].filter((value) => value !== 0);

  if (isAllZero.length === 0) return "true";
  else return "false";
};
console.log(getIsAnagram("AbaAeCe", "baeeACA"));
