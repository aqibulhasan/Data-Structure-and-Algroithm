class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    //looping for finding the tail of list
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //remove value from the begaining of the linkedList

  shift() {
    if (!this.head) return undefined;
    let currHead = this.head;
    this.head = currHead.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currHead;
  }

  //adding item begaining of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //return value at given index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head; //tracking current node

    while (counter !== index) {
      current = current.next; //for finding the expected index
      counter++;
    }
    return current;
  }

  //setting/update the value at given index

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  //insert a node at give index
  //like arry.splice

  insert(index, value) {
    if (index < 0 || index > value) {
      return false;
    }
    if (index === this.length) return !!this.push(val); //using !! coverting to boolen value
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    //insering a new node and reestablish connection with left and right node
    let lastNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = lastNode;
    this.length++;
    return true;
  }

  //remove a node at given index

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    /*one way using other method
    let prevNode = this.get(index - 1);
    let removedNode = this.get(index);
    let lastNode = this.get(index + 1);
    prevNode.next = lastNode;
    */

    //another way
    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  // revese the linked list

  revese() {
    let node = this.head;
    this.head = this.tail;
    this.tail = this.head;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  //print list values
  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

let list = new SinglyLinkedList();
//insering value at linked list
list.push(9);
list.push(13);
list.push(15);
list.unshift(6);

console.log("=========================");
console.log("setting/updating value at given index");
console.log(list.set(7));
console.log(list.set(1, 7));
console.log("=========================================================");

console.log("=========================");
console.log("inserting value at given index");
list.insert(2, 9);
console.log(list.insert(-1, 9));
console.log("===========================================================");

console.log("=========================");
console.log("getting value at given index");
console.log(list.get(2));
console.log("=============================================================");

console.log("=========================");
console.log("removing value at given index");

console.log(list.remove(0));
console.log("===============================================================");

console.log("printing value of linked list");
console.log(list.print());

console.log("printing value of reverse linked list");
list.revese();
console.log(list.print());
