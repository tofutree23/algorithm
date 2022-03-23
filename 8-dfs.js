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
