import { Label } from 'semantic-ui-react';
import { useTranslation, Trans } from 'react-i18next';

import routes from '../data/routes.json';

const classNames = (size) => {
  if (size === 'small') {
    return 'small route bullet';
  } else if (size === 'medium') {
    return 'medium route bullet';
  }
  return 'route bullet';
}

const style = (train) => {
  const { color } = train;
  let styleHash = {
    backgroundColor: `${color}`,
    color: '#ffffff',
    margin: 0,
  };

  return styleHash;
}

const innerStyle = (name, size, shortenedAlternateName) => {
  let nameLength = name.length + (shortenedAlternateName?.length || 0);
  if (size === 'small' && nameLength > 2) {
    return { fontSize: '.9em' };
  }
}

const TrainLabel = (props) => {
  const { id, size } = props;
  const { i18n } = useTranslation();
  const train = routes[id];
  const name = i18n.language.startsWith('zh') ? train.name_chinese : train.name_english;

  return (
    <Label style={style(train)} size={size}>
      {name}
    </Label>
  );
}

export default TrainLabel;