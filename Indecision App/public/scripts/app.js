'use strict';

console.log('App is up and running!');
var appRoute = document.getElementById('app');

var title = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        title.options.push(option);
        e.target.elements.option.value = '';
        renderTitleApp();
    }
};
var removeAll = function removeAll() {
    title.options = [];
    renderTitleApp();
};
var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * title.options.length);
    var option = title.options[randomNum];
    console.log(option);
};
var renderTitleApp = function renderTitleApp() {
    var titleTemplate = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            title.title
        ),
        title.subTitle && React.createElement(
            'p',
            null,
            title.subTitle
        ),
        React.createElement(
            'p',
            null,
            title.options.length ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: !title.options.length, onClick: makeDecision },
            'Take my Decision'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add options'
            )
        ),
        React.createElement(
            'ol',
            null,
            title.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        )
    );
    ReactDOM.render(titleTemplate, appRoute);
};
renderTitleApp();
