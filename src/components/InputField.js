import React from 'react';

const scales = {
    c: 'Celcius',
    f: 'Farenhite'
}

export default class InputField extends React.Component{
    state = {
        temparature: ''
    }

    render(){
        const {temparature} = this.state;
        const {scale, Changehandler} = this.props;

        return(
            <fieldset>
                <legend>Enter temparature in {scales[scale]}</legend>

                <input type="text" value={temparature} onChange={Changehandler} />
            </fieldset>
        );
    }
}