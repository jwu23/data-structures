var Stack = function() {
  var storage = {};
  storage.count = 0;
  // storage.pop = pop;
  // storage.size = size;
  extend(storage, stackMethods);

  return storage;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
//var count = 0;
stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++;
}

stackMethods.pop = function() {
  var val = this[this.count - 1];
  delete this[this.count - 1];
  this.count--;
  //console.log(storage);
  return val;
}

stackMethods.size = function() {
  // var size = 0;
  // for (var key in this) {
  //   size++;
  // }
  if(this.count < 0) {
    return 0;
  }
  return this.count;
}

// var que = Stack();
// que.push("a");
// que.push("bc");
// que.push("ed");
// console.log("//", que);
// que.pop();
// console.log("//", que);
