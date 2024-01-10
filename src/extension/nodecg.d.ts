import {CreateNodecgInstance} from 'ts-nodecg/server';

import {ReplicantMap} from '../nodecg/replicants';
import {Configschema} from '../nodecg/generated/configschema';

export type NodeCG = CreateNodecgInstance<
	'ome-speedrun-layouts',
	Configschema,
	ReplicantMap,
	never
>;