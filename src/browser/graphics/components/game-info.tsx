import React from 'react';
import { useCurrent } from '../../hooks.js';
import { Styles } from '../styles.js';
import { Nameplate } from '../components/nameplate.js';

export const GameInfo = () => {
  const [run, runners, commentators] = useCurrent();

  return <div style={{
    position: 'absolute',
    top: '32px',
    left: '480px',
    width: '1440px',
    display: 'grid',
    gridTemplateColumns: 'auto 32px 1fr',
    gridTemplateRows: '86px 52px 96px',
    alignItems: 'center',
  }}>
    <div style={{
      gridColumn: '1 / 4',
      gridRow: '1 / 2',
      fontSize: Styles.fonts.game.primary
    }}>
      { run?.game }
    </div>
    <div style={{
      gridColumn: '1 / 4',
      gridRow: '2 / 3',
      fontSize: Styles.fonts.game.secondary
    }}>
      { run?.category }
    </div>
    <div style={{
      gridColumn: '1 / 2',
      gridRow: '3 / 4'
    }}>
      { runners.map(runner => (
        <Nameplate key={runner.id} participant={runner} />
      ))}
    </div>
    <div style={{
      display: 'flex',
      gridColumn: '3 / 4',
      gridRow: '3 / 4'
    }}>
      { commentators.map(commentator => (
        <Nameplate key={commentator.id} participant={commentator} isCommentator />
      ))}
    </div>
  </div>;
};
