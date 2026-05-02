import  React  from "react";
import  ReactDOM  from "react-dom/client";

// JSX - HTML or XML like syntax --(Babel)--> React Element (JS Object) --> HTML render
var jsxElement = <h1>Hello From JSX to Everyone!</h1>;


// Functional Component - js function which returns JSX.

const HeadingComponent = () =>{
   return <h1>This is Heading component from Functional component</h1>
}

// Component Composition - One component in another component

const BodyComponent = () =>{
   return (
    <div>
        <HeadingComponent/>
        <h3>This is Body component from Functional component</h3>
    </div>
   )
}




var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyComponent/>);