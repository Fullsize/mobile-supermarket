/*
 * @Date: 2022-05-09 14:39:41
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-05-09 15:02:05
 * @FilePath: /mobile-supermarket/src/constainers/search/index.tsx
 * @Author: Fullsize
 */
import React from "react";
import { LeftOutline } from 'antd-mobile-icons';
import { Input } from 'antd-mobile'
import styles from './index.module.css';
interface Props {
  isHome?: boolean;
}
const Search: React.FC<Props> = (props) => {
  return (
    <div className={styles['constainer']}>
      {!props.isHome && <LeftOutline className={styles['icon']} />}
      <Input className={styles['input']} />
    </div>
  )
}
export default Search;