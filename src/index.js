import ReactDOM from 'react-dom/client';
import React from 'react';


const index = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

// This is functional component
// function Clock( {locale} ){
// 	return (
// 		<h1 className='heading' tabIndex={index}>
// 			<span className='text'>hello {new Date().toLocaleTimeString(locale)}</span>
// 		</h1>
// 	);
// }

// Class component : Way 1
// class Clock{
// print(){
// 	return (
// 		<h1 className='heading' tabIndex={index}>
// 		<span className='text'>hello {new Date().toLocaleTimeString()}</span>
// 		</h1>
// 	);
// }
// }

// const ClockComponent = new Clock();

// root.render(ClockComponent.print());

// Class component : Way 2
class Clock extends React.Component{
	render(){
		return (
			<h1 className='heading' tabIndex={index}>
			<span className='text'>hello {new Date().toLocaleTimeString(this.props.locale)}</span>
			</h1>
		);
	}
}

root.render(<Clock locale="bn-BD" />);