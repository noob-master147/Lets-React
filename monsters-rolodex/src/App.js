import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.jsx'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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

    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <input type="search" placeholder="search monsters" onChange={async (e) => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

