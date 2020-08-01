import React, { Component } from 'react'
import SearchContext from '../SearchContext'
import './SearchSelector.css'

export default class SearchSelector extends Component {
    static contextType = SearchContext;
  
    render () {
        return (
            <div className="searchBy-bar">
                <label htmlFor="searchBy">Search By </label>
                <select className="searchBy" name="searchBy" onChange={this.context.updateSelect}>
                    <option>Choose</option>
                    <option value="people">Characters</option>
                    <option value="starships">Spaceships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                </select>
            </div>
        ) 
    }
}