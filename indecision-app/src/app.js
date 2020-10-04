class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App"
        const subTitle = "Put your Decisions in the hands of a computer"
        const options = ['a', 'b', 'c']

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('Pick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I Do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemove() {
        alert('Remove')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemove}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()

        if (option) {
            alert(option)
        }
        e.target.elements.option.value = ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))