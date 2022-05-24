import { Modal, Header, Grid, Segment, Icon, Label } from 'semantic-ui-react';
import { useTranslation, Trans } from 'react-i18next';

import TrainLabel from './TrainLabel';
import { loadSettings } from '../utils/settings';

const AboutModal = (props) => {
  const { open, handleClose } = props;
  const { t, i18n } = useTranslation();
  const settings = loadSettings();
  return (
    <Modal closeIcon open={open} onClose={handleClose} size='tiny'>
      <Modal.Header>{ t('about.title') }</Modal.Header>
      <Modal.Content scrolling>
        <Trans i18nKey="about.intro">
          <p>Guess the <strong>ROUNDLE</strong> in 6 tries.</p>
          <p>Each guess must a be a <strong>valid train trip involving 3 trains</strong> using valid interchanges between them.</p>
          <p>You need to guess a specific set of three trains that can make the trip.</p>
        </Trans>
        <Header as='h4'>{ t('about.examples.title') }</Header>
        <Segment basic>
          <Grid centered columns={3} className='game-grid'>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder className='correct'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="check" fitted />
                    </Label>
                  }
                  <TrainLabel id='Elizabeth' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='Piccadilly' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='Northern' size='small' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <p><TrainLabel id='Elizabeth' size='small' /> { t('about.examples.correct') }</p>

        <Segment basic>
          <Grid centered columns={3} className='game-grid'>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='Overground' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='present'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="arrows alternate horizontal" fitted />
                    </Label>
                  }
                  <TrainLabel id='Overground' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='DLR' size='small' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p><TrainLabel id='Overground' size='small' /> { t('about.examples.present') }</p>

        <Segment basic>
          <Grid centered columns={3} className='game-grid'>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='District' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='Central' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='absent'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="x" fitted />
                    </Label>
                  }
                  <TrainLabel id='Circle' size='small' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p><TrainLabel id='Circle' size='small' /> { t('about.examples.absent') }</p>

        <Trans i18nKey="about.explanation">
          <p><strong>Multiple routings may be possible</strong> to make the trip, but your goal is to
          find <strong>the one routing</strong> that matches the puzzle of the day. The solution <strong>may or may not</strong> be the fastest or efficient routing.</p>
          <p>Routing for each train line is based on <strong>weekday off-peak schedule</strong> (i.e. Edgware to Morden - Northern line trains travel via Bank only, no fast/semi-fast Metroplitan line trains).</p>
        </Trans>

        <Header as='h4'>{ t('about.about.title') }</Header>
        <p>
          <Trans i18nKey="about.about.subwaydle">
            This game is forked from the original <a href="https://www.subwaydle.com" target="_blank">Subwaydle</a> game based on the NYC Subway system.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.around_the_world">
            Subwaydles around the world: <a href="https://www.subwaydle.com" target="_blank">New York</a>, <a href="https://hk.subwaydle.com" target="_blank">Hong Kong</a>.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.inspirations">
            Inspired by <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Wordle</a>,
            its <a href="https://github.com/hannahcode/wordle" target="_blank">open-source clone</a>, <a href="https://nerdlegame.com/" target="_blank">Nerdle</a>,
            and <a href="https://www.nytransitmuseum.org/">New York Transit Museum</a> Trivia Nights.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.created">
            Created by <a href="https://www.sunny.ng" target="_blank">Sunny Ng</a>
          </Trans>
          <a href='https://twitter.com/_blahblahblah' target='_blank'><Icon name='twitter' link /></a>
        </p>

          <p><a href="https://github.com/blahblahblah-/subwaydle-london" target="_blank">Source code</a>.</p>

          <p>Geolocation data © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>.</p>

          <p>{ t("about.about.other_projects")} <a href="https://www.theweekendest.com" target="_blank">The Weekendest</a> and <a href="https://www.goodservice.io" target="_blank">goodservice.io</a>.</p>
      </Modal.Content>
    </Modal>
  );
}

export default AboutModal;
