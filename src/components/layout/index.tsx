/*
 * @Date: 2022-03-21 16:22:27
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-03-21 16:32:04
 * @FilePath: /vite-react/src/components/layout/index.tsx
 * @Author: Fullsize
 */
import React from "react";
import styles from './index.module.css';
const Layout: React.FC = (props) => {
  return (
    <div className={styles['constainer']}>
      <div className={styles['content']}>
        {props.children}
      </div>
      <div className={styles['footer']}>
        11313
      </div>
    </div>
  )
}
export default Layout;