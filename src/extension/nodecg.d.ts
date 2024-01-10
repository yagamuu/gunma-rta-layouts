import {CreateNodecgInstance} from 'ts-nodecg/server';

import {ReplicantMap} from '../nodecg/replicants';
import {Configschema} from '../nodecg/generated/configschema';
import { SpeedcontrolReplicantMap } from '../nodecg/speedcontrol';

export type SpeedcontrolInstance = CreateNodecgInstance<
'nodecg-speedcontrol',
never,
SpeedcontrolReplicantMap,
never,
true
>;

export type NodeCG = CreateNodecgInstance<
	'gunma-rta-layouts',
	Configschema,
	ReplicantMap,
	never
>;