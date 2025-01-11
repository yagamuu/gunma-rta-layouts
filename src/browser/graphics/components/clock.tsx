import React, { useEffect, useState } from 'react';

export const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const hour = now.getHours().toString().padStart(2, '0');
      const minute = now.getMinutes().toString().padStart(2, '0');

      setTime(`${hour}:${minute}`);
    }, 1000);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      left: '77px',
      top: '6px',
    }}>
      <div style={{
        fontSize: '48px',
        color: 'black',
        width: '300px',
        height: '60px',
        fontWeight: 'bold',
        backgroundColor: '#c0c6ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {time}
      </div>
    </div>
  );
};