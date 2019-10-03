'use strict';

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
};

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
};
var userTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.userName ? user.userName : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.userAge
    ),
    getLocation(user.userLocation)
);

var appRoute = document.getElementById('app');

// ReactDOM.render(titleTemplate, appRoute)
ReactDOM.render(userTemplate, appRoute);
