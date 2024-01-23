import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Repo } from "../../../lib/types";
import { addRepo, getRepos } from "@/lib/data";
async function userAvatarUrl(repoUrl: string) {
  try {
    const cleanedRepoUrl = repoUrl.replace("https://github.com/", "");
    console.log(cleanedRepoUrl);

    const user = await fetch(`https://api.github.com/repos/${cleanedRepoUrl}`)
      .then((response) => response.json())
    return user
  } catch (error) {
    return null;
  }
}

export const GET = async (req: Request, res: Response) => {
  console.log("Get Reqest");
  let arr = getRepos();
  if(arr&&arr.length>0){
      return NextResponse.json({arr}, { status: 200 });
  }
  return NextResponse.json({ message:"Repository null" }, { status: 401 });

};

// export const POST = async (req: Request, res: Response)=>{
//     let data = await req.json();
//     console.log(data);
//     return NextResponse.json({data},{status:200})
// }

export const POST = async (req: Request, res: Response) => {
  const { repoUrl } = await req.json();
  const data = await userAvatarUrl(repoUrl);
  if(data==null)
    return NextResponse.json({ message:"Repository null" }, { status: 401 });
  let repo: Repo = {
    id: null,
    name: data.name,
    url: data.html_url,
    imageUrl: data.owner.avatar_url,
   };
   let adddata = addRepo(repo);
   if (!adddata) {
        return NextResponse.json({ message:"Repository null" }, { status: 401 });
   }

  return NextResponse.json({ adddata }, { status: 200 });
};
