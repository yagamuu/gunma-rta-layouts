import React, { useEffect, useState } from 'react';
import { render } from '../../render';
import { GraphicsApp } from '../graphics-app';
import '../adobe-font.js';
import { useCurrent } from '../../hooks.js';
import { Styles } from '../styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCaretRight, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const OnDeck = () => {
  const [run, runners] = useCurrent();

  return <div style={{
    position: 'absolute',
    top: '860px',
    left: '480px',
    width: '1440px',
    display: 'grid',
    gridTemplateColumns: '160px 1fr 16px',
    gridTemplateRows: '80px auto 8px auto',
    alignItems: 'center'
  }}>
    <div style={{
      gridColumn: '1 / 2',
      gridRow: '1 / 5',
      fontSize: Styles.fonts.setup.secondary,
      justifySelf: 'start',
    }}>Next <FontAwesomeIcon icon={faCaretRight} /></div>
    <div style={{
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
      fontSize: Styles.fonts.setup.primary,
    }}>{ run?.game }</div>
    <div style={{
      gridColumn: '2 / 3',
      gridRow: ' 2 / 3',
      fontSize: Styles.fonts.setup.secondary,
    }}>{ run?.category}
      <span> - </span>
      <FontAwesomeIcon icon={faStopwatch} style={{ marginRight: '8px'}} />{ run?.estimate }</div>
    <div style={{
      gridColumn: '2 / 3',
      gridRow: '4 / 5',
      fontSize: Styles.fonts.setup.secondary,
      paddingLeft: '32px'
    }}>
      <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '8px'}} />
      { runners.map(r => r.name).join(', ')}
    </div>
  </div>;
};

const TransitionText = () => {
  const transitionTexts = ['', '.', '..', '...'] as const;
  
  const [transition, setTransition] = useState<typeof transitionTexts[number]>('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTransition((prev) => {
        const nextIndex = (transitionTexts.indexOf(prev) + 1) % transitionTexts.length;
        return transitionTexts[nextIndex];
      });
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: '64px',
      left: '1640px',
      width: '1280px',
      height: '64px',
      fontSize: Styles.fonts.setup.secondary,
    }}>
          準備中 { transition }
    </div>);
};

const App = () => {

  return (
    <GraphicsApp setup clipPath={[
      {h: 720, w: 1280, x: 608, y: 128}
    ]}>
      <TransitionText />
      <OnDeck />
    </GraphicsApp>
  );
};

render(<App />);