/** 1. Corrent round bracket */
const isCorrentRoundBracket = (string) => {
  const stack = [];
  for (let x of string) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "No";
      stack.pop();
    }
  }
  if (stack.length > 0) return "No";

  return "Yes";
};
console.log(isCorrentRoundBracket("(()(()))(()"));
