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
exports.twitch = void 0;
const axios_1 = __importDefault(require("axios"));
const twitch = ({ clientId, bearer }) => {
    const axiosInstance = axios_1.default.create({
        baseURL: 'https://api.twitch.tv/helix/',
        headers: {
            'Authorization': `Bearer ${bearer}`,
            'Client-Id': clientId
        }
    });
    return {
        getMe: () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const response = yield axiosInstance.get('users');
            return (_a = response.data.data) === null || _a === void 0 ? void 0 : _a[0];
        }),
        modifyChannelInformation: ({ broadcasterId, title, gameId }) => __awaiter(void 0, void 0, void 0, function* () {
            yield axiosInstance.patch(`channels?broadcaster_id=${broadcasterId}`, {
                title,
                game_id: gameId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        }),
        searchGames: (query) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axiosInstance.get('search/categories', {
                params: { query },
            });
            return response.data.data[0];
        })
    };
};
exports.twitch = twitch;
