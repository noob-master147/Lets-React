var appRoute = document.getElementById('app')
//JSX JavaScript XML
var temp = (
    <div>
        <h1>Indecision App</h1>
        <p>This a paragraph</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);

var user = {
    userName : 'Divyansh Khandelwal',
    userAge : 19,
    userLocation : 'Vellore'
}


//Dynamic webabb
var newTemp = (
    <div>
        <h1>{user.userName}</h1>
        <p>Age: {user.userAge}</p>
        <p>Location: {user.userLocation}</p>
    </div>
)

ReactDOM.render(newTemp, appRoute)