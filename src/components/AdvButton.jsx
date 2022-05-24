import React, { Component } from 'react';
import {getAdvImg} from '../FileUtils';


class AdvButton extends Component {
    state = {
        img: getAdvImg(this.props.ele, this.props.wep, 0)
    }
    getFormat(){
        var color;
        switch(this.props.ele){
            case "flame": color = "danger"; break;
            case "water": color = "primary"; break;
            case "wind": color = "success"; break;
            case "light": color = "warning"; break;
            case "shadow": color = "dark"; break;
        }
        var classes = "btn btn-sm m-1 btn-" + color;
        return classes;
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.handleAdvButtonClick(this.props.ele, this.props.wep)}
                    className={this.getFormat()}>
                    <img src={this.props.img} width="80"/>
                </button>
            </React.Fragment>
        );
    }
}

export default AdvButton;