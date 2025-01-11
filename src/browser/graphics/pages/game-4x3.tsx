import React from 'react';
import { render } from '../../render.js';
import { GraphicsApp } from '../graphics-app.js';
import { GameInfo } from '../components/game-info.js';

const App = () => {
  return (
    <GraphicsApp clipPath={[
      {h: 900, w: 1200, x: 594, y: 172}, // ゲーム
      {h: 252, w: 448, x: 10, y: 418} // カメラ
    ]}>
      <GameInfo />
    </GraphicsApp>
  );
};

render(<App />);