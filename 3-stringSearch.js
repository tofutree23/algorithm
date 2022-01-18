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
