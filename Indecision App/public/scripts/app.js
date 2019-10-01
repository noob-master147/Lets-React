'use strict';

var appRoute = document.getElementById('app');
//JSX JavaScript XML

var title = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
};
var titleTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        title.title
    ),
    React.createElement(
        'p',
        null,
        title.subTitle
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
};var userTemplate = React.createElement(
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

ReactDOM.render(titleTemplate, appRoute);
// ReactDOM.render(userTemplate, appRoute)
