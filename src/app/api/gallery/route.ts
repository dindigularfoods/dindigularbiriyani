import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const galleryPath = path.join(process.cwd(), "src/data/gallery.json");

export async function GET() {
    const data = fs.readFileSync(galleryPath, "utf8");
    return NextResponse.json(JSON.parse(data));
}

export async function POST(req: Request) {
    const body = await req.json();
    fs.writeFileSync(galleryPath, JSON.stringify(body, null, 2), "utf8");
    return NextResponse.json({ success: true });
}