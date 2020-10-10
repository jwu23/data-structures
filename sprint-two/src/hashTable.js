

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if this index exists in storage

  // every number corresponding to a bucket if it doesn't exist

  var bucket = this._storage.get(index) || [];
  console.log(bucket);

  this._storage.set(index, v);


};
//limitedArray.set = function(index, value) {
//checkLimit(index);
//storage[index] = value;
//};
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //console.log(this._storage.get);

  return this._storage.get(index);

};
// limitedArray.get = function(index) {
// checkLimit(index);
// return storage[index];
//};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each( function() {
    delete this._storage[index];
  });

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


