import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse,NextRequest } from 'next/server'

export const GET = async (req: Request,res: Response)=>{
    console.log("Get Reqest")
    return NextResponse.json({message:"ok"},{status:200})
}
