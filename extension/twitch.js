"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twitch_1 = require("./lib/twitch");
const lodash_clone_1 = __importDefault(require("lodash.clone"));
exports.default = (nodecg) => {
    const logger = new nodecg.Logger('twitch');
    const activeRunsRep = nodecg.Replicant('runDataActiveRunSurrounding', 'nodecg-speedcontrol');
    const runDataRep = nodecg.Replicant('runDataArray', 'nodecg-speedcontrol');
    const config = nodecg.bundleConfig.twitch;
    if (!config) {
        logger.warn('Config.twitch is not defined. Twitch integration doesn\'t work.');
        return;
    }
    const twitchApi = (0, twitch_1.twitch)({ clientId: config.client_id, bearer: config.bearer });
    twitchApi.getMe()
        .then((user) => {
        logger.info(`Twitch integration works with user[${user.login}].`);
        activeRunsRep.on('change', (newVal) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            if (!runDataRep.value) {
                logger.warn('RunData is undefined. Skip to modify channel information.');
                return;
            }
            const currentRun = (0, lodash_clone_1.default)(runDataRep.value.find((r) => r.id === newVal.current));
            if (!currentRun) {
                logger.warn('Current run is not found. Skip to modify channel information.');
            }
            try {
                const game = yield twitchApi.searchGames((_a = currentRun === null || currentRun === void 0 ? void 0 : currentRun.game) !== null && _a !== void 0 ? _a : 'Games + Demos');
                const title = `${currentRun === null || currentRun === void 0 ? void 0 : currentRun.game} [RTAinGunma24-ISOBE] #RTAinGunma #LANらん群馬`;
                twitchApi.modifyChannelInformation({
                    broadcasterId: user.id,
                    title,
                    gameId: (_b = game === null || game === void 0 ? void 0 : game.id) !== null && _b !== void 0 ? _b : '',
                })
                    .then(() => {
                    logger.info(`Success to modify channel, title=${title}, gameId=33214`);
                })
                    .catch((e) => {
                    logger.warn('Failed to modify channel.');
                    logger.warn(JSON.stringify(e));
                });
            }
            catch (e) {
                logger.warn(JSON.stringify(e));
            }
        }));
    })
        .catch(() => {
        logger.warn('Failed to request to Twitch API for some reason. Check your bearer token configured to bundle.');
    });
};
