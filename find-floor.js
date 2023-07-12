function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const midIdx = Math.floor((start + end) / 2);
        const value = arr[midIdx];

        if (value === x) {
            return value;
        } else if (value < x) {
            start = midIdx + 1;
        } else {
            end = midIdx - 1;
        }
    }

    if (end >= 0 && arr[end] <= x) {
        return arr[end];
    }

    return -1;
}

module.exports = findFloor
