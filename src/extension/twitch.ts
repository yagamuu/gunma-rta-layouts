import { SpeedcontrolInstance } from '../nodecg/speedcontrol';
import { twitch } from './lib/twitch';
import { NodeCG } from './nodecg';
import clone from 'lodash.clone';

export default (nodecg: NodeCG) => {
  const logger = new nodecg.Logger('twitch');
  const activeRunsRep = (nodecg as unknown as SpeedcontrolInstance).Replicant('runDataActiveRunSurrounding', 'nodecg-speedcontrol');
  const runDataRep = (nodecg as unknown as SpeedcontrolInstance).Replicant('runDataArray', 'nodecg-speedcontrol');

  const config = nodecg.bundleConfig.twitch;

  if (!config) {
    logger.warn('Config.twitch is not defined. Twitch integration doesn\'t work.');
    return;
  }

  const twitchApi = twitch({ clientId: config.client_id, bearer: config.bearer });

  twitchApi.getMe()
    .then((user) => {
      logger.info(`Twitch integration works with user[${user.login}].`);

      activeRunsRep.on('change', async (newVal) => {
        if (!runDataRep.value) {
          logger.warn('RunData is undefined. Skip to modify channel information.');
          return;
        }

        const currentRun = clone(runDataRep.value.find((r) => r.id === newVal.current));

        if (!currentRun) {
          logger.warn('Current run is not found. Skip to modify channel information.');
        }
        try {
          const game = await twitchApi.searchGames(currentRun?.game ?? 'Games + Demos');
          const title = `${currentRun?.game} [RTAinGunma24-ISOBE] #RTAinGunma #LANらん群馬`;
          twitchApi.modifyChannelInformation({
            broadcasterId: user.id,
            title,
            gameId: game?.id ?? '',
          })
            .then(() => {
              logger.info(`Success to modify channel, title=${title}, gameId=33214`);
            })
            .catch((e) => {
              logger.warn('Failed to modify channel.');
              logger.warn(JSON.stringify(e));
            });
        } catch (e) {
          logger.warn(JSON.stringify(e));
        }
      });
    })
    .catch(() => {
      logger.warn('Failed to request to Twitch API for some reason. Check your bearer token configured to bundle.');
    });
};
