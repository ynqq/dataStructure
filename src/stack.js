/**
 * 栈
 * 1. 后进先出
 * 2. 优点
 *  a. 可以实现后进先出
 *  b. 可以实现缓存
 *  c. 可以实现深度优先搜索
 *  d. 可以实现树的先序遍历
 *  e. 可以实现图的深度优先搜索
 *  f. 可以实现操作系统的函数调用栈
 *  g. 可以实现浏览器的前进后退
 *  h. 可以实现编辑器的撤销操作
 *  i. 可以实现括号匹配
 *  j. 可以实现表达式求值
 *  k. 可以实现逆波兰表达式
 *  l. 可以实现中缀表达式转后缀表达式
 *  m. 可以实现中缀表达式转前缀表达式
 *  n. 可以实现后缀表达式求值
 *  o. 可以实现前缀表达式求值
 *  p. 可以实现递归
 *  q. 可以实现回溯算法
 *  r. 可以实现深度优先搜索
 *  s. 可以实现广度优先搜索
 *  t. 可以实现哈希表
 *  u. 可以实现二叉树的前序遍历
 *  v. 可以实现二叉树的中序遍历
 *  w. 可以实现二叉树的后序遍历
 *  x. 可以实现二叉树的层序遍历
 *  y. 可以实现二叉树的深度优先搜索
 *  z. 可以实现二叉树的广度优先搜索
 * 3. 缺点
 *  a. 栈的空间有限
 *  b. 栈的空间不够时，需要扩容
 *  c. 栈的空间过大时，需要缩容
 * 4. 前端应用场景
 *  a. 栈
 *  b. 递归
 *  c. 深度优先搜索
 *  d. 哈希表
 *  e. 二叉树
 *  f. 操作系统的函数调用栈
 *  g. 浏览器的前进后退
 *
 */

import { SingleLinkList } from "./singleList";

export class Stack {
  constructor() {
    this.list = new SingleLinkList();
  }
  // 入栈
  push(data) {
    this.list.add(data);
  }
  // 出栈
  pop() {
    return this.list.remove(this.list.footer?.data);
  }
}

export function stackDemo() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.list);
}
