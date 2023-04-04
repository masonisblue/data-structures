// Instantiate a new graph
var Graph = function() {
  // value: edges
  this.box = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.box[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.box[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeToBeDeleted = this.box[node];
  for (var i = 0; i < nodeToBeDeleted.length; i++) {
    //for each edge value in the array, we delete the current node from their edge values.
    var edgeNodeValues = nodeToBeDeleted[i];
    this.box[edgeNodeValues].splice(this.box[edgeNodeValues].indexOf(node), 1);
  }

  delete this.box[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.box[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // adding the toNode in the edge array for the fromNode
  this.box[fromNode].push(toNode);
  // adding the froNode in the edge array for the toNode
  this.box[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // deleting the toNode in the edge array for the fromNode
  this.box[fromNode].splice(this.box[fromNode].indexOf(toNode), 1);
  // deleting the fromNode in the edge array for the toNode
  this.box[toNode].splice(this.box[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // cb is a function
  for (var value in this.box) {
    cb(value);
  }
};


/*
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this[fromNode].includes(toNode) && this[toNode].includes(fromNode)) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


