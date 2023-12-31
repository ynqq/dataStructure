/**
 * 树
 * 1. 树的定义
 *  a. 树是一种非线性的数据结构
 *  b. 树是由n(n>=1)个有限节点组成一个具有层次关系的集合
 *  c. 树的层次从根开始计算，根为第0层，根的子节点为第1层，以此类推
 *  d. 每个节点有零个或多个子节点
 *  e. 没有父节点的节点称为根节点
 *  f. 每一个非根节点有且只有一个父节点
 *  g. 除了根节点外，每个子节点可以分为多个不相交的子树
 * 2. 树的特点
 *  a. 树的节点数等于所有节点的子节点数加1
 *  b. 树的边数等于所有节点的子节点数
 *  c. 树的高度等于树的层数
 *  d. 树的度等于树的所有节点的度的最大值
 *  e. 树的度等于树的所有节点的子节点数的最大值
 *  f. 树的度等于树的所有节点的子树的个数的最大值
 * 3. 树的分类
 *  a. 无序树
 *  b. 有序树
 *  c. 二叉树
 *  d. 满二叉树
 *  e. 完全二叉树
 *  f. 平衡二叉树
 *  g. 二叉查找树
 *  h. B树
 *  i. B+树
 *  j. B*树
 *  k. 红黑树
 *  l. 多路查找树
 *  m. 树表
 *  n. 树堆
 *  o. 二项树
 *  p. 哈夫曼树
 *  4. 树在前端的应用场景
 *  a. DOM
 *  b. 路由
 *  c. 组件
 *  d. Virtual DOM
 *  e. 数据库
 *  f. 文件系统
 */

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: { val: 5, left: { val: 8 } },
      right: { val: 4, right: { val: 9, left: { val: 10 } } },
    },
    right: {
      val: 6,
      right: {
        val: 7,
        left: {
          val: 11,
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    val: 12,
    left: {
      val: 13,
      left: {
        val: 15,
        left: { val: 16 },
        right: { val: 17, right: { val: 18 } },
      },
    },
    right: { val: 14, left: null, right: null },
  },
};

// 前序遍历
const preOrder = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};
preOrder(tree);
// 中序遍历
const inOrder = (root) => {
  if (!root) return;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
};
inOrder(tree);
// 后序遍历
const postOrder = (root) => {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
};
postOrder(tree);
