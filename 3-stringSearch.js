/** 1. Is palindrome? - 1 */
const isPalindrome = (text) => {
  const originalText = text.toLocaleLowerCase();
  const invertedText = originalText.split("").reverse().join("");
  return originalText === invertedText;
};
console.log(isPalindrome("goooG"));

/** 2. Is valid palindrome? - except special characters */
const isValidPalindrome = (text) => {
  const originalText = text.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  const invertedText = originalText.split("").reverse().join("");
  return originalText === invertedText;
};
console.log(isValidPalindrome("found7, time: study; Yduts; emit, 7Dnuof"));

/** 3. Extract only numbers */
const getNumbersInText = (text) => {
  return Number(
    text
      .split("")
      .filter((character) => !isNaN(character))
      .join("")
  );
};
console.log(getNumbersInText("tge0a1h205er"));

/** 4. Calculate the distance away from e */
const calcDistance = (text, e) => {
  const distanceArr = [];
  const textArr = text.split("");

  let distance = 0;
  /** left to right */
  textArr.forEach((character) => {
    if (character !== e) distance++;
    else distance = 0;
    distanceArr.push(distance);
  });

  distance = 0;
  /** right to left */
  textArr.reverse().forEach((character, idx) => {
    const originIdx = textArr.length - 1 - idx;
    if (character !== e) distance++;
    else distance = 0;

    if (distanceArr[originIdx] > distance) {
      distanceArr[originIdx] = distance;
    }
  });
  return distanceArr;
};
console.log(calcDistance("teachermode", "e"));

/** 5. Compressed text */
const compressor = (text) => {
  let compressed = "";

  let counter = 1;
  text.split("").forEach((character, idx) => {
    if (text.split("")[idx - 1] === character) counter++;
    else {
      if (counter > 1) compressed += counter;
      compressed += character;
      counter = 1;
    }
  });
  return compressed;
};
console.log(compressor("KKHSSSSSSSE"));
