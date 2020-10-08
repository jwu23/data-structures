var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.inCount = 0;
  this.outCount = 0;
  this.val;
};

Queue.prototype.enqueue = function(value) {
  this[this.inCount] = value;
  this.inCount++;
  this.count++;
}

Queue.prototype.dequeue = function() {
  this.val = this[this.outCount];
  delete this[this.outCount];
  this.outCount++;
  this.count--;
  return this.val;
}

Queue.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
}