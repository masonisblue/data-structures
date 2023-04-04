

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  //if nothing at hash table index, just put
  var bucket = this._storage.get(index);

  if (!bucket) {

    // resize
    //debugger;
    this._storage.set(index, [tuple]);
    this._count++;
    this.resize();
  } else {
    this._storage.get(index).push(tuple);
  }
  //put key and value in a tuple
  //put tuple at index in hash table
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  var bucket = this._storage.get(index);

  bucket.forEach ( function(tuple) {
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });

  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  var foundIndex;
  this._storage.get(index).forEach ( function(tuple, bucketIndex) {
    if (tuple[0] === k) {
      foundIndex = bucketIndex;
    }
  });

  if (foundIndex !== undefined) {
    bucket.splice(foundIndex, 1);
  }
};

HashTable.prototype.resize = function() {

  //if storage more than 75%, double limit
  if (this._count >= (0.75 * this._limit) ) {
    //create new hash table, store in variable, update limit, reset count, assign storage to empty array
    var newLimit = this._limit * 2;
    var tempStorage = [];
    this._storage.each( function (bucket) {

      if (bucket) {
        tempStorage.push(bucket);
      }
    });
    this._limit = newLimit;
    this._count = 0;
    this._storage = LimitedArray(newLimit);
    var newStorage = this;
    //iterate through current storage, add to temp storage items to this storage
    tempStorage.forEach( function(bucket) {
      //[[][]]
      if (bucket) {
        for ( var i = 0; i < bucket.length; i++) {
          //debugger;
          newStorage.insert(bucket[i][0], bucket[i][1]);
        }
      }

    });
  //set storage to new hash table this.storage = newHashTable
  }

  //

  //if storage less than 25%

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


