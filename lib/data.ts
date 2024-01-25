import { NonDirectionalSuspenseListProps } from "react"
import { Repo } from "./types";

var repos: Repo[] = [
    {
        id: 0,
        name: 'mini_next',
        url: 'https://github.com/NihadAxund/mini_next',
        imageUrl: 'https://avatars.githubusercontent.com/u/113647098?v=4'
    },
    {
        id: 1,
        name: 'mini_next',
        url: 'https://github.com/NihadAxund/mini_next',
        imageUrl: 'https://avatars.githubusercontent.com/u/113647098?v=4'
      }
];

export const getRepos = ()=> {
    console.log("----------------")
    console.log(repos)
    return repos;
}

export const addRepo = (repo:Repo)=>{
    if(!repo) return null;
    if (!repos) {
        repo.id = 0;
    }
    else {
        repo.id = repos.length;
    }
    console.log(repo)
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
