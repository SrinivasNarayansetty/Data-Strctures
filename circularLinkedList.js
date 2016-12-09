// Program for Circular Linked list
function Node(dt,h,t){
  this.head = h ? h : null;
  this.data = dt ? dt : null;
  this.tail = t ? t : null;
  
  this.getHead = function(){
    return this.head;
  }
  
  this.setHead = function(h){
    this.head = h;
  }
   this.getTail = function(){
    return this.tail;
  }
  
  this.setTail = function(t){
    this.tail = t;
  }
  
  this.setData = function(dt) {
    this.data = dt;
  }
  
  this.getData = function() {
    return this.data;
  }
}


function linkedList(){
     this.start = null;
     this.end = null;
     this.size = 0;
 
  
  this.insertAtBegin = function(data){
    var nptr = new Node(data);    
        this.size++ ;    
        if(this.start == null) 
        {
            this.start = nptr;
            this.end = this.start;
        }
        else 
        {
            this.start.setHead(nptr);
            this.end.setTail(nptr);
            nptr.setTail(this.start);
            nptr.setHead(this.end);
            this.start = nptr;
        }
  }
  
  this.insertAtEnd = function(data){
     var nptr = new Node(data);  
     this.size++;
    if(this.end == null){
      this.end = nptr;
      this.start = this.end;
    }
    else{
      this.end.setTail(nptr);
      this.start.setHead(nptr);
      nptr.setHead(this.end);
      nptr.setTail(this.start);
      this.end = nptr;
    }
  }
  
  this.insertAtPos = function(data,pos){
    var nptr = new Node(data);
    var ptr = this.start;
    pos = pos - 1;
    if(pos > (this.size)){
      console.log("Operation is not possible");
    }
    else if(pos == '0'){
      this.size++;
        if(this.start == null) 
        {
            this.start = nptr;
            this.end = this.start;
        }
        else 
        {
            this.start.setHead(nptr);
            this.end.setTail(nptr);
            nptr.setTail(this.start);
            nptr.setHead(this.end);
            this.start = nptr;
          
        }
     
    }
    else if(pos == this.size) {
       this.size++;
      if(this.end == null){
      this.end = nptr;
      this.start = this.end;
    }
    else{
     this.end.setTail(nptr);
      this.start.setHead(nptr);
      nptr.setHead(this.end);
      nptr.setTail(this.start);
      this.end = nptr;
    }
    }
    else {
          for(var i = 0;i<this.size - 1;i++){
            if(i == pos){
             nptr.setTail(ptr);
             nptr.setHead(ptr.getHead());
             (nptr.getHead()).setTail(nptr);
             ptr.setHead(nptr);
             break;
           }
           ptr = ptr.getTail();
        }
      this.size++;
    }
  }
  
   this.deleteAtPos = function(pos){
      var ptr = this.start;
    if(pos > this.size) {
      console.log("Operation is not possible");
    }
    else if(pos == '1'){
      console.log('entered');
            var temp  = this.start.getTail();
            temp.setHead(this.end);
            this.end.setTail(temp);
            this.start = temp;
            this.size--; 
            return ; 
    }
    else if(pos == this.size){
            var temp1 = this.end.getHead();
            temp1.setTail(this.start);
            this.start.setHead(temp1);
            this.end = temp1;
            this.size--;
            return;
     }
     else {
       pos = pos - 1;
          for(var i = 0;i<this.size - 1;i++){
            if(i == pos){
            (ptr.getHead()).setTail(ptr.getTail());
            (ptr.getTail()).setHead(ptr.getHead());
            this.size--;
            break;  
           }
           ptr = ptr.getTail();
        }
    }
      
    
  }
  
  this.display = function()
    {
        if (this.size == '0') 
        {
            console.log("empty\n");
            return;
        }    
        if (this.start.getTail() == null) 
        {
            console.log(this.start);
            return;
        }
        var ptr = this.start;
        ptr = this.start;
        console.log(this.start);
        while (ptr.getTail() != this.start)
        {
           ptr = ptr.getTail();
           console.log(ptr);
        }
    }
}
 
  var srinivas = new linkedList();
srinivas.insertAtBegin(69);
srinivas.insertAtBegin(72);
srinivas.insertAtPos(74,1);
srinivas.insertAtPos(79,1);
srinivas.insertAtEnd(66);
srinivas.insertAtPos(75,2);
srinivas.deleteAtPos(3);

srinivas.display();
