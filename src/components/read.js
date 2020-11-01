import React from 'react';
import '../App.css';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        // movies data collection
        movies: [ ]
    };

    // function which retrieves data and sets movies collection using json link
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
        .then(response => {
            this.setState({movies:response.data.Search});
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
