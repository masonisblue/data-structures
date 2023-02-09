class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  pop(value) {

    var index = this.count;

    if (index === 0) {
      return 0;
    }

    var result = this.storage[index];
    delete this.storage[index];
    this.count--;

    return result;
  }

  size() {
    return this.count;
  }

}