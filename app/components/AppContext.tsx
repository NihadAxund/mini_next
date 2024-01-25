import { Repo } from "@/lib/types";
import React, { createContext } from "react";

type AppContextType = {
  [x: string]: any;
  repoItems: Repo[];
   AddRepo:(newRepo:Repo)=> Promise<boolean>;
};

const AppContext = createContext<AppContextType>({ repoItems: [],AddRepo: async (newRepo: Repo) =>{return false} });


export { AppContext };