var title = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
}

var titleTemplate = (
    <div>
        <h1>{title.title}</h1>
        <p>{title.subTitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);


var user = {
    userName: 'Divyansh Khandelwal',
    userAge: 19,
    userLocation: 'Vellore'
}

const getLocation = (location) => {
    if (location) {
        return <p>Location : {location}</p>
    }
}
var userTemplate = (
    <div>
        <h1>{user.userName ? user.userName : 'Anonymous'}</h1>

        <p>Age: {user.userAge}</p>
        {getLocation(user.userLocation)}
    </div>
);

var appRoute = document.getElementById('app')

// ReactDOM.render(titleTemplate, appRoute)
ReactDOM.render(userTemplate, appRoute)