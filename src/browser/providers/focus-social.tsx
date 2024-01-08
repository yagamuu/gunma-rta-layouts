import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useCurrent } from '../hooks';

const allSocialNames = ['platform', 'twitter'] as const;
type FocusSocial = typeof allSocialNames[number];

const defaultValue = 'platform';

const CHANGE_INTERVAL_SEC = 30;

export const FocusSocialContext = createContext<FocusSocial>(defaultValue);
type Props = {
  children: ReactNode;
};

export const FocusSocialProvider = ({ children }: Props) => {
  const [ , runners, commentators ] = useCurrent();

  const [ existSocial, setExistSocial ] = useState<Array<FocusSocial>>([]);
  const [ focus, setFocus ] = useState<FocusSocial>(defaultValue);

  useEffect(() => {
    const socialConcat = {
      platform: [...runners, ...commentators].some(p => Boolean(p.social.nico || p.social.twitch || p.social.youtube)),
      twitter: [...runners, ...commentators].some(p => Boolean(p.social.twitter)),
    };

    setExistSocial(allSocialNames.filter(
      social => socialConcat[social],
    ));
  }, [
    runners, commentators
  ]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const length = existSocial.length;
      if (length > 0) {
        setFocus((prev) => {
          const next = (existSocial.indexOf(prev) + 1) % length;
          return existSocial[next];
        });
      }
      
    }, CHANGE_INTERVAL_SEC * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [existSocial]);

  return (
    <FocusSocialContext.Provider value={focus}>
      { children }
    </FocusSocialContext.Provider>
  );
};