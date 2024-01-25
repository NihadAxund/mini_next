import React from 'react'
import styles  from "./headerbutton.module.css";

interface handlefunction {
  SubmitRepo: () => void;
}
export default function AddRepository({SubmitRepo}:handlefunction) {
  return (
    <button className={styles.AddRepo_btn} onClick={SubmitRepo}>
        + ADD REPO
    </button>
  )
}
