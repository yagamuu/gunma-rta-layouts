import React, { useContext } from 'react';
import { SpeedcontrolContext } from '../../providers/speedcontrol';
import { Styles } from '../styles';
import { Timer } from '../../../nodecg/speedcontrol';
import { useCurrent } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const TimeColors: Record<Timer['state'], string> = {
  stopped: '#a0a0a0',
  paused: '#a0a0a0',
  running: '#ffffff',
  finished: '#ffff00',
};

export const RunTimer = () => {
  const [ run ] = useCurrent();
  const { timer } = useContext(SpeedcontrolContext);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '64px 16px auto',
      gridTemplateRows: '60px 60px',
      alignItems: 'center',
      position: 'absolute',
      top: '20px',
      left: '1470px',
      height: '120px',
      width: '420px',
      fontSize: '32px',
    }}
    >
      <div style={{
        gridColumn: '1 / 2',
        gridRow: '1 / 3',
        fontSize: Styles.fonts.game.primary
      }}>
        <FontAwesomeIcon icon={faStopwatch} />
      </div>
      <div style={{
        gridColumn: '3 / 4',
        gridRow: '1 / 2',
        fontSize: '64px',
        color: TimeColors[timer?.state ?? 'stopped'],
      }}>
        { timer?.time }
      </div>
      <div style={{
        gridColumn: '3 / 4',
        gridRow: '2 / 3',
        fontSize: '24px',
      }}
      >
        予定タイム - { run?.estimate}
      </div>
    </div>
  );
};