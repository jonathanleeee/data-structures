

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = graphNode(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.graph) {
    if (this.graph[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.graph[node].edge.length; i++) {
    this.removeEdge(node, this.graph[node]['edge'][i]);
  }
  // for ( var i = 0; i < this.graph[node].edges.length; i++) {
  //     var temp = this.graph[node].edges[i];
  //     for ( var j = 0; j < this.graph[temp].edges.length; j++) {
  //         if ( this.graph[temp].edges[j] === node) {
  //             this.graph[temp].edges.splice(j, 1);
  //         }
  //     }
  // }
  for (var key in this.graph) {
    if (this.graph[key].value === node) {
      delete this.graph[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graph[fromNode]['edge'].includes(toNode)) {
    return true;  
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].edge.push(this.graph[toNode].value);
  this.graph[toNode].edge.push(this.graph[fromNode].value);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.graph[fromNode].edge.length; i++) {
    if (this.graph[fromNode].edge[i] === this.graph[toNode].value) {
      this.graph[fromNode].edge.splice(i, 1);  
    }      
  }
  
  for (var i = 0; i < this.graph[toNode].edge.length; i++) {
    if (this.graph[toNode].edge[i] === this.graph[fromNode].value) {
      this.graph[toNode].edge.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var key in this.graph) {
    cb(key);
  }
};

var graphNode = function(value) {
  var node = {};
  node.value = value;
  node.edge = [];
  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


