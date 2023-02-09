var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // declare variable stack as object with count of 0
  var stack = { count: 0 };
  // declare variable storage
  stack.storage = {};
  // extend stackmethods
  _.extend(stack, stackMethods);
  // return stack
  return stack;
};

//originally var stackmethods
var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },

  pop: function(value) {
    var index = this.count;
    if (index === 0) {
      return 0;
    }
    var result = this.storage[index];
    delete this.storage[index];
    this.count--;

    return result;
  },

  size: function() {
    return this.count;
  }
};


