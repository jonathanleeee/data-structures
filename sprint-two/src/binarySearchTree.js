var BinarySearchTree = function(value) {
  var aTree = Object.create(treeMethodz);
  aTree.value = value;
  aTree.right = null;
  aTree.left = null;
  return aTree;
};

var treeMethodz = {};

treeMethodz.insert = function(val) {
  if ( val < this.value && this.left === null ) {
    this.left = BinarySearchTree(val);
  } else if ( val < this.value && this.left !== null ) {
    this.left.insert(val);
  } else if ( val > this.value && this.right === null ) {
    this.right = BinarySearchTree(val);
  } else if ( val > this.value && this.right !== null ) {
    this.right.insert(val);    
  }
};

treeMethodz.contains = function(target) {
  if ( this.value === target) {
    return true;
  } 
  if (target < this.value && this.left !== null) {
    return this.left.contains(target);
  }  

  if (target > this.value && this.right !== null) {
    return this.right.contains(target);
  }
  return false;
};

treeMethodz.depthFirstLog = function(cb) {
  //BASE CASE
    //when there is a value, invoke the callback function on it
  if (this.value) {
    cb(this.value);
  } 
  //RECURSIVE CASE
    //when right and left property has a tree
  if (this.right !== null) {
    return this.right.depthFirstLog(cb);
  }
  
  if (this.left !== null) {
    return this.left.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */





// var Tree = function(value) {
//   var newTree = {};
//   newTree.value = value;

//   // your code here
//   newTree.children = [];  // fix me
//   _.extend(newTree, treeMethods);
//   return newTree;
// };

// var treeMethods = {};

// treeMethods.addChild = function(value) {
//   this.children.push(Tree(value));
// };

// treeMethods.contains = function(target) {
// // base case

//   if ( this.value === target) { 
//     return true;
//   }

// // recursive 
//   if (this.children.length > 0 ) {
//     for ( var i = 0; i < this.children.length; i++ ) {
//       if (this.children[i].contains(target)) {
//         return true;
//       }
//     }
//   }
//   return false; 
// };

// tree = { value: Null, children: 
// [ { value: 5, children: [ { value: 7, children: [] } ] }, 
//{ value: 6, children: [{ value: 8, children: [] }]}]}
