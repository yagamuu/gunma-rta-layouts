import axios from 'axios';

type Response<T> = {
    data: T;
}

type TwitchUser = {
    id: string;
    login: string;
}

type TwitchGame = {
  id: string;
}

export const twitch = ({clientId, bearer}: {clientId: string, bearer: string}) => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: {
      'Authorization': `Bearer ${bearer}`,
      'Client-Id': clientId
    }
  });

  return {
    getMe: async () => {
      const response = await axiosInstance.get<Response<TwitchUser[]>>('users');

      return response.data.data?.[0];
    },
    modifyChannelInformation: async ({broadcasterId, title, gameId}: { broadcasterId: string, title: string, gameId: string}) => {
      await axiosInstance.patch<Response<null>>(`channels?broadcaster_id=${broadcasterId}`, {
        title,
        game_id: gameId
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
    },
    searchGames: async (query: string): Promise<TwitchGame | undefined> => {
      const response = await axiosInstance.get<Response<[] | [TwitchGame]>>('search/categories', {
        params: { query },
      });

      return response.data.data[0];
    }
  };
};