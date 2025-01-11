import React from 'react';
import { useCurrent } from '../../hooks.js';
import { Nameplate } from '../components/nameplate.js';
import { RunTimer } from '../components/run-timer.js';

export const GameInfo = () => {
  const [run, runners, commentators] = useCurrent();

  return <div>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '480px',
      height: '90px',
      width: '1440px',
      fontSize: '44px',
    }}>
      { run?.game }
    </div>
    <div style={{
      position: 'absolute',
      top: '100px',
      left: '520px',
      height: '60px',
      width: '880px',
      fontSize: '36px',
    }}>
      { run?.category }
    </div>
    <div style={{
      position: 'absolute',
      top: '676px',
      left: '10px',
      height: '192px',
      width: '448px',
      fontSize: '36px',
    }}>
      { runners.map(runner => (
        <Nameplate key={runner.id} participant={runner} />
      ))}
    </div>
    <div style={{
      position: 'absolute',
      top: '872px',
      left: '10px',
      height: '192px',
      width: '448px',
      fontSize: '36px',
    }}>
      { commentators.map(commentator => (
        <Nameplate key={commentator.id} participant={commentator} isCommentator />
      ))}
    </div>;
    <RunTimer />
  </div>;
};
