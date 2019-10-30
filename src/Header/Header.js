import React from 'react';

import './Header.css';

const header = () => {
    return(
        <div className="container">
            <div className="jumbotron border border-dark rounded bg-dark text-white">
                <h1 className="display-4">React Clicker</h1>
                <p className="lead">This simply has a display which holds a number that can be incremented, decremented, or reset back to zero.</p>
            </div>
        </div>
    );
}

export default header;