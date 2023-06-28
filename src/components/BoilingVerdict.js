import React from 'react';

export default class BoilingVerdict extends React.Component{
    render(){

        if( this.props.temparature >= 100 ){
            return <div>The water would boil.</div>
        }

        return <div>The water would not boil.</div>
    }
}