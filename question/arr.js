function sort(arr) {
    if (!arr || arr.length === 0) return []

    let point = arr.length >>> 1
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (i!==point) {
            if (item < arr[point]) {
                left.push(item)
            } else {
                right.push(item)
            }
        }
    }
    let sortLeft = [].concat(sort(left))
    sortLeft.push(arr[point])
    return sortLeft.concat(sort(right))
}

function bubbleSort(array) {
    let result = array
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const item = array[i]
            const item2 = array[j];
            if (item > item2) {
                result[i] = item2
                result[j] = item
            }
        }
    }
    return result
}


// console.log(sort([1, 6, 5, 5, 4, 9]));
// console.log(bubbleSort([1, 6, 5, 5, 4, 9]));
