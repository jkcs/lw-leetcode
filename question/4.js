/**
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * ~
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 */

 /**
  * 脑子穷 以 O(log(m + n)) 复杂度想不出方法
  */

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays = function (nums1, nums2) {
    // let max1 = nums1[nums1.length]
    // let min1 = nums1[0]
    // let max2 = nums2[nums2.length]
    // let min2 = nums2[0]
    // if (max1 <= min2 || max2 <= min1) {
    //     // 头尾相接
    // } else {
    //     // 判断 奇偶
    //     // 需要用二分查找
    //     // 偶数项 中位数 有两个
    //     // 中位数 left < 中位数1 <= 中位数2 < right

    // }

    // 牛人思路 O((m + n) / 2) 每次找最小那个 找 (m + n)/2 次一定是中间那个了
    if (nums1.length == 0) {
        let length = nums2.length;
        let middle = length >>> 1;
        if (length % 2 == 0) {
            return (nums2[middle] + nums2[middle - 1]) / 2.0;
        } else {
            return nums2[middle];
        }
    }
    if (nums2.length == 0) {
        let length = nums1.length;
        let middle = length >>> 1;
        if (length % 2 == 0) {
            return (nums1[middle] + nums1[middle - 1]) / 2.0;
        } else {
            return nums1[middle];
        }
    }

    let l1 = nums1.length;
    let l2 = nums2.length;
    let total = l1 + l2;
    let middle = total >>> 1;
    let currentIndex = 0;

    let i1 = 0;
    let i2 = 0;
    let last = 0;
    let current = 0;
    while (currentIndex <= middle) {
        currentIndex++;
        last = current;
        if (i2 == l2) {
            current = nums1[i1];
            i1++;
            continue;
        }
        if (i1 == l1) {
            current = nums2[i2];
            i2++;
            continue;
        }
        if (nums1[i1] <= nums2[i2]) {
            current = nums1[i1];
            i1++;
        } else {
            current = nums2[i2];
            i2++;
        }

    }
    if (total % 2 == 0) {
        return (last + current) / 2.0;
    } else {
        return current;
    }

};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 2, 5, 7], [3, 4, 6, 8, 9, 10, 11]));
// 1234567
 // 牛人思路 O(log(m + n)) 取分割 k = (m + n)/2 截取比 k 小的数段 中的左边数段的最大值，右边最小值