import React, { Component } from 'react';

import Display from './Display/Display';
import Actions from './Actions/Actions';
import './Clicker.css';

class Clicker extends Component {
    state = {
        counter: 0
    }

    updateCounter = (newCounter) => {
        this.setState({
            counter: newCounter
        });
    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <Display counter={this.state.counter} />
                    </h5>
                    
                    <hr />
                    <Actions 
                        updateCounter={this.updateCounter} 
                        counter={this.state.counter} 
                    />
                </div>
            </div>
        );
    }
}

export default Clicker;