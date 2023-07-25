import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { CookieUtils } from '~/utils';

export const RequestInterceptorResolve = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const accessToken = CookieUtils.get('accessToken');
  if (accessToken) {
    config.headers!.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const RequestInterceptorReject = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};
