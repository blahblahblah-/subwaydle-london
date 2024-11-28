import { Label } from 'semantic-ui-react';
import { useTranslation, Trans } from 'react-i18next';

import routes from '../data/routes.json';

const TUBE_ROUTES = [
  "Bakerloo",
  "Central",
  "Circle",
  "District",
  "Hammersmith",
  "Jubilee",
  "Metropolitan",
  "Northern",
  "Piccadilly",
  "Victoria",
  "Waterloo",
]

const style = (train) => {
  const { id, color, text_color } = train;
  let styleHash = {
    backgroundColor: `${color}`,
    color: text_color || '#ffffff',
    margin: 0,
  };

  if (!TUBE_ROUTES.includes(id)) {
    styleHash = {
      background: `linear-gradient(to bottom, ${color}, ${color} 20%, #ffffff 20%, #ffffff 80%, ${color} 80%, ${color})`,
      color: '#000000',
      margin: 0,
    };
  }

  return styleHash;
}

const TrainLabel = (props) => {
  const { id } = props;
  const { i18n } = useTranslation();
  const train = routes[id];
  const name = train.name;
  const size = 'small';

  return (
    <Label style={style(train)} size={size}>
      {name}
    </Label>
  );
}

export default TrainLabel;