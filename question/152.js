/**
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 *
 * 示例 1:
 *
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 示例 2:
 *
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 */

/**
 * 思路1. 直接两次循环取每次最大的那个
 * 思路2.
 *      循环一次找不出方法
 *      循环
 *
 */

/**
* @param {number[]} nums
* @return {number}
*/
// var maxProduct = function (nums) {
//     // 思路1
//     let max
//     for (let i = 0; i < nums.length; i++) {
//         let sum = nums[i]
//         max = max === undefined ? sum : Math.max(max, sum)

//         for (let j = i + 1; j < nums.length; j++) {
//             sum = sum * nums[j]
//             max = max === undefined ? sum : Math.max(max, sum)
//         }
//     }

//     return max
// };

// var maxProduct = function (nums) {
//     let max = [nums[0]]
//     let min = [nums[0]]
//     let result = nums[0]
//     for (let i = 1; i < nums.length; i++) {
//         max[i] = Math.max(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i])
//         min[i] = Math.min(min[i - 1] * nums[i], max[i - 1] * nums[i], nums[i])
//         result = Math.max(max[i], min[i], result)
//     }

//     return result
// };

// 子数组乘积最大
var maxProduct = function (nums) {
    let max = -Infinity, imax = 1, imin = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            let tmp = imax;
            imax = imin;
            imin = tmp;
        }
        imax = Math.max(imax * nums[i], nums[i]);
        imin = Math.min(imin * nums[i], nums[i]);
        console.log(imax, imin);

        max = Math.max(max, imax);
    }
    return max;
}

// 子数组加和最大
var maxProduct2 = function (nums) {
    let max = -Infinity, imax = 0, imin = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            imin = imax;
        }
        imax = Math.max(imax + nums[i], nums[i]);
        imin = Math.min(imin + nums[i], nums[i]);

        max = Math.max(max, imax);
    }
    return max;
}



// console.log(maxProduct([2,3,-2,4]))
// console.log(maxProduct([-2,0,-1]))
// console.log(maxProduct([-2, 0, -1, 7, 4, 4]))
// console.log(maxProduct([-2]))
// console.log(maxProduct([0, 2]))
// console.log(maxProduct([3,-1,4]))
// console.log(maxProduct([-2, 3, -4]))
// console.log(maxProduct([-2, -3, -4]))
// console.log(maxProduct([-1,-2,-9,-6]))
console.log(maxProduct2([5, 4, -1, 7, 8])) // 23
console.log(maxProduct2([5, 4, 1, 7, 8])) // 25
console.log(maxProduct2([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxProduct2([1])) // 1
console.log(maxProduct2([8, 9, -7])) // 17
console.log(maxProduct2([-8, -9, -7])) // 17
console.log(maxProduct2([-8, -9, -7, 6, 8])) // 17
console.log(maxProduct2([9, -9])) // 17
