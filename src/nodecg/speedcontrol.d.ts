import { RunDataArray } from './external/speedcontrol/runDataArray';
import { RunDataActiveRun } from './external/speedcontrol/runDataActiveRun';
import { RunDataActiveRunSurrounding } from './external/speedcontrol/runDataActiveRunSurrounding';
import { CreateNodecgInstance, CreateNodecgConstructor } from 'ts-nodecg/browser';
import { Timer } from './external/speedcontrol';

type ReplicantMap = {
    runDataArray: RunDataArray,
    runDataActiveRun: RunDataActiveRun,
    runDataActiveRunSurrounding: RunDataActiveRunSurrounding,
    timer: Timer
};

type SpeedcontrolReplicantName = (
    'runDataArray' |
    'runDataActiveRun' |
    'runDataActiveRunSurrounding' |
    'timer'
);

type SpeedcontrolInstance = CreateNodecgInstance<
  'nodecg-speedcontrol',
  never,
  ReplicantMap,
  never,
  true
>

type SpeedcontrolConstructor = CreateNodecgConstructor<
  'nodecg-speedcontrol',
  never,
  ReplicantMap,
  never,
  true
>

export {
  RunDataArray,
  RunDataActiveRun,
  RunDataActiveRunSurrounding,
  Timer,
  SpeedcontrolReplicantName,
  SpeedcontrolInstance,
  SpeedcontrolConstructor
};
