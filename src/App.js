import React, {Component, useRef} from 'react';
import './App.css';

import Favs from './components/Favs';

import { exportComponentAsPNG } from 'react-component-export-image';


class App extends Component {
    state = {
        lang: "en"
    };

    exportButtonStyle = {
        fontSize: 30,
        fontWeight: 'bold'
    }

    getWtfMessage(){
        if(this.state.lang === "en"){
            return "please view in desktop since idk how to make things work on mobile";
        } else {
            return "サイトとか作るの初めてなのでケータイとかでこのサイト見るとめちゃくちゃになります。。。すいません";
        }
    }

    getLangButtonClasses = (lang) => {
        var className = "btn btn-sm ml-2 mr-2 btn-";
        console.log("wtf: " + lang + " " + this.state.lang);
        if(this.state.lang === lang){
            className += "primary";
        } else {
            className += "secondary";
        }
        return className;
    }

    handleLangChange = (lang) => {
        this.setState({lang});
    }

    render(){
            const printRef = React.createRef();


            return (
                <React.Fragment>
                    <div className="text-center mt-3">
                        <button style={this.exportButtonStyle} onClick={() => this.handleLangChange("en")} className={this.getLangButtonClasses("en")}>EN</button>
                        <button style={this.exportButtonStyle} onClick={() => this.handleLangChange("jp")} className={this.getLangButtonClasses("jp")}>日本語</button>
                    </div>
                    <div className="mt-3">
                        <Favs key="ok" className="mt-3" ref={printRef} lang={this.state.lang}></Favs>
                        <div className="text-center mt-5 mb-5">
                            <button style={this.exportButtonStyle} onClick={() => exportComponentAsPNG(printRef)} className="btn btn-secondary btn-sm">
                                Export to PNG
                            </button>
                        </div>
                    </div>
                    <div className="text-center mb-5 text-muted">
                        All characters/assets belong to Cygames and Nintendo
                        <div></div>
                        {this.getWtfMessage()}
                        <div></div>
                        hello twitter!
                    </div>
                </React.Fragment>
            );
    }
}

export default App;
