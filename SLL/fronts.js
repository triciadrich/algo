class Node{
  constructor(data){
    this.data= data;
    this.next=null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  addFront(val){
    let new_node = new Node(val);
    if(!this.head){
      this.head = new_node;
      return this
    }
    let oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;
  }










  


}

let SLL = new LinkedList();
console.log(SLL);

SLL.addFront(2);
console.log(SLL);