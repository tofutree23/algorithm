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

/** 2. Path2 - with list */
const findPath2 = (nodes, link) => {
  const check = Array(nodes).fill(false);
  // make list with empty array
  const graph = Array.from(Array(nodes + 1), () => Array());
  let paths = 0;

  // push node's number (not index.. that's the reason why array start with index 1)
  for (let [a, b] of link) {
    graph[a].push(b);
  }

  check[1] = true;
  (function DFS(v) {
    if (v === nodes) {
      paths++;
      return;
    }

    for (let i = 0; i < graph[v].length; i++) {
      const node = graph[v][i];
      if (!check[node]) {
        check[node] = true;
        DFS(node);
        check[node] = false;
      }
    }
  })(1);

  return paths;
};
console.log(
  findPath2(5, [
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

/** 3. Maze */
const findMaze = (maze) => {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  maze[0][0] = 1;

  (function DFS(x, y) {
    if (x === 6 && y === 6) {
      answer++;
      return;
    }
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx <= 6 && ny <= 6 && !maze[nx][ny]) {
        maze[nx][ny] = 1;
        DFS(nx, ny);
        maze[nx][ny] = 0;
      }
    }
  })(0, 0);

  return answer;
};
console.log(
  findMaze([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
