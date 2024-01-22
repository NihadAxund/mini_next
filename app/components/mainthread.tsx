import React from 'react'
import styles from "./componentsModuleCss/mainthread.module.css"
import RepoItem from './repoItem'
import Space from './headercomponents/space'

export default function Mainthread() {
  return (
    <div className={styles.thread}>
        <Space/>
        <RepoItem/>
        <RepoItem/>
        <RepoItem/>
        <RepoItem/>
        <RepoItem/>


    </div>
  )
}