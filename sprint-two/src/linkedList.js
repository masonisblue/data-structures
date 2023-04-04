var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    //create new node
    var newNode = Node(value);
    //if head is null
    if (!list.head) {
      //set list.head to equal new node
      list.head = newNode;
      //set list.tail to equal new node
      list.tail = newNode;
    } else {
      //list tail next value point to new node
      list.tail.next = newNode;
      //set list tail to equal to new node
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) {
    // declare current variable as head node
    var current = list.head;
    // while current is not null,
    while (current) {
      // check if equal to target return true
      if (current.value === target) {
        return true;
      }
      // if not set current to equal to next node
      current = current.next;
    }

    // return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
O (n)
 */
