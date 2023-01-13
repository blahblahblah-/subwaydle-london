import { Header, Grid, Progress } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import './StatsHistogram.scss';

const StatsHistogram = (props) => {
  const { isDarkMode, stats } = props;
  const { t } = useTranslation();
  const max = Math.max(...stats.winDistribution);
  return (
    <>
      <Header as='h3'>{ t('statistics.guess_distribution') }</Header>
      <div className='stats-histogram'>
        <Grid>
          {
            stats.winDistribution.map((value, i) => {
              return (
                <Grid.Row key={i}>
                  <Grid.Column width={2}>
                    { i + 1}
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <Progress progress='value' success inverted={isDarkMode} value={value} total={max} />
                  </Grid.Column>
                </Grid.Row>
              )
            })
          }
        </Grid>
      </div>
    </>
  )
}

export default StatsHistogram;