var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Use Object.create with the object from step 2 to create instances of your class
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;

};

var stackMethods = {

};

stackMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;    
};
stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
stackMethods.pop = function() {
  this.count--;
  return this.storage[this.count];
};
