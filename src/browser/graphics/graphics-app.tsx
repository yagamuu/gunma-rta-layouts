import './common.css';

import React, { ReactNode } from 'react';
import { ClippedBackground, RectPath } from './components/clipped-background';
import { SpeedcontrolProvider } from '../providers/speedcontrol';
import { ScAdditionProvider } from '../providers/sc-additions';
import { EventLogo } from './components/event-logo';
import { FocusSocialProvider } from '../providers/focus-social';

type Props = {
  clipPath?: RectPath[];
  hiddenOnNoInput?: boolean;
  children: ReactNode;
  setup?: boolean;
};

export const GraphicsApp = ({ clipPath, hiddenOnNoInput, children, setup }: Props) => {

  return (
    <SpeedcontrolProvider>
      <ScAdditionProvider>
        <FocusSocialProvider>
          <ClippedBackground clipPath={clipPath} hiddenOnNoInput={hiddenOnNoInput} setup={setup} />
          <EventLogo setup={setup} />
          { children }
        </FocusSocialProvider>
      </ScAdditionProvider>
    </SpeedcontrolProvider>
  );
};
