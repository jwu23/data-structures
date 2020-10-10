

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.edges = {};
  this.count = 0;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[this.count] = node;
  this.count++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (node === this.storage[key]) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.       // 5
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage) {
    if (node === this.storage[key]) {
      delete this.storage[key];
    }
  }
  // console.log(this.edges);
  for (var edge in this.edges) {
    edge = Number(edge);
    if (node === this.edges[edge] || edge === node) {
      delete this.edges[edge];
    }
  }
  this.count--;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // console.log(fromNode, toNode);
  //console.log(this.edges);
  for (var key in this.edges) {
  // console.log(toNode === this.edges[key]);
    // console.log(fromNode, toNode);
    // console.log(key, this.edges[key]);
    key = Number(key);
    if (fromNode === key && toNode === this.edges[key] || toNode === key && fromNode === this.edges[key]) {
      return true;
    }
  }
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode] = toNode;
  // this.edges[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // 4, 5
  //{4: 5} {5: 4}
  for (var key in this.edges) {
    key = Number(key);
    if (fromNode === key && toNode === this.edges[key] || toNode === key && fromNode === this.edges[key]) {
      delete this.edges[key];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // console.log(this.storage);
  //  console.log(this.edges);
  // _.each(this.edges, function (node) {
  //   console.log(node)
  //   cb(node);
  // });
  for (var node in this.storage) {
    // console.log(this.storage[node]);
    cb(this.storage[node]);
    // console.log(this.edges);
  }



};

/*
 * Complexity: What is the time complexity of the above functions?
 */


