'use strict';

console.log('app.js is running');

var temp = React.createElement(
  'p',
  null,
  'I am changing'
);
var appRoute = document.getElementById('app');

ReactDOM.render(temp, appRoute);
