var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
// base case

  if ( this.value === target) { 
    return true;
  }

// recursive 
  if (this.children.length > 0 ) {
    for ( var i = 0; i < this.children.length; i++ ) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false; 
};

// tree = { value: Null, children: 
// [ { value: 5, children: [ { value: 7, children: [] } ] }, 
//{ value: 6, children: [{ value: 8, children: [] }]}]}

/*
 * Complexity: What is the time complexity of the above functions?
                addChild is Linear.
                contains is 
 */
