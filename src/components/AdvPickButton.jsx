import React, { Component } from 'react';
import {getAdvImg} from '../FileUtils';


class AdvPickButton extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.handleAdvPick(this.props.element, this.props.weapon, this.props.img)} className="btn btn-secondary btn-sm m-1">
                    <img src={this.props.img} width="80"/>
                </button>
            </React.Fragment>
        );
    }
}

export default AdvPickButton;