/*
 * @Date: 2022-04-29 16:51:18
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-04-29 16:51:18
 * @FilePath: /mobile-supermarket/src/e.d.ts
 * @Author: Fullsize
 */
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_API: string;
  readonly ENV: string
  readonly VITE_BASE_TOKEN:string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}