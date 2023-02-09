var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // declare stack obj as created object with prototype stackMethods
  var stack = Object.create(stackMethods);
  // add property count to stack obj
  stack.count = 0;
  stack.storage = {};
  // return obj
  return stack;
};

// can also use Stack.prototype, then create passing Stack.prototype
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