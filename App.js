import  React  from "react";
import  ReactDOM  from "react-dom/client";

// JSX - HTML or XML like syntax --(Babel)--> React Element (JS Object) --> HTML render
var jsxElement = <h1>Hello From JSX to Everyone!</h1>;


// React element - JSX
const title = <h1>Namaste Akshay - React Element</h1>


// React element - JSX
const Title2 = () => (<h1>Namaste Akshay - React Functional Component</h1>);

// Functional Component - js function which returns JSX.
const HeadingComponent = () =>( 
        <div className="heading">
            This is Heading component from Functional component.
            {title}
            {Title2()} 
            <Title2></Title2>
            <Title2/>
        </div>
)

// Component Composition - One component in another component

const BodyComponent = () =>{
   return (
    <div>
        <HeadingComponent/>
        {HeadingComponent()}
        <h3>This is Body component from Functional component</h3>
    </div>
   )
}




var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyComponent/>);