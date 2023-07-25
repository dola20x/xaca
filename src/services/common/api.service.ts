import axios from 'axios';
import moment from 'moment-timezone';

import { RequestInterceptorReject, RequestInterceptorResolve } from './request.interceptor';
import { ResponseInterceptorFulfilled, ResponseInterceptorRejected } from './response.interceptor';

const timezone = moment.tz.guess();

export const apiService = (() => {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_DOMAIN}`,
    headers: { 'Content-Type': 'application/json', 'X-Custom-Timezone': timezone }
  });

  instance.interceptors.request.use(RequestInterceptorResolve, RequestInterceptorReject);
  instance.interceptors.response.use(ResponseInterceptorFulfilled, ResponseInterceptorRejected);

  return instance;
})();
