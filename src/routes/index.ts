/*
 * @Date: 2022-02-16 17:19:07
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-03-14 14:57:33
 * @FilePath: /vite-react/src/routes/index.ts
 * @Author: Fullsize
 */
import loadable from '@loadable/component';
export default [{
  path:'/',
  view:loadable(() => import(`@src/pages/home`)),
  name:'首页',
  children:[]
}]