import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box'

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


  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {

    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Mosters Rolodex</h1>
        <SearchBox placeholder="Search For Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

