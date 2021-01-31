import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rockets: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v4/rockets')
      .then(response => response.json())
      .then(rockets => this.setState({ rockets }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredMonsters = this.state.rockets.filter(rocket =>
      rocket.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1 className='title'>SpaceX Rockets Rolodex</h1>
        <SearchBox
          changeHandler={this.handleChange}
          placeholder='Search rocket'
        />
        <CardList rockets={filteredMonsters} />
      </div>
    );
  }
}

export default App;
