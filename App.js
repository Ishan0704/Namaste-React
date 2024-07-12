import React from 'react';
import ReactDOM from 'react-dom';

const heading= React.createElement("h1",{id:123},"Hii there"); // react element

const JsxHeading1 = () => (
    <div>
        <h1>This is jsx trial</h1>
        <JsxHeading2/>
    </div>
); // functional component

const JsxHeading2 = () => (
    <h2>This is another text</h2>
); // functional component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeading1/>);
