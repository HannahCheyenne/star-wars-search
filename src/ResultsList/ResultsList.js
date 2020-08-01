import React, { Component } from 'react';
import { format } from 'date-fns';
import SearchContext from '../SearchContext';

export default class ResultsList extends Component {
    static contextType = SearchContext;
    
    render () {
        let resultItems= '';
        const { results, filter } = this.context;
        if(filter === 'people'){
            resultItems = results.map((result, i) => {
                return (
                    <li key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Height: {result.height}</p>
                        <p>Weight: {result.mass}</p>
                        <p>Gender: {result.gender}</p>
                        <p>Birth Year: {result.birth_year}</p>
                    </li>
                ) 
            })
        } else if(filter === 'starships'){
            resultItems = results.map((result, i) => {
                return (
                    <li key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Manufacturer: {result.manufacturer}</p>
                        <p>Crew size: {result.crew} Passengers: {result.passengers}</p>
                        <p>Cargo Capacity: {result.cargo_capacity}kg</p>
                        <p>Vehicle class: {result.vehicle_class}</p>
                    </li>
                ) 
            })
        } else if(filter === 'vehicles'){
            resultItems = results.map((result, i) => {
                return (
                    <li key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Manufacturer: {result.manufacturer}</p>
                        <p>Crew size: {result.crew} Passengers: {result.passengers}</p>
                        <p>Cargo Capacity: {result.cargo_capacity}kg</p>
                        <p>Vehicle class: {result.vehicle_class}</p>
                    </li>
                ) 
            })
        } else if(filter === 'planets'){
            resultItems = results.map((result, i) => {
                return (
                    <li key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Climate: {result.climate}</p>
                        <p>Terrain: {result.terrain}</p>
                        <p>Gravity: {result.gravity}</p>
                        <p>Population: {result.population}</p>
                    </li>
                ) 
            })
        } else if(filter === 'films'){
            resultItems = results.map((result, i) => {
                return (
                    <li key={i}>
                        <p className="result-name">{result.title}</p>
                        <p>Episode: {result.episode_id}</p>
                        <p>Director: {result.director}</p>
                        <p>Release date: {format(new Date(result.release_date), 'MMMM do, yyy')}</p>
                    </li>
                ) 
            })
        } else if(filter === 'species'){
            resultItems = results.map((result, i) => {
                return (
                    <li key={i}>
                        <p className="result-name">{result.name}</p>
                        <p>Classification: {result.classification}</p>
                        <p>Designation: {result.designation}</p>
                        <p>Avg Lifespan: {result.average_lifespan}</p>
                    </li>
                ) 
            })
        }
        
        return(
            <div className="results">
                <ul className="resultsList">
                    {resultItems}
                </ul> 
            </div>
        )
    }
}