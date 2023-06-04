import React from 'react';

class Form extends React.Component{
    state = {
        textValue: 'Hello',
        textareaValue: 'Hello textarea',
    }

    handleChange = (e) => {
        if(e.target.type === 'text'){
            this.setState({
                textValue:e.target.value
            })
        } else if(e.target.type === 'textarea'){
            this.setState({
                textareaValue:e.target.value
            })
        }
    }

    render(){
        const {textValue, textareaValue} = this.state;
        return (
            <form>
                <input 
                    type='text' 
                    value={textValue} 
                    onChange={this.handleChange}>
                </input>

                <textarea 
                    value={textareaValue} 
                    onChange={this.handleChange}>
                </textarea>
            </form>
        );
    }
}

export default Form;