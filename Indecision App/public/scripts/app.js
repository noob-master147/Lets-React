'use strict';

var appRoute = document.getElementById('app');
//JSX JavaScript XML
var temp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This a paragraph'
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
        ),
        React.createElement(
            'li',
            null,
            'Item Three'
        )
    )
);

var user = {
    userName: 'Divyansh Khandelwal',
    userAge: 19,
    userLocation: 'Vellore'

    //Dynamic webabb
};var newTemp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.userLocation
    )
);

ReactDOM.render(newTemp, appRoute);
