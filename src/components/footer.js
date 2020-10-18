import React from 'react';
import '../App.css';

// Simple component which will display some text
export class Footer extends React.Component {
    render() {
        return(
            <div className="App">
                <h1>My Footer in another component</h1>
            </div>
        );
    }
}
