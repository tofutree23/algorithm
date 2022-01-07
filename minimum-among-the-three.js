/** Find the minimum value among the three numbers */
const solution = (a, b, c) => {
  let answer;

  if (a < b) answer = a;
  else answer = b;

  return answer < c ? answer : c;
};

console.log(solution(2, 1, 5));
