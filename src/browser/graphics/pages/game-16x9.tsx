import React from 'react';
import { render } from '../../render.js';
import { GraphicsApp } from '../graphics-app.js';
import '../adobe-font.js';
import { GameInfo } from '../components/game-info.js';
import { RunTimer } from '../components/run-timer.js';

const App = () => {

  return (
    <GraphicsApp clipPath={[
      {h: 792, w: 1424, x: 481, y: 282},
      {h: 270, w: 440, x: 16, y: 512}
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
    </GraphicsApp>
  );
};

render(<App />);