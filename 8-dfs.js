/** 1. Recursive function */
const recursive = (n) => {
  if (n < 1) return;
  recursive(n - 1);
  console.log(n);
};
recursive(3);

/** 2. Recursive function - 2 Binary */
const convBinary = (number, answer) => {
  if (number < 1) return;
  convBinary(Math.floor(number / 2), answer);
  answer.push(`${number % 2}`);
  return answer.join("");
};
console.log(convBinary(11, []));

/** 3. DFS - tree */
const binaryTreeOrder = (v, preOrder, inOrder, postOrder) => {
  if (7 < v) return;
  preOrder.push(v);
  binaryTreeOrder(v * 2, preOrder, inOrder, postOrder); // left
  inOrder.push(v);
  binaryTreeOrder(v * 2 + 1, preOrder, inOrder, postOrder); // right
  postOrder.push(v);

  return [preOrder.join(", "), inOrder.join(", "), postOrder.join(", ")];
};
console.log(binaryTreeOrder(1, [], [], []));

/** 4. DFS - Subset */
const subset = (v, check, answer) => {
  if (v > 3) {
    const temp = [];
    for (let i = 0; i < check.length; i++) {
      if (check[i]) temp.push(i + 1);
    }

    if (temp.length !== 0) answer.push(temp);
    return;
  }
  check[v - 1] = 1;
  subset(v + 1, check, answer);
  check[v - 1] = 0;
  subset(v + 1, check, answer);

  return answer;
};
console.log(subset(1, [0, 0, 0], []));

/** 5. DFS - Subset with the same sum */
const sameSumSubset = (arr) => {
  let answer = "NO";
  let flag = 0;
  const maxLevel = arr.length;
  const total = arr.reduce((prev, cur) => prev + cur, 0);
  (function findSubset(level, sum) {
    if (flag) return;
    if (level === maxLevel) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
      return;
    }

    findSubset(level + 1, sum + arr[level]);
    findSubset(level + 1, sum);
  })(0, 0);

  return answer;
};
console.log(sameSumSubset([1, 3, 5, 6, 7, 10]));

/** 6. DFS - Binary tree */
const getGo = (arr) => {
  const limit = 259;
  let answer = Number.MIN_SAFE_INTEGER;
  (function DFS(layer, sum) {
    if (sum > limit) return;
    if (layer === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(layer + 1, sum + arr[layer]);
      DFS(layer + 1, sum);
    }
  })(0, 0);
  return answer;
};
console.log(getGo([81, 58, 42, 33, 61]));

/** 7. DFS - Max score */
const getMaxScore = (arrScore, arrTime) => {
  const limit = 20;
  let answer = 0;
  (function DFS(layer, sum, time) {
    if (time > limit) return;
    if (layer === arrScore.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(layer + 1, sum + arrScore[layer], time + arrTime[layer]);
      DFS(layer + 1, sum, time);
    }
  })(0, 0, 0);
  return answer;
};
console.log(getMaxScore([10, 25, 15, 6, 7], [5, 12, 8, 3, 4]));

/** 8. Duplicated permutation */
const getDuplicatedPermutation = (n, m) => {
  let answer = [];
  let temp = new Array(m).fill(0);
  (function DFS(layer) {
    if (layer === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        temp[layer] = i;
        DFS(layer + 1);
      }
    }
  })(0);
  return answer;
};
console.log(getDuplicatedPermutation(3, 2));

/** 9. Coin combination */
const coinCombi = (price, arr) => {
  let answer = Number.MAX_SAFE_INTEGER;

  (function DFS(layer, sum) {
    if (sum > price) return;
    if (layer >= answer) return;
    if (sum === price) {
      answer = Math.min(answer, layer);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      DFS(layer + 1, sum + arr[i]);
    }
  })(0, 0);

  return answer;
};
console.log(coinCombi(15, [1, 2, 5]));

/** 10. Permutation */
const getPermutation = (m, arr) => {
  const answer = [];
  const temp = new Array(m).fill(0);
  const check = new Array(m).fill(false);

  (function DFS(layer) {
    if (layer === m) {
      answer.push(temp.slice());
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!check[i]) {
        check[i] = true;
        temp[layer] = arr[i];
        DFS(layer + 1);
        check[i] = false;
      }
    }
  })(0);
  return answer;
};
console.log(getPermutation(2, [3, 6, 9]));

/** 11. DFS - Factorial */
const getFactorial = (number) => {
  if (number === 1) return 1;
  return number * getFactorial(number - 1);
};
console.log(getFactorial(5));

/** 12. Memoization - Combination */
const getCombination = (n, r) => {
  if (n === r || r === 0) return 1;
  return getCombination(n - 1, r - 1) + getCombination(n - 1, r);
};
console.log(getCombination(5, 3));

const getCombinationWithMemoization = (n, r, memo = []) => {
  /** I don't know why this is different */
  const arrType1 = Array(n + 1).fill(Array(r + 1).fill(0));
  const arrType2 = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  memo = memo.length === 0 ? arrType2 : memo;
  if (memo[n][r] > 0) return memo[n][r];
  if (n === r || r === 0) return 1;
  return (memo[n][r] =
    getCombinationWithMemoization(n - 1, r - 1, memo) +
    getCombinationWithMemoization(n - 1, r, memo));
};
console.time("memo");
console.log(getCombinationWithMemoization(33, 19));
console.timeEnd("memo");
