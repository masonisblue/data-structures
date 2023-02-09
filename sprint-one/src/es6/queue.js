class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.front = 0;
    this.back = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.back++;
    this.storage[this.back] = value;
  }

  dequeue(value) {

    if (this.size <= 0) {
      return 0;
    }
    this.front++;
    var index = this.front;
    var result = this.storage[index];
    delete this.storage[index];

    return result;
  }

  size() {
    if (this.back - this.front <= 0) {
      return 0;
    }
    return this.back - this.front;

  }

}
