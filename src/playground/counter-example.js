let count = 0;
const addOne = () => {
    count++;
    console.log("addOne", count);
    renderCounterApp();
}
const minusOne = () => {
    count--;
    console.log("minusOne", count);
    renderCounterApp();
}
const setUpReset = () => {
    count = 0;
    console.log("Reset", count);
    renderCounterApp();
}

//ReactDOM.render(template, appRoot);


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id="my-id" className="button" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={setUpReset}>Reset</button>
        </div>
    
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();