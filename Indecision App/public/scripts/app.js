'use strict';

var title = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

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
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoute = document.getElementById('app');
var clickAddRoute = document.getElementById('clickAdd');

ReactDOM.render(titleTemplate, appRoute);

var renderCounterApp = function renderCounterApp() {
    var clickTemplate = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(clickTemplate, clickAddRoute);
};

renderCounterApp();
