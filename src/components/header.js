import React from 'react';
import '../App.css';

// Simple component which will display some text
export class Header extends React.Component {
    render() {
        return(
            <div className="App">
                <h1>My Header in another component</h1>
            </div>
        );
    }
}
