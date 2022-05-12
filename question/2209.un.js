/**
 * 2209. 用地毯覆盖后的最少白色砖块
 *
 * 给你一个下标从 0 开始的 二进制 字符串 floor ，它表示地板上砖块的颜色。
 *
 * floor[i] = '0' 表示地板上第 i 块砖块的颜色是 黑色 。
 * floor[i] = '1' 表示地板上第 i 块砖块的颜色是 白色 。
 * 同时给你 numCarpets 和 carpetLen 。
 * 你有 numCarpets 条 黑色 的地毯，每一条 黑色 的地毯长度都为 carpetLen 块砖块。
 * 请你使用这些地毯去覆盖砖块，使得未被覆盖的剩余 白色 砖块的数目 最小 。地毯相互之间可以覆盖。
 * 请你返回没被覆盖的白色砖块的 最少 数目。
 *
 * 示例1：
 * 输入：floor = "10110101", numCarpets = 2, carpetLen = 2
 * 输出：2
 * 解释：
 * 上图展示了剩余 2 块白色砖块的方案。
 * 没有其他方案可以使未被覆盖的白色砖块少于 2 块。
 *
 * 示例1：
 * 输入：floor = "11111", numCarpets = 2, carpetLen = 3
 * 输出：0
 * 解释：
 * 上图展示了所有白色砖块都被覆盖的一种方案。
 * 注意，地毯相互之间可以覆盖。
 *
 * 提示：
 * 1 <= carpetLen <= floor.length <= 1000
 * floor[i] 要么是 '0' ，要么是 '1' 。
 * 1 <= numCarpets <= 1000
 *
 */

/**
 * 自己写的超时，再想想
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
// var minimumWhiteTiles = function(floor, numCarpets, carpetLen) {
//   const base = '0'.repeat(carpetLen);
//   const queue = [floor];
//
//   let res = (floor.match(/1/g) || []).length;
//
//   while (numCarpets) {
//     const size = queue.length;
//     for (let i = 0; i < size; i++) {
//       const curr = queue.shift();
//       for (let j = 0; j < floor.length; j++) {
//         if (curr[j] === '1') {
//           let next = curr.slice(0, j) + base + curr.slice(j + carpetLen);
//           if (j + carpetLen > floor.length) {
//             next = curr.substring(0, j) + '0'.repeat(floor.length - j);
//           }
//           const nextRes = (next.match(/1/g) || []).length;
//           if (nextRes < res) {
//             res = nextRes;
//           }
//           queue.push(next);
//         }
//       }
//     }
//     numCarpets--;
//   }
//
//   return res;
// };


// var minimumWhiteTiles = function(floor, numCarpets, carpetLen) {
//   const base = '0'.repeat(carpetLen);
//   let res = (floor.match(/1/g) || []).length;
//   const reg = new RegExp(`1{1,${carpetLen}}`);
//   console.log(floor.replace(reg, arg => '0'.repeat(arg.length)));
//   while (numCarpets) {
//     const queue = [];
//     for (let i = 0; i < floor.length; i++) {
//       const subStr = floor.substring(i);
//       queue.push(floor.substring(0, i) + subStr.replace(reg, arg => '0'.repeat(arg.length)));
//     }
//     numCarpets--;
//   }
// };


// 保留思路
// while (numCarpets) {
//     let maxReplace = 0;
//     let history = [];
//     console.log(floorArr, `-----${numCarpets}`);
//     for (let i = 0; i < floorArr.length; i++) {
//       const item = floorArr[i];
//       const min = Math.min(item, carpetLen)
//       if (item > 0 && maxReplace < min) {
//         let sum = carpetLen - item;
//         floorArr[i] = sum > 0 ? sum : -item;
//         if (history) {
//           for (let j = 0; j < history.length; j++) {
//             const [index, val] = history[j]
//             floorArr[index] = val
//           }
//         }
//         history = [];
//         let tempReplace = sum < 0 ? carpetLen : item ;
//         if (sum > 0) {
//           for (let j = i + 1; j < floorArr.length; j++) {
//             if (floorArr[j] === 0) continue;
//             const t = floorArr[j];
//             sum = Math.abs(sum) - Math.abs(t)
//             if (t < 0) {
//               floorArr[j] = sum > 0 ? ;
//             }
//             if (t > 0) {
//               floorArr[j] = Math.abs(sum) > Math.abs(t) ? -t : t - Math.abs(sum);
//             }
//             history.push([j, t]);
//             if (sum >= 0 || j === floorArr.length - 1) {
//               floorArr[i] = sum;
//               break;
//             }
//           }
//         }
//
//         // if (floorArr[i] < 0) {
//         //   let sum = floorArr[i];
//         //   for (let j = i + 1; j < floorArr.length; j++) {
//         //     const t = floorArr[j];
//         //     sum = Math.abs(sum) - Math.abs(t)
//         //     if (t < 0) {
//         //       floorArr[j] = Math.abs(sum) > Math.abs(t) ? t : Math.abs(sum) + t;
//         //     }
//         //     if (t > 0) {
//         //       floorArr[j] = Math.abs(sum) > Math.abs(t) ? -t : t - Math.abs(sum);
//         //     }
//         //     history.push([j, t]);
//         //     if (sum >= 0 || j === floorArr.length - 1) {
//         //       floorArr[i] = sum;
//         //       break;
//         //     }
//         //   }
//         // } else {
//         //   history = [i, item]
//         // }
//
//       }
//     }
//     minWhite = minWhite - maxReplace;
//     numCarpets--;
//   }

// 时间超时限制
var minimumWhiteTiles = function(floor, numCarpets, carpetLen) {
  let max = 0;
  // 暴力解法
  let min = (floor.match(/1/g) || []).length;
  let minStr = floor;
  while (numCarpets) {
    let str = minStr;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '1') {
        let temp = str.substring(0, i) + '0'.repeat(carpetLen) + str.substring(i + carpetLen);
        if (temp.length > floor.length) {
          temp = temp.substring(0, floor.length);
        }
        const len = (temp.match(/1/g) || []).length;
        if (len < min) {
          minStr = temp;
          min = len;
        }
      }
    }
    max = min;
    numCarpets--;
  }
  return max;
};

// 太难了，躺平了，做不出来

// console.log(minimumWhiteTiles('10110101', 2, 2)); // 2
// console.log(minimumWhiteTiles('1000110101', 2, 2)); // 2
// console.log(minimumWhiteTiles('10111101', 2, 2)); // 2
// console.log(minimumWhiteTiles('1011', 2, 2)); // 0
// console.log(minimumWhiteTiles('0111110111011111111110111111 110011111111', 5, 1));
// console.log(minimumWhiteTiles("0010000101101001111010010101110001100111000010100011111011100101011000111101001000010011010", 22, 19)) // 0
// console.log(minimumWhiteTiles("0110101010001000100101101111010101010101010010011101101101000110000110100000010101011010000011100100010000100100100011100110000101111110010110101100011000010001001111101000001111101000010101010011011100101011100000011111111001010100001011010000000101110100111000001001100110010000001101111101100100000010100110010000010011100100110000110010110011111001001001101110010110001000000110001111000110101010001100010010000000100001001101110110000010000110101100000100000001010001100000011001011011010011111011100000010101011000001100000110100010000001010000011100001010110010000001001100010011110110010101011001100010011101000000111000001000100100110010111000001010010001010000100000010101010001001100111100010000000000000100000000100001011000100100010000010100001000100010101000000000111110010100101001100000010110111000001010101000100000010011000110100101100000000000000011001111010000000001001110100011100000000100000010101011000011100111101011111100110000100111100011100010001011111000100000001001001100", 319, 1)) // 0
