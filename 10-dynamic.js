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
