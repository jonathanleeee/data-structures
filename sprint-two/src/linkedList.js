var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head) {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    } else {
      list.head = Node(value);
      list.tail = list.head;
    }
  };

  list.removeHead = function() {
    var removalHead = list.head.value;
    list.head = list.head.next;
    return removalHead;
  };

  list.contains = function(target) {
    var current = list.head;
    while ( current !== null ) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }  
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
 */
