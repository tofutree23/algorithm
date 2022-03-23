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
