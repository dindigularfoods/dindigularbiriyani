import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

        const buffer = Buffer.from(await file.arrayBuffer());

        // Clean filename and add timestamp
        const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-").toLowerCase()}`;

        // This ensures the path points to your E: drive public folder
        const uploadDir = path.join(process.cwd(), "public", "images", "locations");

        // Expert Fix: Recursive check/create
        await fs.mkdir(uploadDir, { recursive: true });

        const filePath = path.join(uploadDir, filename);
        await fs.writeFile(filePath, buffer);

        // Return the relative path for the frontend
        return NextResponse.json({ url: `/images/locations/${filename}` });
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: "Server failed to save file" }, { status: 500 });
    }
}