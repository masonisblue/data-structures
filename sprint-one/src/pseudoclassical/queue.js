var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.storage = {};

};


Queue.prototype = {

  enqueue: function(value) {
    this.back++;
    var index = this.back;
    this.storage[index] = value;
  },

  dequeue: function(value) {

    //if size is 0 return 0
    if (this.size <= 0) {
      return 0;
    }
    //increment front
    this.front++;
    //store value with front index in storage
    var index = this.front;
    var result = this.storage[index];
    //remove item from storage
    delete this.storage[index];
    //return item
    return result;

  },

  size: function() {
    var length = this.back - this.front;
    if ( length <= 0) {
      return 0;
    }
    return length;
  },

};

Queue.prototype.constructor = Queue;