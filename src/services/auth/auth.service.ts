import { AxiosPromise } from 'axios';

import { apiService } from '../common/api.service';

import { ILoginRequest, ITokenResponse, IUserResponse } from './types';

import { CookieUtils } from '~/utils';

export enum AUTH_ENDPOINT {
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  PROFILE = '/auth/me',
  REFRESH_TOKEN = '/auth/refresh-token'
}

export const authService = {
  isLogged: false,
  refreshTokenRequest: null as Promise<string> | AxiosPromise | null,

  login: async (data: ILoginRequest): Promise<AxiosPromise> => {
    try {
      const res = await apiService.post(AUTH_ENDPOINT.LOGIN, data);
      authService.isLogged = true;
      if (res.data) {
        authService.setToken(res.data);
      }
      return res.data;
    } catch (error) {
      authService.isLogged = false;
      return Promise.reject(error);
    }
  },

  profile: async (): Promise<IUserResponse> => {
    const res = await apiService.get(AUTH_ENDPOINT.PROFILE);
    return res.data;
  },

  logout: async (): Promise<AxiosPromise> => {
    try {
      const res = await apiService.post(AUTH_ENDPOINT.LOGOUT);
      if (res) {
        authService.isLogged = false;
        CookieUtils.remove('accessToken');
        CookieUtils.remove('refreshToken');
      }
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  isAuthenticated: () => {
    if (authService.isLogged) {
      return true;
    } else if (!!CookieUtils.get('accessToken') || !!CookieUtils.get('refreshToken')) {
      return true;
    } else {
      return false;
    }
  },

  refreshToken: (): AxiosPromise => {
    return apiService
      .post(AUTH_ENDPOINT.REFRESH_TOKEN, {
        refreshToken: CookieUtils.get('refreshToken')
      })
      .then((res) => {
        CookieUtils.set(
          'accessToken',
          res.data.accessToken,
          new Date(res.data.accessExpire * 1000)
        );
        return res.data;
      })
      .catch((error) => {
        CookieUtils.remove('accessToken');
        CookieUtils.remove('refreshToken');
        authService.isLogged = false;
        throw error;
      })
      .finally(() => {
        setTimeout(() => {
          authService.refreshTokenRequest = null;
        }, 10000);
      });
  },

  getAccessToken: () => {
    return CookieUtils.get('accessToken');
  },

  setToken: (data: ITokenResponse) => {
    CookieUtils.set('accessToken', data.accessToken, new Date(data.accessExpire * 1000));
    CookieUtils.set('refreshToken', data.refreshToken, new Date(data.refreshExpire * 1000));
  }
};
