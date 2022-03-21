/*
 * @Date: 2022-02-16 14:42:15
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-03-21 16:35:39
 * @FilePath: /vite-react/src/main.tsx
 * @Author: Fullsize
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'
import Layout from '@src/components/layout'
import 'normalize.css';
import 'antd/dist/antd.css';
import './main.css';
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Layout>
        <App />
      </Layout>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
