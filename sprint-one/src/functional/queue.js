var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
  // add a string to the back of the queue
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
  // Remove and return the string at the front of the queue
    var firstItem = Object.values(storage)[0];
    delete storage[Object.keys(storage)[0]];//storage[0];
    return firstItem;
  };

  someInstance.size = function() {
  // Return the number of items in the queue
    return Object.keys(storage).length;
  };

  return someInstance;
};
