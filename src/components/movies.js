import React from 'react';
import '../App.css';
import { MovieItem } from './movieItem';

// Component which will display the Movie information
export class Movies extends React.Component {
    render() {
        // Map function - splits collection into indivdual parts
        return this.props.movies.map((movie)=>{
            return <MovieItem movie={movie}></MovieItem>
        })
    }
}
