import React from 'react';
import { render } from '../../render.js';
import { GraphicsApp } from '../graphics-app.js';
import '../adobe-font.js';
import { GameInfo } from '../components/game-info.js';
import { RunTimer } from '../components/run-timer.js';

const App = () => {

  return (
    <GraphicsApp clipPath={[
      {h: 810, w: 900, x: 862, y: 255}, // game
      {h: 315, w: 560, x: 160, y: 460} // camera
    ]}>
      <GameInfo />
      <div style={{
        position: 'absolute',
        left: '228px',
        bottom: '64px',
      }}
      >
        <RunTimer />
      </div>
    </GraphicsApp>
  );
};

render(<App />);