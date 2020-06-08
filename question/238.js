/**
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 
 *  
 * 
 * 示例:
 * 
 * 输入: [1,2,3,4]
 * 6 3 2 4
 * 6 8 12 6
 * 输出: [24,12,8,6]
 *  
 * 
 * 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
 * 
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * 
 * 进阶：
 * 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     let result = []
//     // 思路1 超时
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i !== j) {
//                 result[i]  = (result[i] !== undefined) ? (result[i] * nums[j]) : nums[j]
//             }
//         }
//     }
//     return result
// };

// var productExceptSelf = function (nums) {
//     // 思路2 想办法用一层循环
//     let tmp = 1
//     let maxArr = []
//     // 从左乘到右
//     for (let i = 0; i < nums.length; i++) {
//         tmp *= nums[i - 1] === undefined ? 1 : nums[i - 1]
//         maxArr[i] = tmp
//     }

//     tmp = 1
//     // 从右乘到左
//     for (let i = nums.length - 1; i > 0; i--) {
//         tmp *= nums[i]
//         maxArr[i - 1] *= tmp
//     }
//     return maxArr
// };


var productExceptSelf = function (nums) {
    // 思路3 想办法用一次循环
    let tmpLeft = 1
    let tmpRight = 1
    let maxArr = []
    // 从左乘到右同时从右乘到左
    let len = nums.length
    for (let i = 0; i < len; i++) {
        let j = len - 1 - i
        tmpLeft *= nums[i - 1] === undefined ? 1 : nums[i - 1]
        maxArr[i] = maxArr[i] === undefined ? tmpLeft : maxArr[i] * tmpLeft

        tmpRight *= nums[j + 1] === undefined ? 1 : nums[j + 1]
        maxArr[j] = maxArr[j] === undefined ? tmpRight : maxArr[j] * tmpRight
    }

    return maxArr
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([4, 3, 2, 1, 2]));
console.log(productExceptSelf([9, 0, -2]));
// 0 -18 0
// console.log(productExceptSelf([2,2,3,4]));
// console.log(productExceptSelf([2,2,3,4, 1]));
// 24 24 16 12