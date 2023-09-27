class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  add(node) {
    if (this.size === 0) {
      this.head = node;
      this.head.next = null;
      this.size++;
    } else {
      let tmp = this.head;
      while (tmp.next != null) {
        tmp = tmp.next;
      }
      tmp.next = node;
      node.next = null;
      this.size++;
    }
  }

  traverse() {
    console.log("traversing nodes...");
    let tmp = this.head;
    while (tmp != null) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

list = new LinkedList();
n = new Node(3);
list.add(n);
console.log("size " + list.size);
console.log("head " + list.head);
list.traverse();
n = new Node(4);
list.add(n);

list.traverse();
