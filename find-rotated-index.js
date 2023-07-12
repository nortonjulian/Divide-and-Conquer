function findRotatedIndex(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let middleIdx = Math.floor((start + end) / 2);

        if (arr[middleIdx] === target) {
            return middleIdx;
        }

        if (arr[start] <= arr[middleIdx]) {
            if(target >= arr[start] && target < arr[middleIdx]) {
                end = middleIdx - 1;
            } else {
                start = middleIdx + 1;
            }
        } else {
            if(target > arr[middleIdx] && target <= arr[end]){
                start = middleIdx + 1;
            } else {
                end = middleIdx - 1;
            }
        }
    }

    return -1;
}

module.exports = findRotatedIndex
