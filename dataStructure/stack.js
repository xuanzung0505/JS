class Node {
  constructor(number) {
    this.value = number;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  setTop(node) {
    this.top = node;
    node.next = null;
    this.size = 1;
  }

  push(node) {
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    this.top = this.top.next;
    this.size = this.size > 0 ? this.size - 1 : this.size;
  }

  print() {
    console.log("stack:");
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.value + ",");
      currentNode = currentNode.next;
    }
  }
  printSize() {
    console.log("size:" + stack.size);
  }
}

let n = new Node(9);
let stack = new Stack();
stack.push(n);
stack.printSize();
stack.print();
