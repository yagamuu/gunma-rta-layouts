import React from 'react';
import { render } from '../../render.js';
import { GraphicsApp } from '../graphics-app.js';
import { GameInfo } from '../components/game-info.js';
import { RunTimer } from '../components/run-timer.js';
import { Styles } from '../styles.js';

const App = () => {

  return (
    <GraphicsApp clipPath={[
      {h: 630, w: 700, x: 473, y: 298}, // game1
      {h: 630, w: 700, x: 1181, y: 370}, // game2
      {h: 270, w: 440, x: 16, y: 512} // camera
    ]}>
      <GameInfo />
      <div style={{
        position: 'absolute',
        left: '32px',
        bottom: '32px',
      }}
      >
        <RunTimer />
      </div>
      <div style={{
        position: 'absolute',
        top: '928px',
        left: '473px',
        width: '700px',
        height: '72px',
        backgroundColor: 'rgb(73, 219, 73)',
        fontSize: Styles.fonts.game.secondary,
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
        <div>
          緑版 - Green Version
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: '298px',
        left: '1181px',
        width: '700px',
        height: '72px',
        backgroundColor: 'rgb(219, 73, 73)',
        fontSize: Styles.fonts.game.secondary,
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
        <div>
          赤版 - Red Version
        </div>
      </div>
    </GraphicsApp>
  );
};

render(<App />);