import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class MovieItem extends React.Component {
    
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this); // bind DeleteMovie method -> ensures keyword 'this' is always in its correct context
    }

    // Delete a movie's data using the unique id (id is always generated)
    DeleteMovie(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movies/' + this.props.movie._id)
        .then(() => {
            this.props.ReloadData(); // using the method passed down from Read, refresh when a deletion occurs
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return(
            <div className="App">
                {/* Displays the Title, Year and Poster data from the movie collection */}
                {/* <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster}></img> */}

                {/* Displays the Title, Year and Poster data from the movie collection using the Card container*/}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} alt="Movie Poster"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button> {/* Delete Button */}
                    {/* Edit Button with Link */}
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}
