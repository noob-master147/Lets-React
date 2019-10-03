const title = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
}

const titleTemplate = (
    <div>
        <h1>{title.title}</h1>
        {title.subTitle && <p>{title.subTitle}</p>}
        <p>{title.options.length ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);
let count = 0

const addOne = () => {
    count++
    renderCounterApp()
}

const minusOne = () => {
    count--
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}

const appRoute = document.getElementById('app')
const clickAddRoute = document.getElementById('clickAdd')

ReactDOM.render(titleTemplate, appRoute)

const renderCounterApp = () => {
    const clickTemplate = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    ReactDOM.render(clickTemplate, clickAddRoute)
}

renderCounterApp()