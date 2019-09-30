console.log('app.js is running');

// var template = <p>This is JSX from app.js</p>


var temp = React.createElement("p", null, " This is a JSX");

var appRoute = document.getElementById('app')

ReactDOM.render(temp, appRoute)