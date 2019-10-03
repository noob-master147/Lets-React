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
    title.options = []
    renderTitleApp()
}

const appRoute = document.getElementById('app')

const number = [55 ,66 ,77]

const renderTitleApp = () => {
    const titleTemplate = (
        <div>
            <h1>{title.title}</h1>
            {title.subTitle && <p>{title.subTitle}</p>}
            <p>{title.options.length ? 'Here are your options' : 'No options'}</p>
            <p>{title.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            {/* {
                number.map((number) => {
                    return <p key={number}>Number:{number}</p>
                })
            }  */}
            <ol>
                {
                    title.options.map((option) => {
                        return <li key = {option}>{option}</li>
                    })
                }
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