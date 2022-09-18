const languageStrings = {
	en: {
		congrats: 'Congratulations! You guessed the word!',
		submit: 'Submit',
		guessPrompt: 'Try to guess the secret word!',
		guessInputPlaceholder: 'enter guess',
		guessColumnHeader: 'Guessed Words',
		guessedWords: 'Guesses',
		matchingLettersColumnHeader: 'Matching Letters',
	},
	emoji: {
		congrats: '🎯🎉',
		submit: '🚀',
		guessPrompt: '🤔🤫🔤',
		guessInputPlaceholder: '⌨️🤔',
		guessedWords: '🤷‍🔤',
		guessColumnHeader: '🤷‍',
		matchingLettersColumnHeader: '✅',
	},
	es: {
		congrats: 'Enhorabuena! Has adivinado la palabra secreta!',
		submit: 'Enviar',
		guessPrompt: 'Intenta adivinar la palabra secreta!',
		guessInputPlaceholder: 'escribe tu palabra',
		guessColumnHeader: 'Palabras enviadas',
		guessedWords: 'Palabras enviadas',
		matchingLettersColumnHeader: 'Conicdencia de letras',
	},
};

function getStringByLanguage(
	languageCode,
	stringKey,
	strings = languageStrings,
) {
	if (!strings[languageCode] || !strings[languageCode][stringKey]) {
		console.warn(`Could not get string [${stringKey}] for [${languageCode}]`);

		// fall back to english
		return strings.en[stringKey];
	}

	return strings[languageCode][stringKey];
}

// for future mocking
export default {
	getStringByLanguage,
};
