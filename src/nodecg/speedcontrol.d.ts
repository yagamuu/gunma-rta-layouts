import { RunDataArray } from './external/speedcontrol/runDataArray';
import { RunDataActiveRunSurrounding } from './external/speedcontrol/runDataActiveRunSurrounding';
import { CreateNodecgInstance, CreateNodecgConstructor } from 'ts-nodecg/browser';
import { Timer } from './external/speedcontrol';

type ReplicantMap = {
    runDataArray: RunDataArray,
    runDataActiveRunSurrounding: RunDataActiveRunSurrounding,
    timer: Timer
};

type SpeedcontrolReplicantName = (
    'runDataArray' |
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
  RunDataActiveRunSurrounding,
  Timer,
  SpeedcontrolReplicantName,
  SpeedcontrolInstance,
  SpeedcontrolConstructor
};
