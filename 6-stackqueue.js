/** 1. Corrent round bracket */
const isCorrentRoundBracket = (string) => {
  const stack = [];
  for (let x of string) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  if (stack.length > 0) return false;

  return true;
};
console.log(isCorrentRoundBracket("(()(()))(()"));

/** 2. Remove between () */
const delBetweenBracket = (string) => {
  if (isCorrentRoundBracket(string)) return false;

  const stack = [];
  for (const word of string) {
    stack.push(word);

    if (word === ")") {
      while (stack.pop() !== "(");
    }
  }

  return stack.join("");
};
console.log(delBetweenBracket("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
