import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { RunDataArray, RunDataActiveRun, SpeedcontrolInstance, SpeedcontrolReplicantName, Timer } from '../../nodecg/speedcontrol';
import clone from 'lodash.clone';

export const SpeedcontrolContext = createContext<{
  runDataArray: RunDataArray;
  runDataActiveRun: RunDataActiveRun;
  timer: Timer|null;
}>({
  runDataArray: [],
  runDataActiveRun: {
    id: '',
    customData: {},
    teams: [],
  },
  timer: null,
});

type Props = {
  children: ReactNode;
};

export const SpeedcontrolProvider = ({ children }: Props) => {

  const [runDataArray, setRunDataArray] = useState<RunDataArray>([]);
  const [runDataActiveRun, setRunDataActiveRun] = useState<RunDataActiveRun>({} as RunDataActiveRun);
  const [ timer, setTimer ] = useState<Timer|null>(null);
  
  
  useEffect(() => {
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mutations: Array<[SpeedcontrolReplicantName, React.Dispatch<any>]> = [
      ['runDataArray', setRunDataArray],
      ['runDataActiveRun', setRunDataActiveRun],
      ['timer', setTimer],
    ];

    mutations.forEach(([name, mutator]) => {
      const replicant = (nodecg as SpeedcontrolInstance).Replicant(name, 'nodecg-speedcontrol');
    
      replicant.on('change', (newVal) => {
        mutator(clone(newVal));
      });
    });
  }, []);
  
  return (
    <SpeedcontrolContext.Provider value={{
      runDataArray,
      runDataActiveRun,
      timer,
    }}>
      { children }
    </SpeedcontrolContext.Provider>
  );
};