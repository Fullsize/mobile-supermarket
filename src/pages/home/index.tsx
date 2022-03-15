/*
 * @Date: 2022-02-16 17:29:43
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-03-14 15:35:43
 * @FilePath: /vite-react/src/pages/home/index.tsx
 * @Author: Fullsize
 */
import React from "react";
import { Button } from 'antd';
import aPng from '@images/1.jpg';
const Home: React.FC = () => {
  const ENV = import.meta.env
  console.log(12,ENV.MODE === 'development' ? ENV['VITE_BASE_API']?.toString() : window['base_api'])
  return (
    <>
      <div>hello vite</div>
      <img style={{ 'width': '100%' }} src={aPng} alt="" />
      <Button>123</Button>
    </>

  )
}
export default Home;