import React from 'react';
import BoilingVerdict from "./BoilingVerdict";
import InputField from "./InputField";
import { celciusToFarenhite, farenhiteToCelcius, convertTemp } from '../lib/converter';

export default class Calculator extends React.Component{
    state = {
        temparature: ''
    }

    changeHandler = (e, scale) => {
        this.setState({
            scale,
            temparature: e.target.value,
        });
    }

    render(){
        const {scale, temparature} = this.state;
        const farehite = scale === 'c' ? convertTemp(temparature, celciusToFarenhite) : temparature;
        const celcius = scale === 'f' ? convertTemp(temparature, farenhiteToCelcius) : temparature;

        return(
            <div>
                <InputField scale="c" temparature={celcius} handler={this.changeHandler} />

                <InputField scale="f" temparature={farehite} handler={this.changeHandler} />

                <BoilingVerdict temparature={temparature} />
            </div>               
        );
    }
}