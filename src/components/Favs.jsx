import React, { Component } from 'react';

import AdvButton from "./AdvButton";
import AdvDisplay from "./AdvDisplay";
import {getImage, getAdvImg, getAdvs} from '../FileUtils';

import OutsideClickHandler from './OutsideClickHandler';

const unknownImg = require("../resources/misc/unknown.png");

const logo = require("../resources/misc/logo_app.png");
const favsTitle = require("../resources/misc/favs.png");

class Favs extends Component {
    state = {
        elements: ["?", "flame", "water", "wind", "light", "shadow"],
        weapons: ["?", "sword", "blade", "dagger", "lance", "axe", "bow", "wand" , "staff", "gun"],
        clickElement: "?",
        clickWeapon: "?",
        imgs: this.createArray()
    };

    createArray() {
        var arr = new Array(5);
        for(let i=0; i<arr.length; i++){
            arr[i] = new Array(9);
            for(let j=0; j<arr[i].length; j++){
                arr[i][j] = unknownImg;
            }
        }
        return arr;
    }

    getButtonImg(element, weapon){
        var index1 = this.state.elements.indexOf(element)- 1;
        var index2 = this.state.weapons.indexOf(weapon) - 1;
        return this.state.imgs[index1][index2];
    }

    handleAdvPick = (element, weapon, img) => {
        var index1 = this.state.elements.indexOf(element) - 1;
        var index2 = this.state.weapons.indexOf(weapon) - 1;
        console.log("farts");
        const imgs = [...this.state.imgs];
        imgs[index1][index2] = img;
        this.setState({imgs});
    }

    handleAdvButtonClick = (clickElement, clickWeapon) => {
        setTimeout(() => {
             this.setState({clickElement});
             this.setState({clickWeapon});
        }, 30);
    };

    handleDisplayClickOutside = () => {
        this.setState({clickElement: "?"});
        this.setState({clickWeapon: "?"});
    }

    getBreak(element, weapon){
        if(element === "shadow"){
            if(weapon === this.state.clickWeapon){
                return <div className="w-100">
                    <AdvDisplay
                        advs={getAdvs(this.state.clickElement, weapon)}
                        element={this.state.clickElement}
                        weapon={weapon}
                        handleAdvPick={this.handleAdvPick}
                     />
                </div>;
            }
            return <div className="w-100"></div>;
        }
    }
    /*
    getPic(element, weapon){
        if(element === "?" && weapon === "?"){
            return;
        }
        else if(element === "?" && weapon !== "?"){
            const img = require("../resources/misc/" + weapon + ".png");
            return <img src={img} className="mx-auto d-block" alt=""></img>;
        } else if(element !== "?" && weapon === "?"){
            const img = require("../resources/misc/" + element + ".png");
            return <img src={img} className="mx-auto d-block" alt=""></img>;
        } else {
            return <AdvButton
                key={element+weapon}
                ele={element}
                wep={weapon}
                img={this.getButtonImg(element, weapon)}
                handleAdvButtonClick={this.handleAdvButtonClick}
            />;
        }
    } */

    getCol(element, weapon){
        if(element === "?" && weapon === "?"){
            return <div className="col-1 border"></div>
        }
        else if(element === "?" && weapon !== "?"){
            const img = require("../resources/misc/" + weapon + ".png");
            return <div className="col-sm-1 border" key={element+"+"+weapon}>
                    <img src={img} className="mx-auto d-block mt-4" alt=""></img>
                   </div>;
        } else if(element !== "?" && weapon === "?"){
            const img = require("../resources/misc/" + element + ".png");
            return <div className="col-sm-2 border" key={element+"-"+weapon}>
                    <img src={img} className="mx-auto d-block" alt=""></img>
                   </div>;
        } else {
            return <div className="col-2 border" key={element+","+weapon}>
                    <AdvButton
                        key={element+weapon}
                        ele={element}
                        wep={weapon}
                        img={this.getButtonImg(element, weapon)}
                        handleAdvButtonClick={this.handleAdvButtonClick}
                     />
                   </div>
        }
    }



    render() {
        const eles = this.state.elements;
        const weps = this.state.weapons;

        return (
            <div className="bg-light w-50 mx-auto">
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            this.handleDisplayClickOutside();
                            console.log("Outside Click");
                        }}
                    >
                        <div className="row justify-content-center">
                            <div className="row justify-content-center">
                                <img src={logo} className="col-3 thumbnail img-responsive"/>
                                <img src={favsTitle} className="col-7 thumbnail img-responsive"/>
                            </div>
                            <div></div>
                            {weps.map(wep => (
                                eles.map(ele => (
                                    <React.Fragment key={ele+wep}>
                                        {this.getCol(ele,wep)}
                                        {this.getBreak(ele, wep)}
                                    </React.Fragment>
                                ))
                            ))}
                            <div className="row justify-content-center">
                                <p className="col-1 h4 mt-2 mb-2 text-muted text-nowrap">Made in sockperson.github.io/dragalia-favs</p>
                            </div>
                        </div>
                    </OutsideClickHandler>

            </div>
        );
    }
}

export default Favs;