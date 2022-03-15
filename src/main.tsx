/*
 * @Date: 2022-02-16 14:42:15
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-03-15 10:02:43
 * @FilePath: /vite-react/src/main.tsx
 * @Author: Fullsize
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'
import 'antd/dist/antd.css';
import 'normalize.css';
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
