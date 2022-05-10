/**
 *  1728. 猫和老鼠 II
 * 一只猫和一只老鼠在玩一个叫做猫和老鼠的游戏。
 * 它们所处的环境设定是一个 rows x cols 的方格 grid ，其中每个格子可能是一堵墙、一块地板、一位玩家（猫或者老鼠）或者食物。
 *
 * 玩家由字符 'C' （代表猫）和 'M' （代表老鼠）表示。
 * 地板由字符 '.' 表示，玩家可以通过这个格子。
 * 墙用字符 '#' 表示，玩家不能通过这个格子。
 * 食物用字符 'F' 表示，玩家可以通过这个格子。
 * 字符 'C' ， 'M' 和 'F' 在 grid 中都只会出现一次。
 *
 * 猫和老鼠按照如下规则移动：
 *
 * 老鼠 先移动 ，然后两名玩家轮流移动。
 * 每一次操作时，猫和老鼠可以跳到上下左右四个方向之一的格子，他们不能跳过墙也不能跳出 grid 。
 * catJump 和 mouseJump 是猫和老鼠分别跳一次能到达的最远距离，它们也可以跳小于最大距离的长度。
 * 它们可以停留在原地。
 * 老鼠可以跳跃过猫的位置。
 * 游戏有 4 种方式会结束：
 *
 * 如果猫跟老鼠处在相同的位置，那么猫获胜。
 * 如果猫先到达食物，那么猫获胜。
 * 如果老鼠先到达食物，那么老鼠获胜。
 * 如果老鼠不能在 1000 次操作以内到达食物，那么猫获胜。
 * 给你 rows x cols 的矩阵 grid 和两个整数 catJump 和 mouseJump ，双方都采取最优策略，如果老鼠获胜，那么请你返回 true ，否则返回 false
 *
 * 示例 1：
 * 输入：grid = ["####F","#C...","M...."], catJump = 1, mouseJump = 2
 * 输出：true
 * 解释：猫无法抓到老鼠，也没法比老鼠先到达食物。
 *
 * 示例 2：
 * 输入：grid = ["M.C...F"], catJump = 1, mouseJump = 4
 * 输出：true
 *
 * 示例 3：
 * 输入：grid = ["M.C...F"], catJump = 1, mouseJump = 3
 * 输出：false
 *
 * 示例 4：
 * 输入：grid = ["C...#","...#F","....#","M...."], catJump = 2, mouseJump = 5
 * 输出：false
 *
 * 示例 5：
 * 输入：grid = [".M...","..#..","#..#.","C#.#.","...#F"], catJump = 3, mouseJump = 1
 * 输出：true
 *
 * 提示：
 * rows == grid.length
 * cols = grid[i].length
 * 1 <= rows, cols <= 8
 * grid[i][j] 只包含字符 'C' ，'M' ，'F' ，'.' 和 '#' 。
 * grid 中只包含一个 'C' ，'M' 和 'F' 。
 * 1 <= catJump, mouseJump <= 8
 *
 */
/**
 * @param {string[]} grid
 * @param {number} catJump
 * @param {number} mouseJump
 * @return {boolean}
 */
// var canMouseWin = function (grid, catJump, mouseJump) {
//   // 基本思路还是BFS
//   写着写着写不下去了，先看看题 913
//   const matrix = [];
//   let catPoint = [];
//   let mousePoint = [];
//   let foodPoint = [];
//   let maxX = grid.length - 1;
//   let maxY = grid[0].length - 1;
//
//   for (let i = 0; i < grid.length; i++) {
//     const str = grid[i];
//     matrix[i] = [];
//     for (let j = 0; j < str.length; j++) {
//       matrix[i][j] = str[j];
//       switch (str[j]) {
//         case 'C':
//           catPoint = [i, j];
//           break;
//         case 'F':
//           foodPoint = [i, j];
//           break;
//         case 'M':
//           mousePoint = [i, j];
//           break;
//         default:
//       }
//     }
//   }
//
//   const moveStep = ([x, y]) => {
//     // 非墙
//     const targets = [
//       [x + 1, y],
//       [x - 1, y],
//       [x, y + 1],
//       [x, y - 1]
//     ]
//     const res = [`${x}-${y}`];
//     let food = false;
//     for (let i = 0; i < targets.length; i++) {
//       const [x, y] = targets[i];
//       if (x >= 0 && x <= maxX && y >= 0 && y <= maxY) {
//         if (matrix[x][y] !== '#') {
//           res.push(`${x}-${y}`);
//         }
//         if (matrix[x][y] === 'F') {
//           food = true;
//         }
//       }
//     }
//
//     return {
//       stepPoints: Array.from(new Set(res)).map(str => str.split('-').map(Number)),
//       food
//     }
//   }
//
//   // 老鼠 先移动
//   let queue = [
//     [catPoint, mousePoint]
//   ]
//   while (queue.length) {
//     const sz = queue.length;
//     for (let i = 0; i < sz; i++) {
//       const item = queue.shift();
//       const cp = item[0];
//       const mp = item[1];
//       // 老鼠先移动
//       const startCP = item[0] // catPoint
//       let posCP = [startCP];
//       for (let j = 0; j < mouseJump; j++) {
//         // 移动 x加减1， y加减1
//         const len = posCP.length;
//         for (let k = 0; k < len; k++) {
//           posCP = posCP.concat(moveStep(posCP[k]).stepPoints)
//         }
//         // 猫后移动
//         for (let j = 0; j < catJump; j++) {
//
//         }
//
//       }
//
//
//     }
//   }
//
//   console.log(matrix);
// };

// console.log(canMouseWin(['####F', '#C...', 'M....'], 1, 2));
// 做不出来
