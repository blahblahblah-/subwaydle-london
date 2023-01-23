import { useEffect, useState } from 'react';
import { Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const formatNumber = (number) => {
  const numStr = Math.floor(number).toString();
  if (numStr.length === 1) {
    return '0' + numStr;
  }
  return numStr;
}

const Countdown = () => {
  const { t } = useTranslation();
  const midnight = new Date();
  midnight.setHours(24);
  midnight.setMinutes(0);
  midnight.setSeconds(0);
  midnight.setMilliseconds(0);

  const [countDown, setCountDown] = useState(
    (midnight - Date.now()) / 1000
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((midnight - Date.now()) / 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [midnight]);

  return (
    <Header as='h5'>
      { t('solution.countdown') } { formatNumber(countDown/3600) }:{ formatNumber(countDown/60 % 60) }:{ formatNumber(countDown % 60) }
    </Header>
  );
}

export default Countdown;
