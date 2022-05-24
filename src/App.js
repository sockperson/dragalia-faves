import React, {Component, useRef} from 'react';
import './App.css';

import Favs from './components/Favs';

import { exportComponentAsPNG } from 'react-component-export-image';


class App extends Component {
    state = {

    };



    render(){
            const printRef = React.createRef();

            return (
                <React.Fragment>
                    <Favs key="ok" ref={printRef}></Favs>
                    <div className="text-center mt-2">
                        <button onClick={() => exportComponentAsPNG(printRef)} className="btn btn-secondary btn-sm">
                            Export to PNG
                        </button>
                    </div>
                    <p>I love minecraft!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
                </React.Fragment>
            );
    }
}

export default App;
