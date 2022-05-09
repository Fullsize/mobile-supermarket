/*
 * @Date: 2022-02-16 17:29:43
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-05-09 14:54:04
 * @FilePath: /mobile-supermarket/src/pages/home/index.tsx
 * @Author: Fullsize
 */
import React from "react";
import Search from "@src/constainers/search";
const Home: React.FC = () => {
  return (
    <>
      <div style={{ 'width': '100%' }}>
        <Search isHome />
      </div>
    </>
  )
}
export default Home;