import { NonDirectionalSuspenseListProps } from "react"
import { Repo } from "./types";

let repos: Repo[] = [];

export const getRepos = ()=> repos;

export const addRepo = (repo:Repo)=>{
    if(!repo) return null;
    if (!repos) {
        repo.id = 0;
    }
    else {
        repo.id = repos.length;
    }
    repos.push(repo);
    return  repo;
}

export const deleteRepoforId = (id:number) =>{
    if(repos&&repos.length>0){
        repos = repos.filter((repo)=>repo.id!==id);
    }
    
}


export const getById = (id:number)=>{
    if(!repos||repos.length==0){
        return null;
    }
    let data = repos.find((post)=> post.id == id);
    if(!data) 
        return null;
    return data;
}
