/*
 * @Date: 2022-02-16 17:19:07
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-04-29 16:22:39
 * @FilePath: /mobile-supermarket/src/routes/index.ts
 * @Author: Fullsize
 */
import loadable from '@loadable/component';
export default [
  {
    path: '/',
    view: loadable(() => import(`@src/pages/home`)),
    name: '首页',
    children: []
  },
  // {
  //   path: '/message',
  //   view: loadable(() => import(`@src/pages/message`)),
  //   name: '首页',
  //   children: []
  // }
]