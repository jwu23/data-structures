class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.val;
  }

  push(value) {
    this[this.count] = value;
    this.count++;
  }

  pop() {
    this.val = this[this.count - 1];
    delete this[this.count - 1];
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