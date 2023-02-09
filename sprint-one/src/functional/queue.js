var Queue = function() {
  var someInstance = { front: 0, back: 0 };

  // Use an object with numeric keys to store values
  /*
  can create front variable, keeps track of numbers that have been dequeued
  can create back variable, keeps track of numbers that have been added
  number of items in queue = back - front
  */
  var storage = {};

  // Implement the methods below

  //add a string to the back of a queue
  someInstance.enqueue = function(value) {
    var index = someInstance.back;
    //add item to storage, with the index of back of line, update index of back of line
    storage[index] = value;
    someInstance.back++;
  };

  // remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    var index = someInstance.front;
    var result = storage[index];

    //if no items in storage
    if (result === undefined) {
      return 0;
    }
    //otherwise remove item front storage, update front of storage
    delete storage[index];
    someInstance.front++;

    return result;
  };

  // return the number of items in the queue
  someInstance.size = function() {
    return someInstance.back - someInstance.front;
  };

  return someInstance;
};
