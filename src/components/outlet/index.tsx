/*
 * @Date: 2022-03-14 16:31:18
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-03-14 16:31:19
 * @FilePath: /vite-react/src/components/a/index.tsx
 * @Author: Fullsize
 */
import React  from "react";
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <Outlet />
  );
}
export default Layout;