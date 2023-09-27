/**
 * 队列
 * 1. 先进先出
 * 2. 优点
 *  a. 可以实现先进先出
 *  b. 可以实现缓存
 *  c. 可以实现广度优先搜索
 *  d. 可以实现树的层序遍历
 *  e. 可以实现图的广度优先搜索
 *  f. 可以实现操作系统的任务调度
 * 3. 缺点
 *  a. 队列的空间有限
 *  b. 队列的空间不够时，需要扩容
 *  c. 队列的空间过大时，需要缩容
 * 4. 应用场景
 *  a. 队列
 *  b. 双端队列
 *  c. 栈
 *  d. 递归
 *  e. 哈希表
 */
import { SingleLinkList } from "./singleList";

export class Queue {
  constructor() {
    this.list = new SingleLinkList();
  }
  // 入队
  enqueue(data) {
    this.list.add(data);
  }
  // 出队
  dequeue() {
    return this.list.remove(this.list.head?.data);
  }
}

export function queueDemo() {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(3);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.list);
}

// 广度优先搜索
// 1. 从起点开始，将起点放入队列中
// 2. 从队列中取出第一个元素，检查是否是终点
// 3. 如果不是终点，则将它所有的邻居放入队列中
// 4. 重复第2步
// 5. 如果队列为空，表示没有找到终点
// const graph = {
//   A: ["B", "C"],
//   B: ["A", "C", "D"],
//   C: ["A", "B", "D", "E"],
//   D: ["B", "C", "E", "F"],
//   E: ["C", "D"],
//   F: ["D"],
// };
// const visited = new Set();
// const queue = new Queue();
// queue.enqueue("A");
// visited.add("A");
// while (queue.list.size) {
//   const n = queue.dequeue();
//   console.log(n);
//   const nodes = graph[n];
//   for (const node of nodes) {
//     if (!visited.has(node)) {
//       queue.enqueue(node);
//       visited.add(node);
//     }
//   }
// }
// console.log(visited, queue.list);