import React from 'react';

import './Actions.css';

const actions = (props) => {
    
    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={() => props.updateCounter(props.counter + 1)}>
                    <i className="fa fa-plus icon-large" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-light" onClick={() => props.updateCounter(0)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-danger" onClick={() => props.updateCounter(props.counter - 1)}>
                    <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
}

export default actions;