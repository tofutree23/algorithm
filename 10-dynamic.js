/** 1. Stairs */
const howToClimbStairs = (floor) => {
  const dynamic = Array(floor + 1).fill(0);

  dynamic[1] = 1;
  dynamic[2] = 2;

  for (let i = 3; i <= floor; i++) {
    dynamic[i] = dynamic[i - 1] + dynamic[i - 2];
  }

  return dynamic[dynamic.length - 1];
};
console.log(howToClimbStairs(7));

/** 2. Across the bridge */
const bridge = (stone) => {
  const dynamic = Array(stone + 1).fill(0);

  dynamic[1] = 1;
  dynamic[2] = 2;

  for (let i = 3; i <= stone; i++) {
    dynamic[i] = dynamic[i - 1] + dynamic[i - 2];
  }

  return dynamic[dynamic.length - 1] + dynamic[dynamic.length - 2];
};
console.log(bridge(7));

/** 3. LIS */
const getLTS = (arr) => {
  let answer = 0;
  const dynamic = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    let maxLength = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < number && dynamic[j] > maxLength) {
        maxLength = dynamic[j];
      }
    }
    dynamic[i] = maxLength + 1;
    answer = Math.max(dynamic[i], answer);
  }

  return answer;
};
console.log(getLTS([5, 3, 7, 8, 6, 2, 9, 4]));

/** 4. Coin exchange - Knapsack */
const getCoinExchange = (arr, amount) => {
  const dynamic = Array(amount + 1).fill(1000);
  dynamic[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i]; j <= amount; j++) {
      dynamic[j] = Math.min(dynamic[j], dynamic[j - arr[i]] + 1);
    }
  }
  return dynamic[amount];
};
console.log(getCoinExchange([1, 2, 5], 15));

/** 5. Maximum number */
const maxPoint = (arr) => {
  const timeLimit = 20;

  const dynamic = Array(timeLimit + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const [point, time] = arr[i];

    for (let j = timeLimit; j >= time; j--) {
      dynamic[j] = Math.max(dynamic[j], dynamic[j - time] + point);
    }
  }

  return dynamic[timeLimit];
};
console.log(
  maxPoint([
    [10, 5], // [point, time]
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
