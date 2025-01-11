import React, { useEffect, useState } from 'react';
import { render } from '../../render';
import { GraphicsApp } from '../graphics-app';
import { useCurrent } from '../../hooks.js';
import { Styles } from '../styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCaretRight, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const OnDeck = () => {
  const [run, runners] = useCurrent();

  return <div style={{
    position: 'relative',
    top: 0,
    left: 0,
    width: '1920px',
  }}>
    <div style={{
      position: 'absolute',
      top: '750px',
      left: '120px',
      fontSize: '64px',
      color: '#c0c6ff',
    }}>NEXT</div>
    <div style={{
      position: 'absolute',
      top: '840px',
      left: '272px',
      height: '120px',
      width: '1440px',
      paddingLeft: '40px',
      fontSize: Styles.fonts.setup.primary,
    }}>{run?.game}</div>
    <div style={{
      position: 'absolute',
      top: '974px',
      left: '272px',
      height: '60px',
      width: '960px',
      paddingLeft: '80px',
      fontSize: '36px',
    }}>{ run?.category}
      <span> - </span>
      <FontAwesomeIcon icon={faStopwatch} style={{ marginRight: '8px' }} />{run?.estimate}</div>
    <div style={{
      position: 'absolute',
      top: '974px',
      left: '1364px',
      height: '90px',
      width: '480px',
      paddingLeft: '40px',
      fontSize: '36px',
    }}>
      <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '8px'}} />
      { runners.map(r => r.name).join(', ')}
    </div>
  </div>;
};

const App = () => {

  return (
    <GraphicsApp setup clipPath={[
      {h: 810, w: 1440, x: 462, y: 18}
    ]}>
      <OnDeck />
    </GraphicsApp>
  );
};

render(<App />);