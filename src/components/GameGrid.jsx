import { Grid } from 'semantic-ui-react';
import CompletedRow from './CompletedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

import './GameGrid.scss';

const GameGrid = (props) => {
  const { isDarkMode, currentGuess, guesses, attempts, inPlay } = props;
  const emptyRows = [...Array(inPlay ? (attempts - 1) : attempts).keys()];
  return (
    <Grid centered columns={3} className={isDarkMode ? 'game-grid dark' : 'game-grid'}>
      {
        guesses.slice().map((g, i) => {
          emptyRows.pop();
          return (
            <CompletedRow id={i} guess={g} key={i} />
          )
        })
      }
      {
        inPlay &&
        <CurrentRow currentGuess={currentGuess} />
      }
      {
        emptyRows.map((r, i) => {
          return (
            <EmptyRow key={i} />
          );
        })
      }
    </Grid>
  );
}

export default GameGrid;
