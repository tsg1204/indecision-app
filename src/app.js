console.log("App.js is running.");

let navigation = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["One", "Two"]
}

let template = (
    <div>
        <h1>{navigation.title}</h1>
        {navigation.subtitle && <p>{navigation.subtitle}</p>}
        <p>{navigation.options.length > 0 ? "Here are your options" : "no options"}</p>
        <ol>
            <li> Item one</li>
            <li> Item two</li>
            <li> Item three</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log("addOne");
}
const minusOne = () => {
    console.log("minusOne");
}
const setUpReset = () => {
    console.log("Reset");
}
let templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button id="my-id" className="button" onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={setUpReset}>Reset</button>
    </div>

);

console.log(templateTwo);
let appRoot = document.getElementById("app");

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);