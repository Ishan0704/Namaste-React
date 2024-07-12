import React from 'react';
import ReactDOM from 'react-dom';

const heading= React.createElement("h1",{id:123},"Hii there"); // CDN REACT

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);