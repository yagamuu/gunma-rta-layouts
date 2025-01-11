import React from 'react';
import { render } from '../../render.js';
import { GraphicsApp } from '../graphics-app.js';
import { GameInfo2p } from '../components/game-info2p.js';
import { FinishTime } from '../components/finish-time.js';
import { CommentatorOneline } from '../components/commentator-oneline.js';

const App = () => {
  return (
    <GraphicsApp clipPath={[
      { h: 645, w: 860, x: 63, y: 431 }, // ゲーム1
      {h: 645, w: 860, x: 994, y: 431}, // ゲーム2
      {h: 252, w: 448, x: 937, y: 165} // カメラ
    ]}>
      <GameInfo2p />
      <div style={{
        position: 'absolute',
        top: '431px',
        left: '475px',
        height: '60px',
        width: '448px',
        fontSize: '36px',
        color: '#ffff00',
        textAlign: 'end'
      }}>
        <FinishTime index={0} />
      </div>
      <div style={{
        position: 'absolute',
        top: '431px',
        left: '1406px',
        height: '60px',
        width: '448px',
        fontSize: '36px',
        color: '#ffff00',
        textAlign: 'end'
      }}>
        <FinishTime index={1} />
      </div>
      <div style={{
        position: 'absolute',
        top: '366px',
        left: '21px',
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