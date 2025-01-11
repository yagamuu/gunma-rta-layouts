import React, { useContext } from 'react';
import { SpeedcontrolContext } from '../../providers/speedcontrol';

export const FinishTime = ({index}: {index: number}) => {
  const { timer, runDataActiveRun } = useContext(SpeedcontrolContext);  
  const teamsId = runDataActiveRun.teams?.[index]?.id ?? '';
  const finishTime = timer?.teamFinishTimes?.[teamsId] ?? {};

  return (<div>
    { finishTime.time }
  </div>);
};
