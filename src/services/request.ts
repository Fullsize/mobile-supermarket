/*
 * @Date: 2022-03-14 15:12:02
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-03-14 16:27:32
 * @FilePath: /vite-react/src/services/request.ts
 * @Author: Fullsize
 */
import axios from "axios";
const ENV = import.meta.env
declare global {
  interface Window { base_api: string; }
}
const instance = axios.create({
  // baseURL: ENV.MODE === 'development' ? ENV['VITE_BASE_API']?.toString() : window['base_api'],
  baseURL: ENV['VITE_BASE_API'],
  timeout: 15000,
  headers: {
    // '	Cache-Control': 'max-age=0',
  }
});

// 请求处理
instance.interceptors.request.use(
  requestConfig => {

    return requestConfig
  },
  error => Promise.reject(error)
);
// 返回处理
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Promise.reject(error);
  }
);
export default instance;