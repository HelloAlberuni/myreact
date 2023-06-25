import React from 'react';
import BoilingVerdict from "./BoilingVerdict";
import InputField from "./InputField";

export default class Calculator extends React.Component{
    state = {
        temparature: ''
    }

    changeHandler = (e) => {
        // this.setState({
        //     temparature: e.target.value;
        // });
        console.log('Calculator');
    }

    render(){
        const {temparature} = this.state;

        return(
            <div>
                <InputField scale="c" value={temparature} handler={this.changeHandler} />

                <InputField scale="f" handler={this.changeHandler} />
                <BoilingVerdict />
            </div>               
        );
    }
}