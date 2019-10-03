console.log('App is up and running!')

const title = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value
    if(option) {
        title.options.push(option);
        e.target.elements.option.value = ''
        renderTitleApp()
        
    }
}

const removeAll = () => {
    title.options.length = 0
    renderTitleApp()
}

const appRoute = document.getElementById('app')

const renderTitleApp = () => {
    const titleTemplate = (
        <div>
            <h1>{title.title}</h1>
            {title.subTitle && <p>{title.subTitle}</p>}
            <p>{title.options.length ? 'Here are your options' : 'No options'}</p>
            <p>{title.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type = "text" name = "option"></input>
                <button>Add options</button>
            </form>
        </div>
    );
    
    ReactDOM.render(titleTemplate, appRoute)
}

renderTitleApp()