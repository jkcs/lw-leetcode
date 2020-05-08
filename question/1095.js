/**
 * √
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
// 特征： 中间高两边低 MountainArray
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]

// 伪实现
let MountainArray = {
    arrAy: [],
    get(index) {
        return this.arrAy[index]
    },
    length() {
        return this.arrAy.length
    }
}

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    const length = mountainArr.length()
    let start = 0
    let end = length - 1
    // 1. 2分找峰值
    while(start < end) {
        let mid = (start + end + 1) >> 1
        // 左边有序， 可以排除 0 ~ i -1
        if (mountainArr.get(mid) > mountainArr.get(mid - 1)) {
            start = mid
        } else {
            end = mid - 1
        }
    }

    // 2. 峰值左边2分找 找到直接返回
    let leftResult = binaryleftSearch(mountainArr, target, 0, end)
    
    if (leftResult === -1) {
        // 3. 峰值右边2分找 找到直接返回
        return binaryRightSearch(mountainArr, target, start, length -1)
    }
    return leftResult
};

function binaryleftSearch(srcArray, des, start, end) {
    // 确保不会出现重复查找，越界
    while (start <= end) {
        // 计算出中间索引值
        let middle = (end + start)>>>1;// 防止溢出
        
        if (des == srcArray.get(middle)) {
            return middle;
        // 判断下限
        } else if (des < srcArray.get(middle)) {
            end = middle - 1;
        // 判断上限
        } else {
            start = middle + 1;
        }
    }
    //若没有，则返回-1
    return -1;
}

function binaryRightSearch(srcArray, des, start, end) {
    // 确保不会出现重复查找，越界
    while (start <= end) {
        // 计算出中间索引值
        let middle = (end + start)>>>1;// 防止溢出
        
        if (des == srcArray.get(middle)) {
            return middle;
        // 判断下限
        } else if (des > srcArray.get(middle)) {
            end = middle - 1;
        // 判断上限
        } else {
            start = middle + 1;
        }
    }
    //若没有，则返回-1
    return -1;
}
// 测试用例
// MountainArray.arrAy = [1,2,3,4,5,3,1]
// console.log(findInMountainArray(3, MountainArray))
// MountainArray.arrAy = [0, 1, 2, 4, 2, 1]
// console.log(findInMountainArray(3, MountainArray))
// MountainArray.arrAy = [1, 5, 2]
// console.log(findInMountainArray(2, MountainArray))
// MountainArray.arrAy = [0,5,3,1]
// console.log(findInMountainArray(1, MountainArray))