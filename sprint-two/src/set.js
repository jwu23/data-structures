var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  set.count = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[this.count] = item;
  this.count++;
};

setPrototype.contains = function(item) {
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      delete this.storage[key];
      this.count--;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
