import React from 'react';
import ReactDOM from 'react-dom/client';

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

// Class component
class Clock{
	print(){
		return (
			<h1 className='heading' tabIndex={index}>
				<span className='text'>hello {new Date().toLocaleTimeString()}</span>
			</h1>
		);
	}
}

const ClockComponent = new Clock();

root.render(ClockComponent.print());