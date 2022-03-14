/** 1. Selection sort */
const selection = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return arr;
};
console.log(selection([13, 5, 11, 7, 23, 15]));

/** 2. Bubble sort */
const bubble = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};
console.log(bubble([13, 5, 11, 7, 23, 15]));

/** 3. Special sort - Regardless of the actual size of the numbers */
const special = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] >= 0 && arr[j + 1] <= 0)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};
console.log(special([1, 2, 3, -3, -2, 5, 6, -6]));

/** 4. Insert sort */
const insert = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const selected = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (selected < arr[j]) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = selected;
  }
  return arr;
};
console.log(insert([11, 7, 5, 6, 10, 9]));

/** 5. LRU (Least Recently Used) */
const setCache = (tasks) => {
  const answer = Array(5).fill(0);
  tasks.forEach((item) => {
    let position = -1; // not used task recently.. aka miss
    if (answer.includes(item)) {
      position = answer.indexOf(item);
    }

    if (position !== -1) {
      answer.splice(answer.indexOf(item), 1);
    }
    answer.unshift(item);

    if (answer.length > 5) answer.pop();
  });

  return answer;
};
console.log(setCache([1, 2, 3, 2, 6, 2, 3, 5, 7]));
