var Queue = function() {
  var storage = {};
  storage.count = 0;
  storage.deqCount = 0;
  storage.inCount = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  extend(storage, queueMethods);

  return storage;
};
var queueMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

queueMethods.enqueue = function(value) {
  this[this.inCount] = value;
  this.inCount++;
  this.count++;
}

//{0:a, 1:b, 2:c} count = 3 in = 1
//{1:b, 2:c} count 2 in = 2
//{1:b, 2:c} count 2 in = 3

queueMethods.dequeue = function() {
  var val = this[this.deqCount];
  delete this[this.deqCount];
  this.deqCount++;
  //console.log("THIS:",this);
  // for (var key in this) {
  //   this[key - 1] = this[key];
  //   delete this[key];
  // }

  this.count--;

  return val;
}


queueMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
}

// var que = Queue();
// que.enqueue("a");
// que.enqueue("bc");
// que.enqueue("ed");
// console.log("//", que);
// que.dequeue();
// console.log("//", que);
// que.size();
