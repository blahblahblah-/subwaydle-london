import { Grid, Segment } from 'semantic-ui-react';
import TrainLabel from './TrainLabel';

const CurrentRow = (props) => {
  const { currentGuess } = props;
  const emptyGuesses = [...Array(3).keys()];
  return (
    <Grid.Row>
      {
        currentGuess.map((routeId, index) => {
          emptyGuesses.pop();
          return (
            <Grid.Column key={`guess-${index}`}>
              <Segment placeholder>
                <TrainLabel id={routeId} size='small' />
              </Segment>
            </Grid.Column>
          );
        })
      }
      {
        emptyGuesses.map((i) => {
          return (
            <Grid.Column key={i}>
              <Segment placeholder></Segment>
            </Grid.Column>
          );
        })
      }
    </Grid.Row>
  );
}

export default CurrentRow;
