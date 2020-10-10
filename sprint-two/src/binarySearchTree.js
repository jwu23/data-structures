var BinarySearchTree = function(value) {
  var obj = Object.create(binarySearchTree);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

var binarySearchTree = {};

binarySearchTree.insert = function(value) {
// acccepts a value and places it in thetree in correct positions
// if root value = null then head value is val
  // var root = this.root;
  // console.log(this.left);
  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};
// var newNode = new TreeNode(value);
// //console.log(newNode);

// // console.log(this.root);

// binarySearchTree.insertNode = function(node, newNode) {
//   if (newNode.current > node.current) {
//     if (node.right === null) {
//       node.right = newNode;
//     } else {
//       this.insertNode(node.right, newNode);
//     }

//   } else {
//     if (node.left === null) {
//       node.left = newNode;
//     } else {
//       this.insertNode(node.left, newNode);
//     }
//   }

// };
// this.insertNode(value, newNode);



// compare each new value to root node to see where it goes initially

// if that value is greater than the root then it goes right
// then that node becomes the current node
//




binarySearchTree.contains = function(value) {
  //accepts a value return boolean
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    return !!(this.left && this.left.contains(value));
  } else if (value > this.value) {
    return !!(this.right && this.right.contains(value));
  }

};

binarySearchTree.depthFirstLog = function(cb) {
// accepts callback and executes it on very value in tree
  //console.log(this);
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  // var recurse = function (cb) {
  //   if (this.left === null && this.right === null) {
  //     return cb(this.value);
  //   } else if (this.left !== null) {
  //     recurse(cb(this.left));
  //   }
  // };

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

// var TreeNode = function(value) {
//   this.current = value;
//   this.left = null;
//   this.right = null;
// };