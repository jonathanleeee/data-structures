var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Create an object that holds the methods that will be shared by all instances of the class
  // Use the keyword this in your methods
  // Use _.extend to copy the methods onto the instance
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  size: function() {
    if (this.count < 0) {
      this.count = 0;
    }
    return this.count;    
  },
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    this.count--;
    return this.storage[this.count];
  }
};


