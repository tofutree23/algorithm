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

/** 8. I know seven dwarfs but there's nine! */
const getOriginalDwarfs = (arr) => {
  const sum = arr.reduce((prev, cur) => prev + cur, 0);
  /**
   * I don't wanna use double for statement......😅
   * Nice try, but the readability is bad...😞
   */
  arr.forEach((num, idx) => {
    if (arr[idx + 1]) {
      arr.forEach((innerNum, innerIdx) => {
        if (innerIdx !== 0) {
          if (sum - (num + innerNum) === 100) {
            arr.splice(innerIdx, 1);
            arr.splice(idx, 1);
          }
        }
      });
    }
  });

  return arr;
};

console.log(getOriginalDwarfs([20, 7, 23, 19, 10, 8, 13, 15, 25]));

/** 9. A to # */
const convertAtoSharp = (word) => word.replaceAll(/A/gi, "#");
console.log(convertAtoSharp("BANaNA"));

/** 10. Count alphabet */
const getRCount = (text) => text.split("R").length - 1;
console.log(getRCount("COMPUTERPROGRAMMING"));

/** 11. Find uppercase */
const findUppercase = (text) => {
  let uppercaseCnt = 0;
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
  const filteredText = text.replaceAll(regExp, "");

  for (let letter of filteredText) {
    if (letter === letter.toLocaleUpperCase()) uppercaseCnt++;
  }

  return uppercaseCnt;
};
console.log(findUppercase("HeLloW?"));

/** 12. Convert all characters into uppercase */
const convertAllUpper = (text) => text.toLocaleUpperCase();
console.log(convertAllUpper("HelLow?"));

/** 13. Switch upper and lower case */
const switchCase = (text) => {
  let answer = "";
  for (let letter of text) {
    if (letter === letter.toLocaleUpperCase())
      answer += letter.toLocaleLowerCase();
    else if (letter === letter.toLocaleLowerCase())
      answer += letter.toLocaleUpperCase();
  }
  return answer;
};
console.log(switchCase("HeLlOw?!"));

/** 14. The longest string */
const findLongest = (textArr) => {
  return textArr.reduce((prev, cur) => {
    let longest = "";
    if (cur.length > prev.length) longest = cur;
    else longest = prev;
    return longest;
  }, "");
};
console.log(findLongest(["teacher", "time", "student", "beautiful", "good"]));

/** 15. FInd a middle letter. If length of word is even, find two middle letters */
const findMiddleLetter = (text) => {
  const middleLocation = Math.floor(text.length / 2);
  if (text.length % 2 === 1)
    return text.substring(middleLocation, middleLocation + 1);
  else return text.substring(middleLocation - 1, middleLocation + 1);
};
console.log(findMiddleLetter("hello"));

/** 16. Remove duplicate characters */
const deleteDuplicatedCharacters = (text) => {
  let answer = "";
  for (let letter of text) {
    if (!answer.includes(letter)) answer += letter;
  }
  return answer;
};
console.log(deleteDuplicatedCharacters("hello, world! this is an apple!"));

/** 17. Remove duplicate sentences */
const deleteDuplicatedSentences = (textArr) => {
  const textSet = new Set(textArr);
  return [...textSet];
};
console.log(
  deleteDuplicatedSentences([
    "good",
    "morning",
    "good",
    "afternoon",
    "good",
    "night",
  ])
);
