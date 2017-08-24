var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
  
};

var queueMethods = {
  size: function() {
    if (this.count < 0) {
      this.count = 0;
    }
    return Object.keys(this.storage).length;   
  },
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    var firstItem = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return firstItem;
  }
};

