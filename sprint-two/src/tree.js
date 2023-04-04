var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // an array of newTree objects
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var hit = false;
  var current = this;
  // if current is equal to target
  if (current.value === target) {
    hit = true;
  } else {
    // for each child in current
    for (var i = 0; i < current.children.length; i++) {
      if (hit === false) {
        hit = current.children[i].contains(target);
      }
    }
  }
  return hit;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
