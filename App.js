import React from "react";
import ReactDOM from "react-dom/client";


const reactElement = React.createElement("h1", { id: "heading"}, "This heading from React Element!!")
const jsxHeading = <h2 id="heading">This is Jsx syntax in React!</h2>

//React Element
const heading = (
    <h1 className="head" tabIndex="5">
        React Element using JSx
    </h1>
);

const fn = () => true;
const fn2 = () => {return true};
//React Functional Component --> is a js function which returns JSx or React Element

const HeadingComponent1 = () => (<h3 className="heading">Functional component with arrow function</h3>);
const HeadingComponent = () => {
    // return <h3>Functional component with arrow function</h3>;
    return(
        <div id="headingComponent">
            <p>Just for Information!!</p>
            <h3>Functional component with arrow function</h3>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(reactElement);
console.log(jsxHeading);

