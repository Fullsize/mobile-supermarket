/*
 * @Date: 2022-03-21 16:22:27
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-04-29 16:22:57
 * @FilePath: /mobile-supermarket/src/components/layout/index.tsx
 * @Author: Fullsize
 */
import React, { useEffect, useState } from "react";
import { Badge, TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
  ShopbagOutline,
} from 'antd-mobile-icons';
import styles from './index.module.css';

const Layout: React.FC = (props) => {
  const [state, setState] = useState('home');

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
    },

    {
      key: 'message',
      title: '我的消息',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
    },
    {
      key: 'todo',
      title: '购物袋',
      icon: <ShopbagOutline />,
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]
  useEffect(()=>{
    console.log(state)
  },[state])
  return (
    <div className={styles['constainer']}>
      <div className={styles['content']}>
        {props.children}
      </div>
      <div className={styles['footer']}>
        <TabBar onChange={setState}>
          {tabs.map(item => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </TabBar>
      </div>
    </div>
  )
}
export default Layout;