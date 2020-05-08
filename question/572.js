/**
 * 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。
 * s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
 *
 *    示例 1:
 *    给定的树 s:
 *
 *       3
 *      / \
 *     4   5
 *    / \
 *   1   2
 *    给定的树 t：
 *
 *     4 
 *    / \
 *   1   2
 *    返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。
 *
 *    示例 2:
 *    给定的树 s：
 *
 *      3
 *     / \
 *    4   5
 *   / \
 *  1   2
 *      /
 *     0
 *    给定的树 t：
 *
 *     4
 *    / \
 *   1   2
 *    返回 false。
 */


/**
 * 先 中 后
 * 思路1 用时 74.71% 内存 100%  平均 100 零几秒 内存 38 左右
 *      先序遍历 s ,与 t 的根比较，找到根，再找子也相同的
 * 思路2
 */
// 伪实现
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    return this
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (!s) return false
    return isSameNode(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};

function isSameNode(tree, targetStree) {    
    if (tree === targetStree) {
        return true
    }
    return tree && targetStree && tree.val === targetStree.val && isSameNode(tree.left, targetStree.left) && isSameNode(tree.right, targetStree.right)
}

// 示例1
let isSub = isSubtree(new TreeNode(3, new TreeNode(4, new TreeNode(2), new TreeNode(2)), new TreeNode(5)), new TreeNode(4, new TreeNode(1), new TreeNode(2)))
console.log(isSub);
// 测试用例2
let isSub2 = isSubtree(new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(4, new TreeNode(1), new TreeNode(2)))
console.log(isSub2);
// 测试用例3
let isSub3 = isSubtree(new TreeNode(1), new TreeNode(0))
console.log(isSub3);
