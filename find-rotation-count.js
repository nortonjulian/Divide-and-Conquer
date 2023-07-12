function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const middleIdx = Math.floor((start + end) / 2);

      if (arr[middleIdx] < arr[middleIdx - 1] && arr[middleIdx] < arr[middleIdx + 1]) {
        return middleIdx;
      }

      if (arr[middleIdx] < arr[end]) {
        end = middleIdx - 1;
      } else {
        start = middleIdx + 1;
      }
    }

    return 0;
}


module.exports = findRotationCount
