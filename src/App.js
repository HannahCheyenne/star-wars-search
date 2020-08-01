import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ResultsList from './ResultsList/ResultsList';
import Header from './Header/Header';
import SearchContext from './SearchContext';
import Error from './Errors/Error';
import config from './config';
import './App.css';

export default class App extends Component {
  state = {
    query: '',
    filter: '',
    results: [],
    showResults: false,
    error: null
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
        throw new Error('No Results found! Try again')
      } 
      return res.json();
      })
      .then(data => {
        setTimeout(()=> this.setState({
          results: data.results,
          error: null,
          showResults: true,
        }), 1000)

      })
      .catch(err => {
        this.setState({
          error: err.message,
          showResults: false
        })
      })
  }

  updateSelect = (e) => {
    e.preventDefault();
    this.setState({
      filter: {value: e.target.value},
      showResults: false,
    })
  }
  render() {
    const value = {
      results: this.state.results,
      filter: this.state.filter.value,
      showResults: this.state.showResults,
      handleSearchSubmit: this.handleSearchSubmit,
      updateSelect: this.updateSelect,
    }
    return (
      <SearchContext.Provider value= {value}>
        <div className='App'>
          <Header />
          <SearchBar />
          <Error>
            {this.state.error ? <div className="error">{this.state.error}, try again</div> : <ResultsList />}
          </Error>
        </div>
      </SearchContext.Provider>
    );    
  }

}