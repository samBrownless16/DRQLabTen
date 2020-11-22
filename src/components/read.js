import React from 'react';
import '../App.css';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        // movies data collection
        movies: [ ]
    };

    // function which retrieves data and sets movies collection
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies') // Now retrieves the data from our server
        .then(response => {
            this.setState({movies:response.data}); // sets movies collection with data retrieved
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        return(
            <div className="App">
                <h1>This is my Read component</h1>
                {/* Embedded Movies Component (displays movie info)*/}
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}
