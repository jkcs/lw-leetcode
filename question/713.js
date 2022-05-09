/**
 * 713. 乘积小于 K 的子数组
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
 *
 * 示例 1：
 * 输入：nums = [10,5,2,6], k = 100
 * 输出：8
 * 解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
 * 需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
 *
 * 示例 2：
 * 输入：nums = [1,2,3], k = 0
 * 输出：0
 *
 * 提示:
 * 1 <= nums.length <= 3 * 104
 * 1 <= nums[i] <= 1000
 * 0 <= k <= 106
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var numSubarrayProductLessThanK = function(nums, k) {
//   // 第一次想出的方法，直接超出时间限制了
//   let result = 0;
//   let resArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     const n = nums[i];
//     resArr = resArr.map(t => t * n).filter(t => t < k);
//     result += resArr.length;
//     if (n < k) {
//       resArr.push(n);
//       result += 1;
//     }
//   }
//   return result;
// };

// 错误思路
// var numSubarrayProductLessThanK = function(nums, k) {
//
//   // 连续子数组项公式 = n * (n + 1) / 2
//   let len = nums.length;
//   let count = len * (len + 1) / 2;
//   let max = null;
//   console.log(count, 'start --------');
//   for (let n = 0; n < len; n++) {
//     const item = nums[n];
//     if (max == null) {
//       max = item;
//     } else {
//       max *= item;
//     }
//     if (item >= k) {
//       count -= (n + 1);
//     } else {
//       if (max >= k) {
//         count -= len - n;
//         let temp = 0;
//         while (max >= k) {
//           if (temp === n) {
//             max = null;
//             break;
//           }
//           max = max / nums[temp];
//           temp++;
//         }
//       }
//     }
//   }
//   return count;
// };

// 错误思路，没有考虑，更细的数组
// 循环是左乘积，右乘积，达到中间时总乘积，除左边为一个子项，除以右边为另一个子项
// var numSubarrayProductLessThanK = function(nums, k) {
//   let left = 1;
//   let right = 1;
//   let count = 0;
//   let max = null;
//   let mid = null;
//   const len = nums.length;
//   const middle = Math.floor((len - 1) / 2);
//
//   for (let i = 0; i < len; i++) {
//     if (nums[i] < k) {
//       count++;
//     }
//     left = left * nums[i];
//     if (i !== 0 && i !== len - 1 && left < k) {
//       count++;
//     }
//     if (i === middle) {
//       max = left * right;
//       if (max < k) {
//         count++;
//       }
//     } else if (i > middle && i !== len - 1) {
//       mid = left * right / max;
//       if (mid < k) {
//         count++;
//       }
//     }
//
//     right = nums[len - 1 - i] * right;
//     if (i !== len - 1 && i !== 0 && right < k) {
//       count++;
//     }
//   }
//
//   return count;
// };

// 滑动窗口，看了解析才写出来的
var numSubarrayProductLessThanK = function(nums, k) {
  // 连续子数组项公式 Sn = n * (n + 1) / 2
  // 增加项为：Sn = Sn-1 + n
  if (k <= 1) { return 0; }
  const len = nums.length;
  let left = 0;
  let prod = 1;
  let count = 0;
  for (let i = 0; i < len; i++) {
    prod *= nums[i];
    while (prod >= k) {
      prod /= nums[left];
      left++;
    }
    count += i + 1 - left;
  }

  return count;
}
// console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
console.log(numSubarrayProductLessThanK([10, 5, 2, 6, 7, 8], 100)); // 13
// console.log(numSubarrayProductLessThanK([1,2,3], 0));
// console.log(numSubarrayProductLessThanK([1,2,3,4], 5)); // 5
// console.log(numSubarrayProductLessThanK([1,1,1], 2)); // 6
// console.log(numSubarrayProductLessThanK([10,9,10,4,3,8,3,3,6,2,10,10,9,3], 18)); // 18
