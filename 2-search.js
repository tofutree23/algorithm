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

/** 4. If it's consecutive correct, accumulate. */
const accAnswer = (ansArr) => {
  let extra = 0;
  return ansArr.reduce((prev, cur) => {
    if (cur) {
      extra++;
      prev += extra;
    } else {
      extra = 0;
    }
    return prev;
  }, 0);
};
console.log(accAnswer([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

/** 5. Get students ranking */
const getRank = (pointArr) => {
  const rankArr = Array(pointArr.length).fill(1);
  pointArr.forEach((point, idx) => {
    for (let i = 0; i < pointArr.length; i++) {
      if (point < pointArr[i]) rankArr[idx]++;
    }
  });

  return rankArr;
};
console.log(getRank([87, 87, 92, 100, 76]));

/** 6. Max sum of grid */
const getMaxOfGrid = (gridArr) => {
  let maximum = 0;
  /** Row vs Col */
  for (let i = 0; i < gridArr.length; i++) {
    let rowMax = (colMax = 0);
    for (let j = 0; j < gridArr[i].length; j++) {
      rowMax += gridArr[i][j];
      colMax += gridArr[j][i];
    }
    maximum = Math.max(maximum, rowMax, colMax);
  }

  /** Diagonal */
  let rightDiagonal = (leftDiagonal = 0);
  for (let i = 0; i < gridArr.length; i++) {
    rightDiagonal += gridArr[i][i];
    leftDiagonal += gridArr[i][gridArr[i].length - i - 1];
  }
  return Math.max(maximum, rightDiagonal, leftDiagonal);
};
console.log(
  getMaxOfGrid([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);

/** 7. Map of peak */
const getPeak = (mapArr) => {
  let peakCnt = 0;

  return peakCnt;
};
console.log(
  getPeak([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
