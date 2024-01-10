"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twitch_1 = __importDefault(require("./twitch"));
exports.default = (nodecg) => {
    const logger = new nodecg.Logger('initialize');
    try {
        (0, twitch_1.default)(nodecg);
    }
    catch (e) {
        logger.error(JSON.stringify(e));
    }
};
