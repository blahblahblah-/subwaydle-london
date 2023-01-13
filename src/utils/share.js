import { todayGameIndex, checkGuessStatuses, NIGHT_TUBE_GAME } from './answerValidations';

export const shareStatus = (guesses, lost) => {
  const title = todayGameIndex() === NIGHT_TUBE_GAME ? `Roundle ${todayGameIndex()} (Night Edition)` :`Roundle ${todayGameIndex()}`;
  const text = `${title} ${lost ? 'X' : guesses.length}/6\n\n` +
    generateEmojiGrid(guesses);
  const isIos = /iP(ad|od|hone)/i.test(window.navigator.userAgent) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform));
  if (navigator.share && isIos) {
    navigator.share({text: text});
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
              return '🟢';
            case 'similar':
              return '🔵';
            case 'present':
              return '🟡';
            default:
              return '⚪';
          }
        })
        .join('');
    })
    .join('\n');
}
