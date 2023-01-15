import { useEffect } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import Key from './Key';

import './Keyboard.scss';

const KEYBOARD_MAPPING = {
  "B": "Bakerloo",
  "C": "Central",
  "I": "Circle",
  "D": "District",
  "L": "DLR",
  "E": "Elizabeth",
  "H": "Hammersmith",
  "J": "Jubilee",
  "M": "Metropolitan",
  "N": "Northern",
  "O": "Overground",
  "P": "Piccadilly",
  "V": "Victoria",
  "W": "Waterloo",
}

const NIGHT_TUBE_ROUTES = [
  "Central", "Jubilee", "Northern", "Piccadilly", "Victoria", "Overground"
];

const Keyboard = (props) => {
  const { onChar, onDelete, onEnter, isDarkMode, isNightTube, correctRoutes, presentRoutes, absentRoutes } = props;

  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter') {
        onEnter();
      } else if (e.code === 'Backspace') {
        onDelete();
      } else {
        const key = e.key.toUpperCase()
        if (KEYBOARD_MAPPING[key]) {
          if (!isNightTube || NIGHT_TUBE_ROUTES.includes(KEYBOARD_MAPPING[key])) {
            onChar(KEYBOARD_MAPPING[key]);
          }
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  const handleDelete = () => {
    onDelete();
  }

  const handleEnter = () => {
    onEnter();
  }


  return (
    <Grid centered columns={3} className='keyboard'>
      <Grid.Row>
        {
          ["Bakerloo", "Central", "Circle"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                isDarkMode={isDarkMode}
                disabled={isNightTube && !NIGHT_TUBE_ROUTES.includes(routeId)}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
      </Grid.Row>
      <Grid.Row>
        {
          ["District", "Hammersmith", "Jubilee"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                isDarkMode={isDarkMode}
                disabled={isNightTube && !NIGHT_TUBE_ROUTES.includes(routeId)}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
        </Grid.Row>
        <Grid.Row>
        {
          ["Metropolitan", "Northern", "Piccadilly"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                isDarkMode={isDarkMode}
                disabled={isNightTube && !NIGHT_TUBE_ROUTES.includes(routeId)}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
        </Grid.Row>
        <Grid.Row>
        {
          ["Victoria", "Waterloo", "Elizabeth"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                isDarkMode={isDarkMode}
                disabled={isNightTube && !NIGHT_TUBE_ROUTES.includes(routeId)}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column className='key' stretched>
            <Button onClick={handleEnter} inverted={isDarkMode}>
              Enter
            </Button>
          </Grid.Column>
        {
          ["DLR", "Overground"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                isDarkMode={isDarkMode}
                disabled={isNightTube && !NIGHT_TUBE_ROUTES.includes(routeId)}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
          <Grid.Column className='key' stretched>
            <Button onClick={handleDelete} inverted={isDarkMode}>
              Delete
            </Button>
          </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Keyboard;
