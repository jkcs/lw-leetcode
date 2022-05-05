/**
 *  输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
 *  假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 *
 *  Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 *  Output: [3,9,20,null,null,15,7]
 *
 *  Input: preorder = [-1], inorder = [-1]
 *  Output: [-1]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  // 先序遍历
  const source = preorder[0]
  const index = inorder.findIndex(t => t === source)
  const tree = new TreeNode(source);

  const arr = preorder.slice(1)
  let pointLeft = tree
  let pointRight = tree
  for (let i = 0; i < arr.length; i++) {
    console.log(i, index, arr[i], i < index);
    if (i < index) {
      if (pointLeft.left == null) {
        pointLeft.left = new TreeNode(arr[i])
      } else if (pointRight.right == null) {
        pointRight.right = new TreeNode(arr[i])
      } else {
        let sub = pointLeft.left
        pointLeft.left = new TreeNode(arr[i])
        pointLeft.left.left = sub
      }
    } else {
      if (pointRight.right == null) {
        pointRight.right = new TreeNode(arr[i])
      } else if (pointRight.left == null) {
        pointRight.left = new TreeNode(arr[i])
      } else {
        let sub = pointLeft.left
        pointLeft.left = new TreeNode(arr[i])
        pointLeft.left.left = sub
      }
    }
  }
  return tree
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
// console.log(buildTree([3, 9, 10, 11, 20, 15,  7], [10, 9, 11, 3, 15, 20, 7]));
/**
 *      3
 *   9     20
 *      15    7
 */

/**
 *        3
 *    9       20
 * 10  11  15     7
 *
 * 前序遍历 [3, 9, 10, 11, 20, 15,  7]
 * 中序遍历 [10, 9, 11, 3, 15, 20, 7]
 */
// const tree1 = new TreeNode(3)
// tree1.left = new TreeNode(9)
// tree1.right = new TreeNode(20)
// tree1.left.left = new TreeNode(10)
// tree1.left.right = new TreeNode(11)
// tree1.right.left = new TreeNode(15)
// tree1.right.right = new TreeNode(7)
// // 先序遍历
// const result = []
// function deepTree(tree) {
//   if (tree == null) return;
//   if (tree.val != null) {
//     result.push(tree.val)
//   }
//   deepTree(tree.left)
//   deepTree(tree.right)
// }
//
// deepTree(tree1)
// console.log(result);
