/**
 * 双向链表
 * 1. 双向链表的节点有两个指针，一个指向前一个节点，一个指向后一个节点
 * 2. 优点
 *  a. 可以从头到尾遍历，也可以从尾到头遍历
 *  b. 可以方便的找到前后节点
 *  c. 方便增删改
 *  d. 可以实现循环链表
 * 3. 缺点
 *  a. 每个节点多了一个指针，占用空间大
 *  b. 每次增删改都要多操作一个指针
 *  c. 每次增删改都要判断指针是否为空
 *  d. 每次增删改都要判断指针是否越界
 *  e. 每次增删改都要判断指针是否指向正确的节点
 * 4. 应用场景
 *  a. 浏览器的前进后退
 *  b. LRU缓存淘汰算法
 *  c. 队列
 *  d. 双端队列
 *  e. 栈
 *  f. 递归
 *  g. 哈希表
 *  h. 二叉树
 *  i. 图
 */

class Node {
  constructor(data) {
    this.prev = null;
    this.next = null;
    this.data = data;
  }
}

export class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.footer = null;
    this.size = 0;
  }
  add(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.footer = this.head;
    } else {
      this.footer.next = new Node(data);
      this.footer.next.prev = this.footer;
      this.footer = this.footer.next;
    }
    this.size++;
  }
  remove(data) {
    let current = this.head;
    let prev = this.head;
    let next = this.head;
    while (current !== null) {
      if (current.data === data) {
        prev.next = current.next;
        next.prev = current.prev;
        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
      next = current.next;
    }
    return false;
  }
  find(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

export function doubleLinkedListDemo() {
  console.log("双向链表---------------");
  const dbLinkList = new DoubleLinkedList();
  const data = { name: "1" };
  dbLinkList.add(data);
  const list = [];
  new Array(4).fill("").forEach((_, index) => {
    const data = index + 2;
    list.push(data);
    dbLinkList.add(data);
  });
  console.log(dbLinkList);
  dbLinkList.remove(list[1]);
  console.log(dbLinkList.find(data));
  console.log("双向链表---------------");
}
