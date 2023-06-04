import React from 'react';
import Button from './Button';

class Clock extends React.Component{
    // constructor(props){
    //     super(props);

    //     // Implement state
    //     this.state = {
    //         date: new Date()
    //     }
    // }

    // Since we have no props data to use in the state so we can call it directly.
    state = {
        date: new Date(),
        locale: 'en-US'
    }

    // clickHandle(e){
    //     e.preventDefault(); // Prevent default behavior
        
    //     // Change state.
    //     this.setState({'locale': 'bn-BD'})
    // }

    // Prvious click handle method has `this` issue
    // Solve the undefined this issue using arrow function
    clickHandle = (locale) => {
        this.setState({'locale': locale})
    }


	render(){
        // console.log('rendered clock componenet');
        const index = 0;

        const { locale } = this.state;
        let button;

        if( locale === 'en-US' ){
            button =    (<Button change={this.clickHandle} locale="bn-BD"/>); // Assign JSX element in the variable
        } else{
            button =    (<Button change={this.clickHandle} locale="en-US"/>);
        }

		return (
            <div>
                <h1 className='heading' tabIndex={index}>
                <span className='text'>hello {this.state.date.toLocaleTimeString(this.state.locale)}</span>
                </h1>
                {/* <Button change={this.clickHandle.bind(this, 'bn-BD')} /> it render button component each second */}

                {/* It does not render the button component each second */}
                {button}
            </div>
		);
	}

    componentDidMount(){
        this.clockTimer = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    componentWillUnmount(){
        // For single page application, this clock will continue on each route event if you don't see it which is resource hungry.
        // That's why we need to clear the interval
        clearInterval(this.clockTimer); // tell which interval should be cleared
    }
}

export default Clock;