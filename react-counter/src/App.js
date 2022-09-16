import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [count, setCount] = React.useState(0);
	const [error, setError] = useState(false);

	const decrement = (val) => {
		if (val < 0) return setError(true);
		setCount(val);
	};
	const increment = (val) => {
		if (error && val > 0) {
			setError(false);
			setCount(val);
		} else setCount(val);
	};

	return (
		<div data-test='component-app' className='App'>
			<h1 data-test='counter-display'>
				The counter is currently&nbsp;
				<span data-test='count'>{count}</span>
			</h1>
			<button data-test='increment-button' onClick={() => increment(count + 1)}>
				Increment counter
			</button>
			<button data-test='decrement-button' onClick={() => decrement(count - 1)}>
				Decrement counter
			</button>

			{error && (
				<div
					style={{
						color: 'red',
						fontSize: '18px',
					}}>
					Th counter cannot go below 0
				</div>
			)}
		</div>
	);
}

export default App;
