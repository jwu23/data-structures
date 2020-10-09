var Tree = function(value) {
  var newTree = {};
  // newTree.index = 0;
  newTree.value = value;

  // your code here
  // children should point to the next node on the list
  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var grandchildren = new Tree(value);
  this.children.push(grandchildren);
};

treeMethods.contains = function(target) {
  if (this.value === target) {

    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
