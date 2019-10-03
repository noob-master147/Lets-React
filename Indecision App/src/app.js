console.log('App is up and running!')
const appRoute = document.getElementById('app')

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
const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * title.options.length)
    const option = title.options[randomNum]
    console.log(option)
}
const renderTitleApp = () => {
    const titleTemplate = (
        <div>
            <h1>{title.title}</h1>
            {title.subTitle && <p>{title.subTitle}</p>}
            <p>{title.options.length ? 'Here are your options' : 'No options'}</p>
            <button disabled={!title.options.length} onClick = {makeDecision}>Take my Decision</button>
            <button onClick={removeAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type = "text" name = "option"></input>
                <button>Add options</button>
            </form>
            <ol>
                {
                    title.options.map((option) => {
                        return <li key = {option}>{option}</li>
                    })
                }
            </ol>
        </div>
    );
    ReactDOM.render(titleTemplate, appRoute)
}
renderTitleApp()