"use client";
import React, { useState, useEffect, createContext } from "react";
import MainHeader from "./mainHeader";
import Mainthread from "./mainthread";
import { Repo } from "@/lib/types";
import { AppContext } from "./AppContext";
async function Myfunction(): Promise<Repo[]> {
  const res = await fetch("http://localhost:3000/api/repos");
  const repoItems = await res.json();
  return repoItems.arr;
}

type userContextType = {
  repoItems: Repo[];
};


export default function MainPage() {
    const [repoItems, setRepoItems] = useState<Repo[]>([]);
    async function AddRepo(newRepo:Repo) {
        setRepoItems(await Myfunction());
        return false;
    }
    const userContextDefault: userContextType = {
    repoItems: repoItems,
  };
  //NOTE*   const AppContext = createContext<userContextType | undefined>(undefined);
  //const AppContext = createContext(userContextDefault);
  useEffect(() => {
    async function asynfunction() {
      setRepoItems(await Myfunction());
    }
    asynfunction();
  }, []);
  return (
    <AppContext.Provider value={{ repoItems, AddRepo }}>
      <MainHeader></MainHeader>

      <Mainthread></Mainthread>
    </AppContext.Provider>
  );
}
