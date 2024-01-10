import { NodeCG } from './nodecg';
import twitch from './twitch';

export default (nodecg: NodeCG) => {
    
  const logger = new nodecg.Logger('initialize');

  try {
    twitch(nodecg);
  } catch (e) {
    logger.error(JSON.stringify(e));
  }
};