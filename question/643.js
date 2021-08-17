/**
 * 643. 子数组最大平均数 I
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 *
 * 输入：[1,12,-5,-6,50,3], k = 4
 * 输出：12.75
 * 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 *
 * 1 <= k <= n <= 30,000。
 * 所给数据范围 [-10,000，10,000]。
 */

/**
 * 第一版 空间换时间
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findMaxAverage = function (nums, k) {
//   let res = undefined
//   let index = 0
//   let hasNext = true
//   while (hasNext) {
//     let ave = 0
//     for (let i = index; i < index + k; i++) {
//       ave += (nums[i] / k)
//     }
//     if (ave > res || res === undefined) {
//       res = ave
//     }
//     index++
//     hasNext = nums[index + k - 1] !== undefined
//   }
//   return res
// }


/**
 * 第二版 滑动窗口
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0
  let ave

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] / k
    if (i > k - 1) {
      sum = sum - (nums[i - k] / k)
    }
    if (i >= k - 1) {
      ave = ave === undefined
        ? sum
        : sum > ave ? sum : ave
    }
  }
  return ave
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
// console.log(findMaxAverage([0, 1, 1, 3, 3], 4))
// console.log(findMaxAverage([5], 1))
