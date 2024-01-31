'use client'
import React, { useEffect, useState,useContext  } from "react";
import styles from "./componentsModuleCss/mainthread.module.css";
import RepoItem from "./repoItem";
import Space from "./headercomponents/space";
import { Repo } from "../../lib/types";
import { AppContext } from "./AppContext";

// async function Myfunction(): Promise<Repo[]> {
//   const res = await fetch("http://localhost:3000/api/repos");
//   const repoItems = await res.json();
//   return repoItems.arr;
// }

export default function Mainthread() {
  const { repoItems,isHeader,ChangeIsHeader } = useContext(AppContext);
  // useEffect(() => {
  //   async function asynfunction() {
  //     setRepoItems(await Myfunction());
  //   }
  //   asynfunction();
  // },[])
  function onscrolls(e:React.UIEvent<HTMLDivElement>) {
    let data = e.currentTarget.scrollTop;
    if(!isHeader&&data>300){
      ChangeIsHeader(!isHeader);
    }
    else if(data<300&&isHeader){
      ChangeIsHeader(!isHeader);
    }
    //console.log(isHeader)
    //console.log(e.currentTarget.scrollTop)
  }

  console.log(repoItems.length)
  return (
    <div className={styles.thread} onScroll={onscrolls}>
      <Space />

      {Array.isArray(repoItems) ? (
        repoItems.map((item: Repo) => <RepoItem key={item.id} repo={item} />)
      ) : (
        <p style={{ fontSize: "5vh", color: "white", width: "100%", textAlign: "center", backgroundColor: "rgba(245, 245, 245, 0.485)", height: "7%", padding: "10px", paddingTop: "15px" }}>NOT FOUND ):</p>
      )}
    </div>
  );
}
