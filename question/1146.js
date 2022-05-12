/**
 * 1146. 快照数组
 * 实现支持下列接口的「快照数组」- SnapshotArray：
 *
 * SnapshotArray(int length) - 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。
 * void set(index, val) - 会将指定索引 index 处的元素设置为 val。
 * int snap() - 获取该数组的快照，并返回快照的编号 snap_id（快照号是调用 snap() 的总次数减去 1）。
 * int get(index, snap_id) - 根据指定的 snap_id 选择快照，并返回该快照指定索引 index 的值。
 *
 * 输入：["SnapshotArray","set","snap","set","get"]
 * [[3],[0,5],[],[0,6],[0,0]]
 * 输出：[null,null,0,null,5]
 * 解释：
 * SnapshotArray snapshotArr = new SnapshotArray(3); // 初始化一个长度为 3 的快照数组
 * snapshotArr.set(0,5);  // 令 array[0] = 5
 * snapshotArr.snap();  // 获取快照，返回 snap_id = 0
 * snapshotArr.set(0,6);
 * snapshotArr.get(0,0);  // 获取 snap_id = 0 的快照中 array[0] 的值，返回 5
 *
 * 提示：
 *
 * 1 <= length <= 50000
 * 题目最多进行50000 次set，snap，和 get的调用 。
 * 0 <= index < length
 * 0 <= snap_id < 我们调用 snap() 的总次数
 * 0 <= val <= 10^9
 *
 */

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.shot = 0;
  this.map = new Map();
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.map.set(`${this.shot}-${index}`, val)
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.shot++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  for (let i = snap_id; i >= 0; i--) {
    const val = this.map.get(`${i}-${index}`);
    if (val !== undefined) {
      return val;
    }
  }
  return 0;
};


/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

// const snapshotArr = new SnapshotArray(3); // 初始化一个长度为 3 的快照数组
// snapshotArr.set(0,5);  // 令 array[0] = 5
// snapshotArr.snap();  // 获取快照，返回 snap_id = 0
// snapshotArr.set(0,6);
// console.log(snapshotArr.get(0, 0));  // 获取 snap_id = 0 的快照中 array[0] 的值，返回 5
// ["SnapshotArray","set","set","set","snap","get","snap"]
// [[1],[0,4],[0,16],[0,13],[],[0,0],[]]
// [null,null,null,null,0,4,1]
// [null,null,null,null,0,13,1]


// const snapshotArr1 = new SnapshotArray(1); // 初始化一个长度为 3 的快照数组
// snapshotArr1.set(0,4);  // 令 array[0] = 4
// snapshotArr1.set(0,16);  // 令 array[0] = 16
// snapshotArr1.set(0,13);  // 令 array[0] = 13
// snapshotArr1.snap();  // 获取快照，返回 snap_id = 0
// console.log(snapshotArr1.get(0, 0)); // 13
// snapshotArr1.snap();

// ["SnapshotArray","snap","snap","get","set","snap","set"]
//   [[4],[],[],[3,1],[2,4],[],[1,4]]

// ["SnapshotArray","set","snap","snap","snap","get","snap","snap","get"]
// [[1],[0,15],[],[],[],[0,2],[],[],[0,0]]

const snapshotArr3 = new SnapshotArray(1); // 初始化一个长度为 3 的快照数组
snapshotArr3.set(0,15);  // 令 array[0] = 4
snapshotArr3.snap();
snapshotArr3.snap();
snapshotArr3.snap();
console.log(snapshotArr3.get(0, 2));  // 15
snapshotArr3.snap();
snapshotArr3.snap();
snapshotArr3.get(0,0);
