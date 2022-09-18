import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';

function App() {
	const success = useSelector((state) => state.success);
	const guessedWords = useSelector((state) => state.guessedWords);
	const secretWord = useSelector((state) => state.secretWord);

	// so that we can dispatch an action
	const dispatch = useDispatch();

	useEffect(() => {
		// get the secret word
		dispatch(getSecretWord());
	}, []);

	return (
		<div data-test='component-app' className='container'>
			<h1>Jotto</h1>
			<div class='collapse' id='collapseExample'>
				<div class='card card-body'>the secret word is {secretWord}</div>
			</div>
			<Congrats success={success} />
			<Input success={success} secretWord={secretWord} />
			<GuessedWords guessedWords={guessedWords} />
			the secret word is {secretWord}
		</div>
	);
}

export default App;
