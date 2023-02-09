var Stack = function() {
  var someInstance = { count: 0 };

  // Use an object with numeric keys to store values
  /*
  keep track of front of line by incrementing and decrementing count
  can also use count to keep track of size
  */
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //increment count
    someInstance.count++;
    var index = someInstance.count;
    //add value to storage with current count as key
    storage[index] = value;
  };

  someInstance.pop = function() {
    //if count is 0 return 0
    var index = someInstance.count;
    if (index === 0) {
      return 0;
    }
    //grab value at current count in storage
    var result = storage[index];
    //delete value at storage
    delete storage[index];
    //decrement count
    someInstance.count--;

    return result;
  };

  someInstance.size = function() {
    //return count
    return someInstance.count;
  };

  return someInstance;
};
