

console.log("Hello from Index.js");

var child1 = React.createElement("div",{id:"child1"},"This is child element - 1");
var child2 = React.createElement("div",{id:"child2"},"This is child element - 2");

var parent = React.createElement("div",{id:'parent'},[child1,child2]);



var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);