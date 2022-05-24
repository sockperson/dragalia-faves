import React, {Component, useRef} from 'react';
import './App.css';

import Favs from './components/Favs';

import { exportComponentAsPNG } from 'react-component-export-image';


class App extends Component {
    state = {

    };

    exportButtonStyle = {
        fontSize: 30,
        fontWeight: 'bold'
    }

    render(){
            const printRef = React.createRef();

            return (
                <React.Fragment>
                    <div className="mt-5">
                        <Favs key="ok" className="mt-3" ref={printRef}></Favs>
                        <div className="text-center mt-5 mb-5">
                            <button style={this.exportButtonStyle} onClick={() => exportComponentAsPNG(printRef)} className="btn btn-secondary btn-sm">
                                Export to PNG
                            </button>
                        </div>
                    </div>
                </React.Fragment>
            );
    }
}

export default App;
