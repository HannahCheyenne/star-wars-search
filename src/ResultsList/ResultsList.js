import React, { Component } from 'react';
import SearchContext from '../SearchContext';
import './ResultsList.css';

export default class ResultsList extends Component {
    static contextType = SearchContext;
    
    render () {
        let resultItems= '';
        const { results, filter } = this.context;
        if(filter === 'people'){
            resultItems = results.map((result, i) => {
                return (
                    <div className="listItem"key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Height: {result.height}</p>
                        <p>Weight: {result.mass}</p>
                        <p>Gender: {result.gender}</p>
                        <p>Birth Year: {result.birth_year}</p>
                    </div>
                ) 
            })
        } else if(filter === 'starships'){
            resultItems = results.map((result, i) => {
                return (
                    <div className="listItem" key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Manufacturer: {result.manufacturer}</p>
                        <p>Crew size: {result.crew} Passengers: {result.passengers}</p>
                        <p>Cargo Capacity: {result.cargo_capacity}kg</p>
                    </div>
                ) 
            })
        } else if(filter === 'vehicles'){
            resultItems = results.map((result, i) => {
                return (
                    <div className="listItem" key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Manufacturer: {result.manufacturer}</p>
                        <p>Crew size: {result.crew} Passengers: {result.passengers}</p>
                        <p>Cargo Capacity: {result.cargo_capacity}kg</p>
                        <p>Vehicle class: {result.vehicle_class}</p>
                    </div>
                ) 
            })
        } else if(filter === 'planets'){
            resultItems = results.map((result, i) => {
                return (
                    <div className="listItem" key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Climate: {result.climate}</p>
                        <p>Terrain: {result.terrain}</p>
                        <p>Gravity: {result.gravity}</p>
                        <p>Population: {result.population}</p>
                    </div>
                ) 
            })
        } else if(filter === 'films'){
            resultItems = results.map((result, i) => {
                return (
                    <div className="listItem" key={i}>
                        <p className="result-name">{result.title}</p>
                        <p>Episode: {result.episode_id}</p>
                        <p>Director: {result.director}</p>
                        <p>Release date: {result.release_date}</p>
                    </div>
                ) 
            })
        } else if(filter === 'species'){
            resultItems = results.map((result, i) => {
                return (
                    <div className="listItem" key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Classification: {result.classification}</p>
                        <p>Designation: {result.designation}</p>
                        <p>Avg Lifespan: {result.average_lifespan}</p>
                    </div>
                ) 
            })
        }
        
        return(
            <div className="results">
                <div className="resultsList">
                    {this.context.showResults ? (resultItems) : <></> }
                </div> 
            </div>
        )
    }
}
