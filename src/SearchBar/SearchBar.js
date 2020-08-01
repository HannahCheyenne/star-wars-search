import React, { Component } from 'react';
import SearchContext from '../SearchContext';
import SearchSelector from '../SearchSelector/SearchSelector';
// import config from '../config';

export default class SearchBar extends Component {
    static contextType = SearchContext;

    render() {
        return (
            <form className="searchBar" onSubmit={this.context.handleSearchSubmit}>
                <label htmlFor="searchInput">Search: </label>
                <input type="text" id="searchInput" name="searchInput"/>
                <SearchSelector updateSelect={this.updateSelect}/>
                <button type="submit" className="submit">Search</button>
            </form>
        )
    }
}