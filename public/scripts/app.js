"use strict";

console.log("App.js is running.");

var navigation = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["One", "Two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        navigation.title
    ),
    navigation.subtitle && React.createElement(
        "p",
        null,
        navigation.subtitle
    ),
    React.createElement(
        "p",
        null,
        navigation.options.length > 0 ? "Here are your options" : "no options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            " Item one"
        ),
        React.createElement(
            "li",
            null,
            " Item two"
        ),
        React.createElement(
            "li",
            null,
            " Item three"
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log("addOne");
};
var minusOne = function minusOne() {
    console.log("minusOne");
};
var setUpReset = function setUpReset() {
    console.log("Reset");
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { id: "my-id", className: "button", onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: setUpReset },
        "Reset"
    )
);

console.log(templateTwo);
var appRoot = document.getElementById("app");

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
