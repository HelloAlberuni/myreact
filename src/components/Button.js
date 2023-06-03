import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change:currentChange} = this.props;
        const {change:nextChange} = nextProps;

        console.log(currentChange);
        console.log(nextChange);
    }

    render(){
        const { change } = this.props;

        return(
            <button type='button' onClick={change}>
                Change Locale to BD
            </button>
        );
    }
}

export default Button;