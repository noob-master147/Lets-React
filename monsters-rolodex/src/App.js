import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.jsx'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
      .then(res => res.json())
      .then(user => this.setState({ monsters: user }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
