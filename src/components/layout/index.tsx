/*
 * @Date: 2022-03-21 16:22:27
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-04-29 16:51:30
 * @FilePath: /mobile-supermarket/src/components/layout/index.tsx
 * @Author: Fullsize
 */
import React, { useEffect, useState } from "react";
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UserOutline,
  ShopbagOutline,
} from 'antd-mobile-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './index.module.css';
const toUrl: any = {
  'home': '/',
  'message': '/message',
  'personalCenter': '/',
  'shopping': '/shopping'
}
const Layout: React.FC = (props) => {
  const [state, setState] = useState('home');
  const navigate = useNavigate();
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
      key: 'shopping',
      title: '购物袋',
      icon: <ShopbagOutline />,
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]
  useEffect(() => {
    navigate(toUrl[state] ?? '/')
  }, [state])
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