import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export const GET = async (req: Request,res: Response)=>{
    console.log("Get Reqest")
    let data = await req.json();
    console.log(data);
    return NextResponse.json({data},{status:200})
}


// export const POST = async (req: Request,res: Response)=>{
//     console.log("Get Reqest")
//     let repoUrl = await req.url.split('repos/')[1];
//     const cleanedRepoUrl = repoUrl.replace('https://github.com/', '');

//     const user = await fetch(`https://api.github.com/repos/${cleanedRepoUrl}`)
//         .then(response => response.json())
//         .then(repo => repo.owner.login);

//     const userAvatarUrl = `https://api.github.com/users/${user}`;

//     return NextResponse.json({user},{status:200})
// }

