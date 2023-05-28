import React from 'react';

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
        date: new Date()
    }


	render(){
        const index = 0;

		return (
			<h1 className='heading' tabIndex={index}>
			<span className='text'>hello {this.state.date.toLocaleTimeString(this.props.locale)}</span>
			</h1>
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