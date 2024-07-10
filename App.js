{/* <div class="parent">
    <div id="child">
        <h1>Hello</h1>
    </div>  
</div> */}

const heading = React.createElement("h1",{},"hello");
const child = React.createElement("div",{id:"child"},heading);
const parent = React.createElement("div",{className:"parent"},child);




// const parent = React.createElement("div",{className:"parent"},React.createElement("div",{id:"child"}, React.createElement("h1",{},"hello")));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);