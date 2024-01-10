import axios from 'axios';

type Response<T> = {
    data: T;
}

type TwitchUser = {
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
      const response = await axiosInstance.get<Response<TwitchUser>>('users');

      return response.data.data;
    }
  };
};