/** 1. Path */
const findPath = (nodes, link) => {
  const check = Array(nodes).fill(false);
  const graph = Array.from(Array(nodes + 1), () => Array(nodes + 1).fill(0));
  let paths = 0;

  for (let [a, b] of link) {
    graph[a][b] = 1;
  }

  check[1] = true;
  (function DFS(v) {
    if (v === nodes) {
      paths++;
      return;
    }

    for (let i = 1; i <= nodes; i++) {
      if (!check[i] && graph[v][i]) {
        check[i] = true;
        DFS(i);
        check[i] = false;
      }
    }
  })(1);

  return paths;
};
console.log(
  findPath(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
