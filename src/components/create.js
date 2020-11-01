import React from 'react';
import '../App.css';

export class Create extends React.Component {
    constructor() {
        super();
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Title:'',
            Year:'',
            Poster:''
        }
    }

    // onChange events which will update data if/when changed using the form
    onChangeMovieTitle(e){
        this.setState({
            Title:e.target.value
        })
    }
    onChangeMovieYear(e){
        this.setState({
            Year:e.target.value
        })
    }
    onChangeMoviePoster(e){
        this.setState({
            Poster:e.target.value
        })
    }
    onSubmit(e){
        alert("Movie Added " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
    }

    render() {
        return(
            <div className="App">
                <h1>This is my Create component</h1>
                {/* Form which allows user to enter movie information */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.onChangeMovieTitle}></input>
                    </div>                    
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text" className="form-control" value={this.state.Year} onChange={this.onChangeMovieYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <input type="text" className="form-control" value={this.state.Poster} onChange={this.onChangeMoviePoster}></input>
                    </div>
                    <div>
                        <input type="submit" value="Add Movies"></input>
                    </div>
                </form>
            </div>
        );
    }
}
