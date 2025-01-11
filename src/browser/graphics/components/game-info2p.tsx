import React, { useContext } from 'react';
import { useCurrent } from '../../hooks.js';
import { SpeedcontrolContext } from '../../providers/speedcontrol';
import { Nameplate } from './nameplate.js';
import { NameplateOneline } from './nameplate-oneline.js';
import { RunTimer } from './run-timer.js';

export const GameInfo2p = () => {
  const [run, runners, commentators] = useCurrent();
  const { timer, runDataActiveRun } = useContext(SpeedcontrolContext);
  const runner1 = runners[0];
  const runner2 = runners[1];
  
  const teams1Id = runDataActiveRun.teams?.[0]?.id ?? '';
  const teams2Id = runDataActiveRun.teams?.[1]?.id ?? '';

  const finishTime1 = timer?.teamFinishTimes?.[teams1Id] ?? {};
  const finishTime2 = timer?.teamFinishTimes?.[teams2Id] ?? {};

  return <div>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '480px',
      height: '90px',
      width: '1440px',
      fontSize: '38px',
    }}>
      { run?.game }
    </div>
    <div style={{
      position: 'absolute',
      top: '100px',
      left: '520px',
      height: '60px',
      width: '880px',
      fontSize: '32px',
    }}>
      { run?.category }
    </div>
    <div style={{
      position: 'absolute',
      top: '165px',
      left: '454px',
      height: '192px',
      width: '448px',
      fontSize: '36px',
    }}>
      { runner1 &&
        <Nameplate key={runner1.id} participant={runner1} />
      }
    </div>
    <div style={{
      position: 'absolute',
      top: '165px',
      left: '1442px',
      height: '192px',
      width: '448px',
      fontSize: '36px',
    }}>
      { runner2 &&
        <Nameplate key={runner2.id} participant={runner2} />
      }
    </div>
    <RunTimer />
  </div>;
};
