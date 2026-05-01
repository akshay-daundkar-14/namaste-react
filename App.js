

console.log("Hello from Index.js");

var child1 = React.createElement("h1",{id:"child1"},"Namaste React");
var child2 = React.createElement("h3",{id:"child2"},"By Akshay Daundkar");

var parent = React.createElement("div",{id:'parent'},[child1,child2]);



var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);