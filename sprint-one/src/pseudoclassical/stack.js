var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create count obj, bind to new object with this
  this.count = 0;
  // create storage obj, bind to new object with this
  this.storage = {};
};

//declare prototype object of Stack as an object with all methods
Stack.prototype = {

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

Stack.prototype.constructor = Stack;

