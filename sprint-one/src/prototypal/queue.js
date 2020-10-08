var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.count = 0;
  storage.inCount = 0;
  storage.outCount = 0;
  return storage;

};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this[this.inCount] = value;
  this.inCount++;
  this.count++;
}

queueMethods.dequeue = function() {
  var val = this[this.outCount]
  delete this[this.outCount]
  this.outCount++;
  this.count--;
  return val;
}

queueMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
}