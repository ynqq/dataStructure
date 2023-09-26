/**
 * 单链表
 * 1. 特点
 *  a. 使用不连续的储存单元来储存逻辑上连续的元素，通过指针将物理上不连续的储存单元联系起来
 *  b. 一个节点由两部分组成
 *      1). 数据域
 *      2). 指针域
 * 2. 优点
 *  a. 方便对节点进行增删改
 * 3. 缺点
 *  a. 只能从头到尾遍历，不方便查找前后节点
 * 4. 应用场景
 *  目前没用到
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleList {
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
      this.footer = this.footer.next;
    }
    this.size++;
  }
  remove(data) {
    let prev = this.head;
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        prev.next = current.next;
        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
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
