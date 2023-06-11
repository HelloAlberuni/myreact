import React from 'react';

class Form extends React.Component{
    state = {
        textValue: 'Hello',
        textareaValue: 'Hello textarea',
        fruitValue: 'banana',
        isAdult: true
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
        } else if(e.target.type === 'select-one'){
            this.setState({
                fruitValue:e.target.value
            })
        } else if(e.target.type === 'checkbox'){
            this.setState({
                isAdult: e.target.checked
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {textValue, textareaValue, fruitValue, isAdult} = this.state;
        console.log(textValue, textareaValue, fruitValue, isAdult);
    }

    render(){
        const {textValue, textareaValue, fruitValue, isAdult} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    value={textValue} 
                    onChange={this.handleChange}>
                </input>

                <textarea 
                    value={textareaValue} 
                    onChange={this.handleChange}>
                </textarea>

                <select value={fruitValue} onChange={this.handleChange}>
                    <option value='apple'>Apple</option>
                    <option value='banana'>Banana</option>
                </select>

                <input type='checkbox' checked={isAdult} onChange={this.handleChange}></input>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export default Form;