"use strict";

console.log("App.js is running.");

var navigation = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        navigation.options.push(option);
        e.target.elements.option.value = "";
        renderNavigation();
    }
    console.log("form submitted");
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * navigation.options.length);
    var option = navigation.options[randomNum];
    alert(option);
};

var removeAll = function removeAll() {
    navigation.options.length = 0; // or navigation.options = [];
    renderNavigation();
};

var renderNavigation = function renderNavigation() {
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
            "button",
            { disabled: navigation.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            navigation.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

renderNavigation();
