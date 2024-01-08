import { SpeedcontrolConstructor, SpeedcontrolInstance } from '../nodecg/speedcontrol';
import { SpeedcontrolAdditionsInstance } from '../nodecg/speedcontrol-additions';
import { BundleNodecgInstance, BundleNodecgConstructor } from './nodecg';

declare global {
  const nodecg: BundleNodecgInstance | SpeedcontrolInstance | SpeedcontrolAdditionsInstance;
  const NodeCG: BundleNodecgConstructor | SpeedcontrolConstructor | SpeedcontrolConstructor;
}