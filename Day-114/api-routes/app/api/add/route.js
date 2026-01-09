import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    console.log("route ka console", data);
    return NextResponse.json({success:true, data});
}