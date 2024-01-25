'use client'
import React from 'react'
import styles from './componentsModuleCss/repo.module.css';
import { Repo } from "../../lib/types";
import 'animate.css';
export default function RepoItem({repo}: {repo: Repo}) {
  //alert(repo)
  return (
    <div className={`${styles.Repobody} animate__animated animate__backInRight`}    >
        <img src={repo.imageUrl} alt="Large Image" />
        <div className={styles.intro}>
            <p>{repo.name}</p>
        </div>
    </div>
  )
}
