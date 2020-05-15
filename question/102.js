/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回其层次遍历结果：
 * 
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 * 
 */

/**
 * 1. 递归获取，并记录层级
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 性能最差的做法
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function (root) {
//     if (!root || root.val === undefined) return []
//     let result = [[root.val]]
//     let i = 0
//     deep(root, result, i)

//     return result
// };

// function deep(root, result, i) {
//     i = i + 1
//     let tmp = []
//     if (!root) return
//     if (root.left) {
//         tmp.push(root.left.val)
//     }
//     if (root.right) {
//         tmp.push(root.right.val)
//     }

//     if (tmp.length) {
//         if (result.length >= i +1) {          
//             result[i].push(...tmp)
//         } else{
//             result.push(tmp)
//         }

//     }
//     let left = deep(root.left, result, i)
//     let right = deep(root.right, result, i)
//     if (left && left.length) {
//             result.concat(left)   
//     }
//     if (right && right.length) {
//             result.concat(right)
//     }
//     return result
// }

/**
 *  看了 bfs 和 qfs 顿时恍然大悟直接觉醒了
 */
var levelOrder = function (root) {
    let result = []
    let i = 0
    bfs(root, result, i)
    return result
};

function bfs(root, result, i) {
    if (!root || root.val === undefined) return
    if (result.length >= i + 1) {
        result[i].push(root.val)
    } else {
        result.push([root.val])
    }

    i++
    if (root.left) {
        bfs(root.left, result, i)
    }
    if (root.right) {
        bfs(root.right, result, i)
    }
}

// 测试用例
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// let tree = new TreeNode(3)
// tree.left = new TreeNode(9)
// tree.right = new TreeNode(20)
// tree.right.left = new TreeNode(15)
// tree.right.right = new TreeNode(7)

// console.log(levelOrder(tree));

// let tree2 = new TreeNode(1)
// tree2.left = new TreeNode(2)
// console.log(levelOrder(tree2));


// let tree3 = new TreeNode(1)
// tree3.left = new TreeNode(2)
// tree3.left.left = new TreeNode(4)
// tree3.right = new TreeNode(3)
// tree3.right.right = new TreeNode(5)
// console.log(levelOrder(tree3));
// [1,2,3,4,null,null,5]
//   1
//  2 3
// 4   5

// [0,
// 2,       4,
//1,null,  3,-1,
//5,1,  null,6,null,8]
//          0
//      2       4
//   1        3   -1
// 5  1         
let tree4 = new TreeNode(0)
tree4.left = new TreeNode(2)
tree4.left.left = new TreeNode(1)
tree4.left.left.left = new TreeNode(5)
tree4.left.left.right = new TreeNode(1)
tree4.right = new TreeNode(4)
tree4.right.right = new TreeNode(-1)
tree4.right.left = new TreeNode(3)
console.log(levelOrder(tree4));