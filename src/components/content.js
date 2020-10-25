import React from 'react';
import '../App.css';

/*Simple Component which display some text and the time*/
export class Content extends React.Component {
    render() {
        return(
            <div className="App">
                <h1>Hello World</h1>
                {/* Displays Time */}
                <h2>It is {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}
