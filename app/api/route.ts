import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export const GET = async (req: Request,res: Response)=>{
    console.log("Get Reqest2")
    return NextResponse.json({message:"ok"},{status:200})
}
