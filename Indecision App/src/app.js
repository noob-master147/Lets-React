console.log('App is up and running!')
const appRoute = document.getElementById('app')

let state = false

const buttonClick = () => {
    state = !state
    renderVisibilityApp()
}

const renderVisibilityApp = () => {
    const visibilityTemplate = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={buttonClick}>
                {state ? 'Hide Details' : 'Show Details'}
            </button>
            
            {state && (
                <div>
                    <p>Here are some details</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(visibilityTemplate, appRoute)
}

renderVisibilityApp()
