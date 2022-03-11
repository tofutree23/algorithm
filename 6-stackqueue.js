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

/** 3. Doll crane */
const getDolls = (board, moves) => {
  let exploded = 0;
  const stack = [];

  moves.forEach((move) => {
    const position = move - 1;
    for (let row of board) {
      if (row[position] !== 0) {
        const dangled = row[position];
        row[position] = 0;

        if (dangled === stack[stack.length - 1]) {
          exploded += 2;
          stack.pop();
        } else {
          stack.push(dangled);
        }
        break;
      }
    }
  });

  return exploded;
};
console.log(
  getDolls(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

/** 4. postfix */
const calcPostfix = (s) => {
  const stack = [];
  for (let x of s) {
    if (/[0-9]/gi.test(x)) {
      stack.push(parseInt(x));
    } else {
      let answer = 0;
      const right = stack.pop();
      const left = stack.pop();

      switch (x) {
        case "+":
          answer = left + right;
          break;

        case "*":
          answer = left * right;
          break;

        case "/":
          answer = left / right;
          break;

        case "-":
          answer = left - right;
        default:
          break;
      }
      stack.push(answer);
    }
  }
  return stack[0];
};
console.log(calcPostfix("352+*9-"));

/** 5. How many cutted ironrod */
const getIronRod = (s) => {
  const arr = s.split("");
  const stack = [];
  let answer = 0;
  for (let [i, x] of arr.entries()) {
    if (x === "(") stack.push(x);
    else {
      stack.pop();
      if (arr[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }

  return answer;
};
console.log(getIronRod("()(((()())(())()))(())"));

/** 6. Save princess */
const getPrince = (princes, count) => {
  const princeQueue = Array(princes)
    .fill(null)
    .map((_, i) => i + 1);

  while (princeQueue.length > 1) {
    for (let i = 1; i < count; i++) princeQueue.push(princeQueue.shift());
    princeQueue.shift();
  }

  return princeQueue[0];
};
console.log(getPrince(8, 3));

/** 7. Is required? */
const isRequired = (req, my) => {
  const reqList = req.split("");
  const myList = my.split("");

  for (let item of myList) {
    if (reqList.includes(item) && reqList.shift() !== item) return false;
  }

  if (reqList.length > 0) return false;

  return true;
};
console.log(isRequired("CBA", "CBDAGE"));
