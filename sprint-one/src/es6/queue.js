class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.inCount = 0;
    this.outCount = 0;
    this.val;
  }

  enqueue(value) {
    this[this.inCount] = value;
    this.inCount++;
    this.count++;
  }

  dequeue() {
    this.val = this[this.outCount];
    delete this[this.outCount];
    this.outCount++;
    this.count--;
    return this.val;
  }

  size() {
    if (this.count < 0) {
      return 0;
    }
    return this.count;
  }
}
