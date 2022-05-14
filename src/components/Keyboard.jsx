import { useEffect } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import Key from './Key';
import routes from '../data/routes.json';

import './Keyboard.scss';

const Keyboard = (props) => {
  const { onChar, onDelete, onEnter, correctRoutes, presentRoutes, absentRoutes } = props;

  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter') {
        onEnter();
      } else if (e.code === 'Backspace') {
        onDelete();
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && routes[key]) {
          onChar(key);
        } else if (key === 'S') {
          onChar('GS');
        } else if (key === 'K') {
          onChar('FS');
        } else if (key === 'I') {
          onChar('SI');
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
          ["KTL", "TWL", "ISL"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
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
          ["TCL", "DRL", "AEL"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
        </Grid.Row>
        <Grid.Row columns={2}>
        {
          ["TKL", "SIL"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
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
            <Button onClick={handleEnter}>
              Enter
            </Button>
          </Grid.Column>
        {
          ["EAL", "TML"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
          <Grid.Column className='key' stretched>
            <Button onClick={handleDelete}>
              Delete
            </Button>
          </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Keyboard;
