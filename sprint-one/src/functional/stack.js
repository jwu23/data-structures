var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.push = function(value) {
    //add new value to object
    storage[count] = value;
    count++;
    console.log(storage);
  };

  someInstance.pop = function() {
    // var val = storage[0];
    var val = storage[count - 1];
    delete storage[count - 1];
    count--;
    console.log(storage);
    return val;
  };

  someInstance.size = function() {
    var size = 0;
      for (var keys in storage) {
        size++;
      }
      //console.log("size = " + size);
    return size;
  };

  return someInstance;
};

var newStack = Stack();
newStack.push("e");
newStack.push("c");
newStack.pop();
newStack.push("w");
newStack.push("t");
newStack.push("y");
newStack.pop();
newStack.push("p");