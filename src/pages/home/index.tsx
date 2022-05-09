/*
 * @Date: 2022-02-16 17:29:43
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-05-09 15:16:04
 * @FilePath: /mobile-supermarket/src/pages/home/index.tsx
 * @Author: Fullsize
 */
import React from "react";
import Search from "@src/constainers/search";
import styles from './index.module.css';
const Home: React.FC = () => {
  return (
    <>
      <div className={styles['content']}>
        <Search isHome />
        
      </div>
    </>
  )
}
export default Home;