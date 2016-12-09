// Program for Single Linked list
function Node(dt,lk){
  this.data = dt ? dt : null;
  this.link = lk ? lk : null;
  
  this.getLink = function(){
    return this.link;
  }
  
  this.setLink = function(lk){
    this.link = lk;
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
    var nptr = new Node(data, null);    
        this.size++ ;    
        if(this.start == null) 
        {
            this.start = nptr;
            this.end = this.start;
        }
        else 
        {
            nptr.setLink(this.start);
            this.start = nptr;
        }
    
  }
  
  this.insertAtEnd = function(data){
     var nptr = new Node(data, null);  
     this.size++;
    if(this.end == null){
      this.end = nptr;
      this.start = this.end;
    }
    else{
      this.end.setLink(nptr);
      this.end = nptr;
    }
  }
  
  this.insertAtPos = function(data,pos){
    var nptr = new Node(data,null);
    this.size++;
    var ptr = this.start;
    pos = pos - 1;
    if(pos > (this.size)){
      console.log("Operation is not possible");
    }
    else if(pos == '0'){
        if(this.start == null) 
        {
            this.start = nptr;
            this.end = this.start;
        }
        else 
        {
            nptr.setLink(this.start);
            this.start = nptr;
        }
    }
    else if(pos == this.size) {
       if(this.end == null){
      this.end = nptr;
      this.start = this.end;
    }
    else{
      this.end.setLink(nptr);
      this.end = nptr;
    }
    }
    else{
        for(var i = 0;i<this.size - 1;i++){
        if(i == pos){
          var temp = ptr.getLink();
          nptr.setLink(temp);
          ptr.setLink(nptr);
          break;
        }
      ptr = ptr.getLink();
    }
    
    }
    

  }
  
   this.deleteAtPos = function(pos){
     var ptr = this.start;
    if(pos == 1){
            this.start = this.start.getLink();
            this.size--;
            return ; 
    }
    if(pos == this.size){
       var  ptr1 = this.start;
            while (ptr != this.end)
            {
                ptr1 = ptr;
                ptr = ptr.getLink();
            }
            this.end = ptr1;
            this.end.setLink(null);
            this.size --;
            return;
     }
      pos = pos - 1;
      for (var i = 1; i < this.size - 1; i++) 
        {
            if (i == pos) 
            {
                var tmp = ptr.getLink();
                tmp = tmp.getLink();
                ptr.setLink(tmp);
                break;
            }
            ptr = ptr.getLink();
        }
        this.size-- ;
    
  }
  
  this.display = function()
    {
        if (this.size == '0') 
        {
            console.log("empty\n");
            return;
        }    
        if (this.start.getLink() == null) 
        {
            console.log(this.start);
            return;
        }
        var ptr = this.start;
        console.log(this.start);
        ptr = this.start;
        while (ptr.getLink() != null)
        {
           ptr = ptr.getLink();
          console.log(ptr);
        }
    }
}
 
  var srinivas = new linkedList();
srinivas.insertAtBegin(69);
srinivas.insertAtBegin(72);
srinivas.insertAtBegin(74);
srinivas.insertAtPos(79,1);
srinivas.insertAtEnd(66);
srinivas.insertAtPos(75,1);
srinivas.deleteAtPos(6);

srinivas.display();
