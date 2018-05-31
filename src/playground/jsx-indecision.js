console.log("App.js is running.");

const navigation = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        navigation.options.push(option);
        e.target.elements.option.value = "";
        renderNavigation();
    }
    console.log("form submitted");
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * navigation.options.length);
    const option = navigation.options[randomNum];
    alert(option);
}

const removeAll = () => {
    navigation.options.length = 0; // or navigation.options = [];
    renderNavigation();
}

const renderNavigation = () => {
    const template = (
        <div>
            <h1>{navigation.title}</h1>
            {navigation.subtitle && <p>{navigation.subtitle}</p>}
            <p>{navigation.options.length > 0 ? "Here are your options" : "no options"}</p>
            <button disabled={navigation.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    navigation.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>            
        </div>
    );

    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");

renderNavigation();