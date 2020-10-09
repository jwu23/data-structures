var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if tail is null     // tail is 4
    // else if its not null
    // move the tail over and create a new tail
    if (list.head === null) {
      list.head = Node(value);
    }
    list.tail = Node(value);

  };

  // adding 4 to the tail
  // expecting linked.removeHead()

  list.removeHead = function() {
    // when we remove 4 reset the head to 5
    // { head:5}
    var removed = list.head;
    delete list.head;
    list.head = list.tail;
    return removed.value;
  };

  list.contains = function(target) {
    for (var key in list) {
      if (target === list[key].value) {
        return true;
      }
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
