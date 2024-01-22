import React from 'react'
import styles from './componentsModuleCss/repo.module.css';
export default function RepoItem() {
  return (
    <div className={styles.Repobody}>
        <img src="https://avatars.githubusercontent.com/u/113647098?v=4" alt="Large Image" />
        <div className={styles.intro}>
            <p>AAAA</p>
        </div>
    </div>
  )
}
