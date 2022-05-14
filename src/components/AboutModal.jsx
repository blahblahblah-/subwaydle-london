import { Modal, Header, Grid, Segment, Icon, Label } from 'semantic-ui-react';
import TrainLabel from './TrainLabel';
import { loadSettings } from '../utils/settings';

const AboutModal = (props) => {
  const { open, handleClose } = props;
  const settings = loadSettings();
  return (
    <Modal closeIcon open={open} onClose={handleClose} size='tiny'>
      <Modal.Header>How to Play</Modal.Header>
      <Modal.Content scrolling>
        <p>Guess the <strong>MTRDLE</strong> in 6 tries.</p>
        <p>Each guess must a be a <strong>valid train trip involving 3 trains</strong> using interchanges between them.</p>
        <p>You need to guess a specific set of three trains that can make the trip.</p>

        <Header as='h4'>Examples</Header>
        <Segment basic>
          <Grid centered columns={4} className='game-grid'>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder className='correct'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="check" fitted />
                    </Label>
                  }
                  <TrainLabel id='ISL' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='TWL' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='KTL' size='medium' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p>The <TrainLabel id='ISL' size='small' /> train is in the correct spot of the trip.</p>

        <Segment basic>
          <Grid centered columns={4} className='game-grid'>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='EAL' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='present'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="arrows alternate horizontal" fitted />
                    </Label>
                  }
                  <TrainLabel id='KTL' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='TKL' size='medium' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p>The <TrainLabel id='KTL' size='small' /> train is part of the trip, but in the wrong spot.</p>

        <Segment basic>
          <Grid centered columns={4} className='game-grid'>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='TML' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='TCL' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='absent'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="x" fitted />
                    </Label>
                  }
                  <TrainLabel id='AEL' size='medium' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p>The <TrainLabel id='AEL' size='small' /> train is not part of the trip in any spot.</p>

        <p><strong>Multiple routings may be possible</strong> to make the trip, but your goal is to
        find <strong>the one routing</strong> that matches the puzzle of the day. The solution <strong>may or may not</strong> be the fastest or efficient routing.</p>
        <p>Routing for each train line is based on <strong>midday schedule</strong> (i.e. LOHAS Park branch trains terminate at Tiu Keng Leng).</p>

        <Header as='h4'>About</Header>
        <p>This game is forked from the original <a href="https://www.subwaydle.com" target="_blank">Subwaydle</a> game based on the NYC Subway system.</p>

        <p>Inspired by <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Wordle</a>,
          its <a href="https://github.com/hannahcode/wordle" target="_blank">open-source clone</a>, <a href="https://nerdlegame.com/" target="_blank">Nerdle</a>,
          and <a href="https://www.nytransitmuseum.org/">New York Transit Museum</a> Trivia Nights.</p>

        <p>Created by <a href="https://www.sunny.ng" target="_blank">Sunny Ng</a><a href='https://twitter.com/_blahblahblah' target='_blank'><Icon name='twitter' link /></a></p>
        <p><a href="https://github.com/blahblahblah-/subwaydle-hk" target="_blank">Source code</a>.</p>
        <p>Check out my other NYC Subway related projects: <a href="https://www.theweekendest.com" target="_blank">The Weekendest</a> and <a href="https://www.goodservice.io" target="_blank">goodservice.io</a>.</p>
      </Modal.Content>
    </Modal>
  );
}

export default AboutModal;
