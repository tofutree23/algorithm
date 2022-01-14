/** 1. Receive N (1<=N<=100) integers and output only those larger than its immediate predecessor. */
const findBig = (numArr) => {
  return numArr.reduce((prev, cur, idx) => {
    if (idx === 0 || cur > numArr[idx - 1]) prev.push(cur);
    return prev;
  }, []);
};
console.log(findBig([7, 3, 9, 5, 6, 12]));

/** 2. Who can I see? */
const getPeopleCount = (heightArr) => {
  return heightArr.reduce((prev, cur) => {
    if (prev.length === 0 || prev[prev.length - 1] < cur) prev.push(cur);
    return prev;
  }, []).length;
};
console.log(getPeopleCount([130, 135, 148, 140, 145, 150, 150, 153]));

/** 3. Rock, Scissors, Paper */
const letsPlay = (candidatesA, candidatesB) => {
  return candidatesA.reduce((prev, cur, idx) => {
    if (cur === candidatesB[idx]) {
      prev.push("Draw");
      return prev;
    }
    switch (cur) {
      case "rock":
        if (candidatesB[idx] === "scissors") prev.push("A Win");
        else prev.push("B Win");
        break;
      case "scissors":
        if (candidatesB[idx] === "paper") prev.push("A Win");
        else prev.push("B Win");
        break;
      case "paper":
        if (candidatesB[idx] === "rock") prev.push("A Win");
        else prev.push("B Win");
        break;
    }
    return prev;
  }, []);
};
console.log(
  letsPlay(
    ["rock", "paper", "scissors", "scissors", "paper"],
    ["paper", "paper", "rock", "scissors", "rock"]
  )
);
