import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {
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
                </Card>
            </div>
        );
    }
}
