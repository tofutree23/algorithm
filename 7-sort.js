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

/** 6. Compore with original array */
const compareArray = (arr) => {
  const answer = [];
  const originalArr = [...arr].sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== originalArr[i]) answer.push(i + 1);
  }

  return answer;
};
console.log(compareArray([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(compareArray([120, 130, 150, 150, 130, 150]));

/** 7. Sort coordinate array */
const coordinate = (coorArr) => {
  coorArr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return coorArr;
};
console.log(
  coordinate([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);

/** 8. Assing meeting room
 * It should be sorted based on the meeting that ends first.
 * When sorted based on the meeting that starts first, the optimal solution cannot be derived because the end time is unknown.
 */
const assign = (reservations) => {
  let answer = 0;
  let endtime = 0;

  /** sort array with endtime */
  reservations.sort((a, b) => {
    /** if endtimes are same, sort with starttime */
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  reservations.forEach((reservation) => {
    if (reservation[0] >= endtime) {
      answer++;
      endtime = reservation[1];
    }
  });

  return answer;
};
console.log(
  assign([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  assign([
    [3, 3],
    [2, 3],
    [1, 3],
  ])
);

/** 9. Marriage */
const getMaxPopulation = (guests) => {
  let max = 0;
  const timeline = [];
  guests.forEach(([arrived, leaved]) => {
    timeline.push([arrived, "arrived"]);
    timeline.push([leaved, "leaved"]);
  });
  timeline.sort((a, b) => {
    // count leave first
    if (a[0] === b[0]) return b[1].charCodeAt() - a[1].charCodeAt();
    return a[0] - b[0];
  });
  let currentPopulation = 0;
  timeline.forEach(([_, state]) => {
    if (state === "arrived") currentPopulation++;
    else currentPopulation--;
    max = Math.max(max, currentPopulation);
  });
  return max;
};
console.log(
  getMaxPopulation([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);

/** 10. Binary search - Return array index */
const binary = (arr, number) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === number) return mid;

    if (arr[mid] < number) left = mid + 1;
    if (arr[mid] > number) right = mid - 1;
  }
};
console.log(binary([23, 87, 65, 12, 57, 32, 99, 81], 32));

/** 11. Decision - with binary */
const getDVDLength = (songs, vol) => {
  let answer = 0;
  let left = songs[songs.length - 1];
  let right = songs.reduce((prev, cur) => prev + cur, 0);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 1;
    let sum = 0;

    for (let x of songs) {
      if (sum + x > mid) {
        count++;
        sum = x;
      } else {
        sum += x;
      }
    }

    if (count <= vol) {
      right = mid - 1;
      answer = mid;
    } else {
      left = mid + 1;
    }
  }

  return answer;
};
console.log(
  getDVDLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 3)
);
