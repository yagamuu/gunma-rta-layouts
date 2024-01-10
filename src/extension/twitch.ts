import { twitch } from './lib/twitch';
import { NodeCG } from './nodecg';


export default (nodecg: NodeCG) => {
  const logger = new nodecg.Logger('twitch');

  const config = nodecg.bundleConfig.twitch;

  if (!config) {
    logger.warn('Config.twitch is not defined. Twitch integration does\'n t work.');
    return;
  }

  const twitchApi = twitch({ clientId: config.client_id, bearer: config.bearer });

  twitchApi.getMe().then();
};