import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// FIXED PATH: Points to the existing src/data directory
const dataPath = path.join(process.cwd(), "src", "data", "videos.json");

/**
 * GET: Retrieves the cinematic reels from the Sovereign Registry
 */
export async function GET() {
    try {
        // Ensure the directory exists
        const dirPath = path.join(process.cwd(), "src", "data");
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Initialize file with empty array if it doesn't exist
        if (!fs.existsSync(dataPath)) {
            fs.writeFileSync(dataPath, JSON.stringify({ videos: [] }, null, 2));
        }

        const fileData = fs.readFileSync(dataPath, "utf8");
        const data = JSON.parse(fileData);

        return NextResponse.json(data);
    } catch (error) {
        console.error("Cinema GET Error:", error);
        return NextResponse.json(
            { error: "Failed to read Cinema Vault" },
            { status: 500 }
        );
    }
}

/**
 * POST: Commits new reels or updates to the Sovereign Registry
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate body structure
        if (!body.videos || !Array.isArray(body.videos)) {
            return NextResponse.json(
                { error: "Invalid data format. 'videos' array required." },
                { status: 400 }
            );
        }

        // Write the updated video array to the JSON file in src/data
        fs.writeFileSync(dataPath, JSON.stringify(body, null, 2));

        return NextResponse.json({ message: "Cinema Database Synchronized" });
    } catch (error) {
        console.error("Cinema POST Error:", error);
        return NextResponse.json(
            { error: "Failed to write to Cinema Vault" },
            { status: 500 }
        );
    }
}