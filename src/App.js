import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ResultsList from './ResultsList/ResultsList';
import Header from './Header/Header';
import SearchContext from './SearchContext';
import config from './config';

export default class App extends Component {
  state = {
    query: '',
    filter: '',
    results: [],
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    if(this.state.query === undefined) {
      this.setState({
        query: this.state.filter,
      })
    }
    fetch(`${config.endpoint}${this.state.filter.value}/?search=${e.target.searchInput.value}`)
      .then(res => {
      if(!res.ok) {
          return res.json()
          .then(err => Promise.reject(err))
      } 
      return res.json();
      })
      .then(data => {
          this.setState({
              results: data.results,
          })
      })
      .catch(err => {
          console.error(err)
      })
  }

  updateSelect = (e) => {
    e.preventDefault();
    this.setState({
      filter: {value: e.target.value}
    })
  }
  render() {
    const value = {
      results: this.state.results,
      filter: this.state.filter.value,
      handleSearchSubmit: this.handleSearchSubmit,
      updateSelect: this.updateSelect,
    }
    console.log(this.state.filter.value, "from App.js")
    return (
      <SearchContext.Provider value= {value}>
        <div className='App'>
          <Header />
          <SearchBar />
          <ResultsList results={this.state.results} filter={this.state.filter}/>
        </div>
      </SearchContext.Provider>
    );    
  }

}