var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;
  this.val;

};

Stack.prototype.push = function(value) {
  this[this.count] = value;
  this.count++;
}

Stack.prototype.pop = function() {
  this.val = this[this.count - 1];
  delete this[this.count - 1];
  this.count--;
  return this.val;
}

Stack.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
}

