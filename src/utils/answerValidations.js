import answers from './../data/answers.json';
import solutions from './../data/solutions.json';

const GAME_EPOCH = new Date('May 23, 2022 00:00:00').valueOf();

const today = new Date();
const now = Date.now();


export const isValidGuess = (guess) => {
  const flattenedGuess = guess.join('-');
  return !!solutions[flattenedGuess];
}

export const todayGameIndex = () => {
  return Math.floor(Math.max(daysBetween(GAME_EPOCH, now), 0));
}

const treatAsUTC = (date) => {
  const result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
}

const daysBetween = (startDate, endDate) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

export const todaysTrip = () => {
  const index = todayGameIndex();
  return answers[index % answers.length];
}

export const flattenedTodaysTrip = () => {
  return todaysTrip().join('-');
}

export const todaysSolution = () => {
  return solutions[todaysTrip().join("-")];
}

export const isWinningGuess = (guess) => {
  return guess.join('-') === todaysTrip().join('-');
}

export const updateGuessStatuses = (guesses, setCorrectRoutes, setPresentRoutes, setAbsentRoutes, correctRoutes, presentRoutes, absentRoutes) => {
  const correct = correctRoutes || [];
  const present = presentRoutes || [];
  const absent = absentRoutes || [];

  guesses.forEach((guess) => {
    const remainingRoutes = [];
    const remainingGuessPositions = [];

    todaysTrip().forEach((routeId, index) => {
      if (guess[index] === routeId) {
        correct.push(routeId);
      } else {
        remainingRoutes.push(routeId);
        remainingGuessPositions.push(index);
      }
    });

    remainingGuessPositions.forEach((index) => {
      if (remainingRoutes.includes(guess[index])) {
        present.push(guess[index]);
      } else {
        absent.push(guess[index]);
      }
    });
  });

  setCorrectRoutes(correct);
  setPresentRoutes(present);
  setAbsentRoutes(absent);
}

export const checkGuessStatuses = (guess) => {
  const results = ['absent', 'absent', 'absent'];
  const remainingRoutes = [];
  const remainingGuessPositions = [];

  todaysTrip().forEach((routeId, index) => {
    if (guess[index] === routeId) {
      results[index] = 'correct';
    } else {
      remainingRoutes.push(routeId);
      remainingGuessPositions.push(index);
    }
  });

  remainingGuessPositions.forEach((index) => {
    if (remainingRoutes.includes(guess[index])) {
      results[index] = 'present';
    }
  });

  return results;
}
