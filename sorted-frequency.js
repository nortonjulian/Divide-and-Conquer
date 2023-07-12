function sortedFrequency(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let middleIdx = Math.floor((start + end) / 2);

        if (arr[middleIdx] < target) {
            start = middleIdx + 1;
        } else if (arr[middleIdx] > target) {
            end = middleIdx - 1;
        } else {
            let first = middleIdx;
            let last = middleIdx;

            while(arr[middleIdx - 1] === target) {
                first--;
            }

            while(arr[middleIdx + 1] === target) {
                first++;
            }

            return last - first + 1;
        }
    }
    return -1;
}

module.exports = sortedFrequency
