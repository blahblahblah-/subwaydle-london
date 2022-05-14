import { Header, Statistic } from 'semantic-ui-react';
import { useTranslation, Trans } from 'react-i18next';

import './StatsBox.scss'

const StatsBox = (props) => {
  const { stats } = props;
  const { t } = useTranslation();
  return (
    <>
      <Header as='h3'>{ t('statistics.title') }</Header>
      <div className='stats-box'>
        <Statistic.Group size='mini'>
          <Statistic>
            <Statistic.Value>{ stats.totalGames }</Statistic.Value>
            <Statistic.Label>{ t('statistics.total_games') }</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{ stats.successRate }</Statistic.Value>
            <Statistic.Label>{ t('statistics.success_rate') }</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{ stats.currentStreak }</Statistic.Value>
            <Statistic.Label>
              <Trans i18nKey="statistics.current_streak">
                Current<br />Streak
              </Trans>
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{ stats.bestStreak }</Statistic.Value>
            <Statistic.Label>
              <Trans i18nKey="statistics.max_streak">
                Max<br />Streak
              </Trans>
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </>
  )
}

export default StatsBox;