import React from 'react';

const scales = {
    c: 'Celcius',
    f: 'Farenhite'
}

export default class InputField extends React.Component{
    render(){
        const {scale, temparature, handler} = this.props;

        return(
            <fieldset>
                <legend>Enter temparature in {scales[scale]}</legend>

                <input type="text" data-scale={scale} value={temparature} onChange={(e) => handler(e, scale)} />
            </fieldset>
        );
    }
}