import React from 'react';
import { render } from '../../render.js';
import { GraphicsApp } from '../graphics-app.js';
import { GameInfo2p } from '../components/game-info2p.js';
import { FinishTime } from '../components/finish-time.js';
import { CommentatorOneline } from '../components/commentator-oneline.js';

const App = () => {
  return (
    <GraphicsApp clipPath={[
      { h: 531, w: 944, x: 10, y: 523 }, // ゲーム1
      {h: 531, w: 944, x: 966, y: 523}, // ゲーム2
      {h: 252, w: 448, x: 937, y: 165} // カメラ
    ]}>
      <GameInfo2p />
      <div style={{
        position: 'absolute',
        top: '371px',
        left: '463px',
        height: '60px',
        width: '448px',
        fontSize: '36px',
        color: '#ffff00'
      }}>
        <FinishTime index={0} />
      </div>
      <div style={{
        position: 'absolute',
        top: '371px',
        left: '1451px',
        height: '60px',
        width: '448px',
        fontSize: '36px',
        color: '#ffff00'
      }}>
        <FinishTime index={1} />
      </div>
      <div style={{
        position: 'absolute',
        top: '444px',
        left: '72px',
        height: '60px',
        width: '880px',
        fontSize: '36px',
      }}>
        <CommentatorOneline />
    </div>;
    </GraphicsApp>
  );
};

render(<App />);