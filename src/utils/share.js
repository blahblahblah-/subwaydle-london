import { todayGameIndex, checkGuessStatuses } from './answerValidations';

export const shareStatus = (guesses, lost) => {
  const text = `Subwaydle ${todayGameIndex()} ${lost ? 'X' : guesses.length}/6\n\n` +
    generateEmojiGrid(guesses);
  if (navigator.share) {
    navigator.share(text);
  } else {
    navigator.clipboard.writeText(text);
  }
}

const generateEmojiGrid = (guesses) => {
  return guesses
    .map((guess) => {
      const status = checkGuessStatuses(guess);
      return status.map((s) => {
          switch (s) {
            case 'correct':
              return '🟩';
            case 'present':
              return '🟨';
            default:
              return '⬜';
          }
        })
        .join('');
    })
    .join('\n');
}