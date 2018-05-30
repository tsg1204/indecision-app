const changedVisibility = () => {
        visible = !visible;
        renderNavigation();
}

let visible = false;

const renderNavigation = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>

            <button onClick={changedVisibility}>
             {visible ? "Hide details" : "Show details"}
            </button>
            {visible && (
                <div>
                    <p>Some text to see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");

renderNavigation();