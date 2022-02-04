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

  removeFront(){
    if(this.head == null){
      return this.head
    }
    var remove = this.head;
    this.head = remove.next;
    remove.next = null;
    return this.head
  }

  front(){
    if(this.head == null){
      return null;
    }else{
      return this.head.data
    }
  }









  


}

let SLL = new LinkedList();
console.log(SLL);

SLL.addFront(2);
console.log(SLL);
console.log(SLL.front())