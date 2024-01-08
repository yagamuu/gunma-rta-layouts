import { CreateNodecgConstructor, CreateNodecgInstance } from 'ts-nodecg/browser';
import { ReplicantMap } from '../nodecg/replicants';

export type BundleNodecgInstance = CreateNodecgInstance<
  'gunma-rta-layouts',
  never,
  ReplicantMap,
  never
>;

export type BundleNodecgConstructor = CreateNodecgConstructor<
  'gunma-rta-layouts',
  never,
  ReplicantMap,
  never
>;