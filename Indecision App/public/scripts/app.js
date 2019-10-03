'use strict';

console.log('App is up and running!');
var appRoute = document.getElementById('app');

var state = false;

var buttonClick = function buttonClick() {
    state = !state;
    renderVisibilityApp();
};

var renderVisibilityApp = function renderVisibilityApp() {
    var visibilityTemplate = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: buttonClick },
            state ? 'Hide Details' : 'Show Details'
        ),
        state && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Here are some details'
            )
        )
    );
    ReactDOM.render(visibilityTemplate, appRoute);
};

renderVisibilityApp();
