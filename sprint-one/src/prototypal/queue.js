var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;  
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
queueMethods.dequeue = function() {
  var firstItem = Object.values(this.storage)[0];
  delete this.storage[Object.keys(this.storage)[0]];
  return firstItem;
};

