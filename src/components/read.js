import React from 'react';
import '../App.css';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this); // bind ReloadData method -> ensures keyword 'this' is always in its correct context
    }

    state = {
        // movies data collection
        movies: [ ]
    };

    // Method which re-retrieves movie data (This will act as a refresh if/when a movie is deleted)
    ReloadData() {
        axios.get('http://localhost:4000/api/movies')
        .then(response => {
            this.setState({movies:response.data});
        })
        .catch((error)=> {
            console.log(error);
        });
    }

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
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>  {/* Pass ReloadData down to next component */}
            </div>
        );
    }
}
