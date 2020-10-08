var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.enqueue = function(value) {
    // // if (_.isEmpty(storage)) {
    // //   storage[count] = value;
    // // }
    // //  else {
    //   for (var key in storage) {
    //     count++;
    //     storage[count] = value;
    //     console.log(storage);
    //   // }
    storage[count] = value;
    count++;
    console.log(storage);
  };

  someInstance.dequeue = function() {
    // if (_.isEmpty(storage)) {
    //   return {};
    // } else {
    //   delete storage[0];
    //   for (var key in storage) {
    //     storage[key - 1] = storage[key];
    //     delete storage[key];
    //   }
    //   // console.log(storage);
    //   // console.log(count);
    // }

    var val = storage[0];
    delete storage[0];
    for (var key in storage) {
      storage[key - 1] = storage[key];
      delete storage[key];
    }
    count--;
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

var newQueue = Queue();
newQueue.enqueue("e");
newQueue.enqueue("c");
newQueue.dequeue();

newQueue.enqueue("w");
